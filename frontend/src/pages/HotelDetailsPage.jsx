import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { useHotel } from "../features/hotels/useHotel";
import Spinner from "../ui/Spinner";
import HotelDetailHero from "../components/HotelDetailHero";
import HotelDetailDescription from "../components/HotelDetailDescription";
import HotelDetailSummary from "../components/HotelDetailSummary";
import HotelDetailFacilities from "../components/HotelDetailFacilities";
import HotelDetailImages from "../components/HotelDetailImages";
import RoomCard from "../ui/RoomCard";

function HotelDetailsPage() {
  SwiperCore.use([Navigation, Autoplay]);
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
      {/* HERO SECTION */}
      <HotelDetailHero hotel={hotel} />

      {/* HOTEL DESCRIPTION */}
      <HotelDetailDescription hotel={hotel} />

      {/* HOTEL SUMMARY */}
      <HotelDetailSummary hotel={hotel} />

      {/* HOTEL FACILITIES */}
      <HotelDetailFacilities hotel={hotel} />

      {/* HOTEL IMAGE */}
      <HotelDetailImages hotel={hotel} />

      {/* HOTEL ROOMS */}
      <div className="m-6 flex items-center justify-center p-4">
        <h2 className="border-b-2 border-slate-400 p-3 text-4xl font-bold text-slate-600 shadow-2xl">
          Hotel Room
        </h2>
      </div>

      <div className="mx-auto grid w-[70vw] grid-cols-[300px,300px,300px] items-center justify-center gap-4 rounded-md border-2 p-4 shadow-xl">
        {hotel.rooms.length > 0 ? (
          hotel.rooms
            .slice(0, 6)
            .map((room, i) => <RoomCard key={i} room={room} />)
        ) : (
          <div className="flex h-[200px] w-[70vw] items-center justify-center p-4">
            <p className="text-2xl font-bold text-slate-500">
              This hotel has no added rooms yet :(404
            </p>
          </div>
        )}
        {hotel.rooms.length > 0 && (
          <div className="col-span-3 flex items-center justify-center">
            <Link
              to="rooms"
              className="mt-16 flex w-[30rem] items-center justify-center gap-4 rounded bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 px-6 py-4 text-center text-xl font-bold capitalize text-slate-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              See More Rooms On this hotel
              <span className="text-white">&gt;&gt;</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default HotelDetailsPage;
