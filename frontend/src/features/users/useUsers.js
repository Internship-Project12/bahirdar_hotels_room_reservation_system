import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiUsers from "../../services/apiUsers";
import { useSearchParams } from "react-router-dom";

export const useUsers = (limit = "") => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const role = searchParams.get("role") || "";
  const filter = { search, role, limit };

  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.ALL_USERS, filter],
    queryFn: () => apiUsers.getAllUsers({ filter }),
  });

  return { data, isLoading };
};
