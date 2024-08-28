import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiUsers from "../../services/apiUsers";
import QueryKey from "../../constants/QueryKey";
import toast from "react-hot-toast";

export const useUpdateMyPassword = () => {
  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiUsers.updateMyPassword,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.USER],
      });
      toast.success("Password updated successfully");
    },
    onError: (err) => {
      toast.error("Unable to update password, Please try again.");
      console.log(err);
    },
  });

  return { mutate, isPending };
};
