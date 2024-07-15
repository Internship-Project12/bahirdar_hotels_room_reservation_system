import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiRooms from "../../services/apiRooms";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import QueryKey from "../../constants/QueryKey";
import { useNavigate } from "react-router-dom";

export const useCreateRoom = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { role, user } = useAuthContext();
  let id = "";
  if (role === "manager") {
    id = user.hotel._id;
  }

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => apiRooms.createRoom({ id, data }),
    onSuccess: () => {
      toast.success("Room added successfully");
      queryClient.invalidateQueries(QueryKey.ROOMS);

      navigate("/dashboard/rooms");
    },
    onError: (err) => {
      toast.error(
        err?.response?.data.message ||
          "Something went wrong: unable to add a room",
      );
    },
  });

  return { mutate, isPending };
};
