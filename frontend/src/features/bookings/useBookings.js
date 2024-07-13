import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiBookings from "../../services/apiBookings";

export const useBookings = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.BOOKINGS],
    queryFn: apiBookings.getAllBookings,
  });

  return { data, isLoading };
};
