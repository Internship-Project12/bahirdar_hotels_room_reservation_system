import { useQuery } from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import apiHotels from "../../services/apiHotels";
import { useSearchParams } from "react-router-dom";

export const useHotels = ({ selectedStars } = {selectedStars: ''}) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const hotelStar = searchParams.get("hotelStar") || "";
  const sort = searchParams.get("sortBy") || "newest";

  const filter = { search, hotelStar, sort, selectedStars };

  const { data, isLoading } = useQuery({
    queryKey: [QueryKey.HOTELS, filter],
    queryFn: () => apiHotels.getAllHotels({ filter }),
  });

  return { data, isLoading };
};
