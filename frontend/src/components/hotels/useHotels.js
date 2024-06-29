import { useQuery } from "react-query";
import apiHotels from "../../services/apiHotels";

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
