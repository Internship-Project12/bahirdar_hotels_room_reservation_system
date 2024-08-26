import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import apiAuth from "../../services/apiAuth";
import QueryKey from "../../constants/QueryKey";

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: apiAuth.signup,
    onSuccess: () => {
      // console.log(data)
      queryClient.invalidateQueries(QueryKey.USER);
      toast.success("User signed up successfully");
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error(
        // error?.response?.data.message ||
        "something went wrong when singing up, Please check your email or your internet connection. try again later.",
      );
    },
  });

  return { mutate, isPending };
};
