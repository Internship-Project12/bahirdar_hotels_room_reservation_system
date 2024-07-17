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

  const testRoom = {
    _id: "6693cdbc295dc5119b718701",
    roomNumber: "101",
    roomType: "double",
    pricePerNight: 200,
    isAvailable: true,
    amenities: ["TV", "AC"],
    capacity: 1,
    description: "This is a single room",
    images: [
      "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767826/dpdcizouxqvmwiubmhel.jpg",
      "http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767828/jccr0lowxldhrotudni2.jpg",
    ],
    hotel: "668ced40c8a56b00ec4b58da",
    createdAt: "2024-07-14T13:08:12.692Z",
    updatedAt: "2024-07-14T13:08:12.692Z",
    __v: 0,
    id: "6693cdbc295dc5119b718701",
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
      <div className="m-6 flex items-center justify-center p-4">
        <h2 className="border-b-2 border-slate-400 p-3 text-4xl font-bold text-slate-600 shadow-2xl">
          Hotel Room
        </h2>
      </div>

      <div className="mx-auto grid w-[70vw] grid-cols-[300px,300px,300px] items-center justify-center gap-4 rounded-md border-2 p-4 shadow-xl">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div
            key={i}
            className="h-full w-full border p-3 shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-grab"
          >
            <div className="flex flex-col">
              <div className="h-[200px] overflow-hidden rounded">
                <img
                  src={testRoom.images[0]}
                  alt=""
                  className="h-full w-full bg-cover bg-center"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="">
                  <h2 className="inline-block items-center text-sm text-slate-600">
                    <span className="text-xl font-bold text-slate-800">{`#${testRoom.roomNumber}`}</span>
                    :RoomNum
                  </h2>
                  <p className="inline-block items-center justify-center text-sm text-slate-600">
                    Room Type:{" "}
                    <span className="text-sm font-bold text-slate-800">{`${testRoom.roomType}`}</span>
                  </p>
                </div>

                <div className="">
                  <h2 className="inline-block items-center text-sm text-slate-600">
                    <span className="text-xl font-bold text-slate-800">{`#${testRoom.capacity}`}</span>
                    :max Person
                  </h2>
                  <p className="inline-block items-center justify-center text-sm text-slate-600">
                    Price/Night:{" "}
                    <span className="text-sm font-bold text-slate-800">{`${testRoom.pricePerNight}`}</span>
                  </p>
                </div>
              </div>
              <button className="rounded bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 px-4 py-2 text-slate-200">
                Book Room Now
              </button>
            </div>
          </div>
        ))}
        <div className="col-span-3 flex items-center justify-center">
          <Link className="mt-16 w-[30rem] rounded bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 px-6 py-4 text-xl font-bold capitalize text-slate-200 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            See All Rooms On this hotel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailsPage;
