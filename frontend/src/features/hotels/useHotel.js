import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiHotels from "../../services/apiHotels";

export const useHotel = ({ id }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKey.HOTEL],
    queryFn: () => apiHotels.getHotel({ id }),
    retry: false
  });

  return { data, isLoading, isError };
};
