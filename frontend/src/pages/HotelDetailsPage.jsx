import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
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
import SpinnerMini from "../ui/SpinnerMini";
import { useState } from "react";
import QueryKey from "../constants/QueryKey";
import apiRooms from "../services/apiRooms";
import { useQuery } from "@tanstack/react-query";

function HotelDetailsPage() {
  SwiperCore.use([Navigation, Autoplay]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState("");

  const { id } = useParams();

  const {
    data: { data: { data: hotel } = {} } = {},
    isLoading,
    isError,
    error,
  } = useHotel({ id });

  const { data: { data: { rooms } = {} } = {}, isLoading: isLoadingRooms } =
    useQuery({
      queryKey: [QueryKey.ROOMS, id, searchParams.get("search")],
      queryFn: () =>
        apiRooms.getAllRoomsOnHotel({
          hotelId: id,
          selectedRoomTypes: [searchParams.get("search")],
        }),
    });

  if (isLoading) {
    return (
      <div
        className="relative flex h-[95vh] flex-col items-center justify-center"
        style={{
          "clip-path": "polygon(0 0, 100vw 0%, 100vw 70vh, 0 90vh)",
        }}
      >
        <div className="absolute -z-[-9] h-full w-full bg-blue-600 opacity-50"></div>
        {/* <img
        src={hotel.imageCover}
        alt=""
        className="absolute -z-10 h-full w-full object-cover object-center"
      /> */}
        <Spinner />
        <h1
          style={{ "backface-visibility": "hidden" }}
          className="z-10 w-[55rem] bg-blue-600 p-4 text-center text-7xl font-bold text-slate-300 shadow-lg"
        >
          <SpinnerMini />
        </h1>
        <h2
          style={{ "backface-visibility": "hidden" }}
          className="z-10 flex w-[35rem] items-center justify-center whitespace-pre-line bg-blue-600 p-4 text-center text-xl font-bold text-slate-300 opacity-85 shadow-lg"
        >
          <SpinnerMini />
        </h2>
        <p
          style={{ "backface-visibility": "hidden" }}
          className="z-10 mt-2 flex w-[25rem] items-center justify-center whitespace-pre-line p-2 text-slate-100 opacity-85 shadow-lg"
        >
          <SpinnerMini />
        </p>
      </div>
    );
  }

  if (isError) {
    toast.error(
      error?.response?.message || "No Hotel Found. 404); please try again",
    );

    return navigate("/hotels");
  }

  const handleSearchParams = (type) => {
    searchParams.set("search", type);
    setSearchParams(searchParams);
    setActive(type);
  };

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
      <div className="m-6 flex flex-col items-center justify-center p-4">
        <h2 className="border-b-2 border-slate-400 p-3 text-4xl font-bold text-slate-600 shadow-2xl">
          Available Hotel Rooms (Right now)
        </h2>

        <div className="mt-4 flex items-center justify-center gap-2 border p-2 shadow">
          <button
            className=":bg-blue-600 mr-2 flex w-[2rem] items-center justify-center rounded bg-blue-600 px-2 py-1 text-xs text-slate-200 shadow transition-all duration-300 disabled:text-slate-200"
            onClick={() => {
              setActive("");
              navigate(`/hotels/${id}`);
            }}
          >
            all
          </button>
          {["single", "double", "twin", "triple", "quad", "twin-double"].map(
            (type) => (
              <button
                disabled={active === type}
                className="flex w-[5rem] items-center justify-center rounded bg-slate-100 px-2 py-1 text-xs text-slate-500 shadow transition-all duration-300 hover:bg-blue-600 hover:text-slate-200 disabled:cursor-not-allowed disabled:bg-blue-600 disabled:text-slate-200"
                key={type}
                onClick={() => handleSearchParams(type)}
              >
                {type}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="mx-auto grid w-[70vw] grid-cols-[300px,300px,300px] items-center justify-center gap-4 rounded-md border-2 p-4 shadow-xl">
        {isLoadingRooms ? (
          <div className="flex w-full items-center justify-center col-span-3">
            <Spinner />
          </div>
        ) : rooms?.length > 0 ? (
          rooms.slice(0, 6).map((room, i) => <RoomCard key={i} room={room} />)
        ) : (
          <div className="flex h-[200px] w-[70vw] items-center justify-center p-4">
            <p className="text-2xl font-bold text-slate-500">
              There are no rooms found 404(:
            </p>
          </div>
        )}
        {rooms?.length > 0 && (
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
