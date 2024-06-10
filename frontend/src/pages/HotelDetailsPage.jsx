import { useQuery } from "@tanstack/react-query";
import apiHotels from "../services/api-hotels";
import { useParams } from "react-router-dom";

function HotelDetailsPage() {
  const { id } = useParams();
  console.log(id);

  const { data: res, isLoading } = useQuery({
    queryKey: ["hotel", id],
    queryFn: () => apiHotels.getHotel(id),
  });

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (res.status !== "success") {
    return <p>{res.message}</p>;
  }

  const { data: hotel } = res.data;

  return <div>{hotel.name}</div>;
}

export default HotelDetailsPage;
