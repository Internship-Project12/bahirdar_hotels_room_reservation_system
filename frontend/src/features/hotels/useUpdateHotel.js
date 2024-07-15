import { useMutation,  useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import apiHotels from "../../services/apiHotels";


export const useUpdateHotel = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: (updatedHotelData) =>
      apiHotels.updateHotel({ updatedHotelData, id }),
    onSuccess: () => {
      queryClient.invalidateQueries(["hotel", id]);
      toast.success("Hotel updated successfully");
      navigate(`/hotels/${id}`);
    },
    onError: (err) => {
      toast.error(
        err?.response?.data.message ||
          "something went wrong: unable to update a hotel",
      );
    },
  });

  return { mutate, isPending };
};
