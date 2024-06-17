import { useMutation, useQuery } from "@tanstack/react-query";
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

  const { mutate, isPending } = useMutation({
    mutationFn: apiHotels.deleteHotel,
    onSuccess: () => {
      toast.success("Hotel deleted");
      navigate("/hotels");
    },
    onError: (data) => {
      toast.success(`fail to delete a hotel ${data.message}`);
    },
  });

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
      <div className="">
        <img src={hotel.imageCover} alt="" className="max-w-[300px]" />
      </div>
      <h1>{hotel.name}</h1>
      <h3>starRating: {hotel.starRating}</h3>
      <h3>address: {hotel.address}</h3>
      <h3>summary: {hotel.summary}</h3>
      <h3>description: {hotel.description}</h3>
      <h3>price per Night: {hotel.pricePerNight}</h3>
      <h3>num of rooms: {hotel.numOfRooms}</h3>
      <div className="flex justify-end">
        <button
          onClick={() => mutate(hotel._id)}
          disabled={isPending || true}
          className="rounded bg-blue-500 p-2 text-white disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          delete hotel
        </button>
      </div>
    </div>
  );
}

export default HotelDetailsPage;
