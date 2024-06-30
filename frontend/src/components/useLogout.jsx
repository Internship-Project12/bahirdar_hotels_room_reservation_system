import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiAuth from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import QueryKey from "../constants/QueryKey";

function useLogout() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: apiAuth.logout,
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKey.USER);
      queryClient.setQueryData([QueryKey.USER], null);

      toast.success("Logout successful");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error("Logout failed", err?.response?.data.message);
    },
  });

  return { logout, isPending };
}

export default useLogout;
