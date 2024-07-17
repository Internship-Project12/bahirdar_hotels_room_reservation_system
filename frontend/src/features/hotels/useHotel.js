import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiHotels from "../../services/apiHotels";

export const useHotel = ({ id }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKey.HOTEL, id],
    queryFn: () => apiHotels.getHotel({ id }),
    retry: false,
  });

  return { data, isLoading, isError, error };
};
