import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { useHotel } from "../features/hotels/useHotel";
import Spinner from "../ui/Spinner";

function HotelDetailsPage() {
  SwiperCore.use([Navigation]);
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    data: { data: { data: hotel } = {} } = {},
    isLoading,
    isError,
    error,
  } = useHotel({ id });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    toast.error(
      error?.response?.message || "No Hotel Found. 404); please try again",
    );

    return navigate("/hotels");
  }

  return (
    <div className="flex flex-col gap-5 p-4">
      <div
        className="relative flex h-[95vh] flex-col items-center justify-center"
        style={{
          "clip-path": "polygon(0 0, 100vw 0%, 100vw 70vh, 0 90vh)",
        }}
      >
        <div className="absolute -z-[-9] h-full w-full bg-blue-600 opacity-50"></div>
        <img
          src={hotel.imageCover}
          alt=""
          className="absolute -z-10 h-full w-full object-cover object-center"
        />
        <h1
          style={{ "backface-visibility": "hidden" }}
          className="z-10 w-[55rem] bg-blue-600 p-4 text-center text-7xl font-bold text-slate-300 shadow-lg"
        >
          {hotel.name}
        </h1>
        <h2
          style={{ "backface-visibility": "hidden" }}
          className="z-10 flex w-[35rem] items-center whitespace-pre-line bg-blue-600 p-4 text-center text-xl font-bold text-slate-300 opacity-85 shadow-lg"
        >
          A {hotel.hotelStar} star Hotel. Located In {hotel.address}
        </h2>
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
