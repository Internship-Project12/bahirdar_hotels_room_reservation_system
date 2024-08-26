import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiAuth from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import QueryKey from "../../constants/QueryKey";
import { useAuthContext } from "../../context/AuthContext";

function useLogout() {
  const navigate = useNavigate();
  const { handleOpenModal } = useAuthContext();

  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: apiAuth.logout,
    onSuccess: async () => {
      await queryClient.invalidateQueries(QueryKey.USER);

      toast.success("Logout successful");
      navigate("/", { replace: true });
      handleOpenModal();
    },
    onError: (err) => {
      console.log(err);
      toast.error("Logout failed", err?.response?.data.message);
    },
  });

  return { logout, isPending };
}

export default useLogout;
