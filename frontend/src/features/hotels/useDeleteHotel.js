import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiHotels from "../../services/apiHotels";
import toast from "react-hot-toast";
import QueryKey from "../../constants/QueryKey";

export const useDeleteHotel = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id) => apiHotels.deleteHotel(id),
    onSuccess: () => {
      toast.success("You deleted a hotel successfully");
      queryClient.invalidateQueries({
        queryKey: [QueryKey.HOTELS],
      });
    },
    onError: () => {
      toast.error("Something went wrong: unable to delete hotel");
    },
  });

  return { mutate, isPending };
};
