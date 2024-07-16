import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiBookings from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

// HERE THE HOTEL IS IS NEEDED TO FIND ALL THE BOOKINGS OF ONE HOTEL
export const useBookings = ({ hotelId }) => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "";

  const filter = { status, hotelId };

  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.BOOKINGS, filter],
    queryFn: () => apiBookings.getAllBookings({ filter }),
  });

  return { data, isLoading };
};
