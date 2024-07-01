import { useQuery } from "react-query";
import apiHotels from "../../services/apiHotels";
import QueryKey from "../../constants/QueryKey";

export const useHotels = () => {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QueryKey.HOTELS],
    queryFn: apiHotels.getAllHotels,
  });
  return { hotels, isLoading, error };
};
