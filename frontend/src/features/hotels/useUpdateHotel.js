import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import apiHotels from "../../services/apiHotels";
import QueryKey from "../../constants/QueryKey";

// UPDATE THT CURRENT HOTEL ON THE MANAGERS SETTING PART for more info go to updateHotel
export const useUpdateHotel = ({ hotelId }) => {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: (updatedHotelData) =>
      apiHotels.updateHotel({ updatedHotelData, id: id || hotelId }),
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKey.HOTEL, id]);
      toast.success("Hotel updated successfully");
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
