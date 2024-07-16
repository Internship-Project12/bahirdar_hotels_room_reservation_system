import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import apiRooms from "../../services/apiRooms";
import QueryKey from "../../constants/QueryKey";

export const useUpdateRoom = () => {
  const { id } = useParams();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => apiRooms.updateRoom({ data, id }),
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.ROOM, id]);
      toast.success("Hotel room updated successfully");
      navigate(`/rooms`);
    },
    onError: (err) => {
      toast.error(
        err?.response?.data.message ||
          "something went wrong: unable to update a hotel room",
      );
    },
  });

  return { mutate, isPending };
};
