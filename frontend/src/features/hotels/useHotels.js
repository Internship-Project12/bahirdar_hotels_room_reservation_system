import { useQuery } from '@tanstack/react-query'
import QueryKey from "../../constants/QueryKey";
import apiHotels from "../../services/apiHotels";

export const useHotels = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.HOTELS],
    queryFn: apiHotels.getAllHotels,
  });

  return { data, isLoading };
};
