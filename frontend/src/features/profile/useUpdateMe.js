import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiUsers from "../../services/apiUsers";
import QueryKey from "../../constants/QueryKey";
import toast from "react-hot-toast";

export const useUpdateMe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => apiUsers.updateMe({ data }),
    onSuccess: () => {
      toast.success("user profile updated successfully");

      queryClient.invalidateQueries({
        queryKey: [QueryKey.USER],
      });
    },
    onError: (error) => {
      toast.error("Unable to update Profile, Please try again.");
      console.log(error.response);
    },
  });

  return { mutate, isPending };
};
