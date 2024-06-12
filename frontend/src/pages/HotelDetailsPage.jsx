import { useQuery } from "@tanstack/react-query";
import apiHotels from "../services/api-hotels";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

function HotelDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["hotel", id],
    queryFn: () => apiHotels.getHotel(id),
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (data.status !== "success") {
    navigate("/hotels");
    toast.error(`Error fetching the detail, ${data.message}`);
    return;
  }

  const { data: hotel } = data.data;
  // console.log(hotel);

  return (
    <div className="flex flex-col gap-5">
      <h1>{hotel.name}</h1>
      <h3>starRating: {hotel.starRating}</h3>
      <h3>address: {hotel.address}</h3>
      <h3>summary: {hotel.summary}</h3>
      <h3>description: {hotel.description}</h3>
    </div>
  );
}

export default HotelDetailsPage;
