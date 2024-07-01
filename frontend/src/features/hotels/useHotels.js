import { useQuery } from "react-query";
import apiHotels from "../../services/api-hotels";

export const useHotels = () => {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: apiHotels.getAllHotels,
  });
  return { hotels, isLoading, error };
};
