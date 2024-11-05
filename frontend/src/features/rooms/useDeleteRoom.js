import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiRooms from "../../services/apiRooms";
import toast from "react-hot-toast";
import QueryKey from "../../constants/QueryKey";

export const useDeleteRoom = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id) => apiRooms.deleteRoom({ id }),
    onSuccess: async () => {
      toast.success("You deleted a room successfully");
      await queryClient.invalidateQueries({
        queryKey: [QueryKey.ROOMS],
      });
    },
    onError: () => {
      toast.error("Something went wrong: unable to delete room");
    },
  });

  return { mutate, isPending };
};
