import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiBookings from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";


export const useBookings = () => {
    const [searchParams] = useSearchParams();
    const status = searchParams.get("status") || "";

    const filter = {status}

  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.BOOKINGS, filter],
    queryFn: () => apiBookings.getAllBookings({filter}),
  });

  return { data, isLoading };
};
