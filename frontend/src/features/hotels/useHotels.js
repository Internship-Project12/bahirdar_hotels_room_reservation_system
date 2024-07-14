import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiHotels from "../../services/apiHotels";
import { useSearchParams } from "react-router-dom";

export const useHotels = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || null;

  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.HOTELS, search],
    queryFn: () => apiHotels.getAllHotels(searchParams),
  });

  return { data, isLoading };
};
