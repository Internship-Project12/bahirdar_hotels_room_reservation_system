import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import apiHotels from "../../services/apiHotels";

function HotelDetailsPage() {
  SwiperCore.use([Navigation]);

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
    <div className="flex flex-col gap-5 p-4">
      <div className="">
        <img src={hotel.imageCover} alt="" />
      </div>
      <h1 className="text-xl font-bold">{hotel.name}</h1>
      <div>
        <span className="text-xl font-bold">starRating: </span>
        {hotel.starRating}
      </div>
      <div>
        <span className="text-xl font-bold">address: </span>
        {hotel.address}
      </div>
      <div>
        <span className="text-xl font-bold">summary: </span>
        {hotel.summary}
      </div>
      <div>
        <span className="text-xl font-bold">description: </span>
        {hotel.description}
      </div>
      <div>
        <span className="text-xl font-bold">num of rooms: </span>
        {hotel.numOfRooms}
      </div>
      <span className="text-xl font-bold">Hotel Facilities: </span>
      <div className="flex flex-wrap gap-7">
        {hotel.facilities.map((facility) => (
          <span
            className="min-w-[10rem] rounded-full bg-blue-900 px-4 py-2 text-center text-white"
            key={facility}
          >
            {facility}
          </span>
        ))}
      </div>
      <div className="m-8">
        <Swiper navigation slidesPerView={2} spaceBetween={20} loop={true}>
          {hotel?.hotelImages?.map((image, i) => (
            <SwiperSlide key={image}>
              <div className="flex justify-center">
                <img
                  src={image}
                  alt={`hotel-image-[${i + 1}]`}
                  className="h-96 w-full rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="flex justify-end">
        <Link
          to={`/update-hotel/${hotel._id}`}
          // onClick={() => mutate(hotel._id)}
          // disabled={isPending || true}
          className="rounded bg-blue-500 p-2 text-white disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          update hotel
        </Link>
        <button
          onClick={() => mutate(hotel._id)}
          disabled={isPending}
          className="rounded bg-blue-500 p-2 text-white disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          delete hotel
        </button>
      </div> */}
    </div>
  );
}

export default HotelDetailsPage;
