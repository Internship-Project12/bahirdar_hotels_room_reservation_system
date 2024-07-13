import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiUsers from "../../services/apiUsers";

export const useUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.ALL_USERS],
    queryFn: apiUsers.getAllUsers,
  });

  return { data, isLoading };
};
