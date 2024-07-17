import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { useHotel } from "../features/hotels/useHotel";
import Spinner from "../ui/Spinner";

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
        <p
          style={{ "backface-visibility": "hidden" }}
          className="z-10 mt-2 flex w-[25rem] items-center justify-center whitespace-pre-line p-2 text-slate-100 opacity-85 shadow-lg"
        >
          Have A Total of {hotel.numOfRooms} Rooms
        </p>
      </div>

      {/* HOTEL DESCRIPTION */}
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="border-b text-sm text-slate-400 shadow">
          Hotel Description
        </h2>
        <div className="m-4 flex items-center justify-center p-3 leading-10 tracking-wide">
          <span className="w-[35rem]">{hotel.description}</span>
        </div>
      </div>

      {/* HOTEL SUMMARY */}
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="m-4 border-b text-sm text-slate-400 shadow">
          Hotel Summary
        </h2>

        <div className="m-4 flex items-center justify-center p-3">
          <p
            style={{ "backface-visibility": "hidden" }}
            className="z-10 -mr-[20rem] flex w-[45rem] items-center whitespace-pre-line bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-4 text-center text-4xl font-bold text-slate-300 shadow-lg"
          >
            {hotel.summary}
          </p>
          <div className="">
            <img
              src={hotel.hotelImages[1]}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* HOTEL FACILITIES */}
      <div className="m-4 flex items-center justify-center p-4">
        <h2 className="border-b text-sm text-slate-400 shadow">
          Hotel Facilities
        </h2>
      </div>

      <div className="mx-auto mb-4 flex w-[70vw] flex-wrap items-center justify-center gap-7">
        {hotel.facilities.map((facility) => (
          <span
            className="min-w-[10rem] rounded-full bg-blue-900 px-4 py-2 text-center text-white"
            key={facility}
          >
            {facility}
          </span>
        ))}
      </div>

      {/* HOTEL IMAGE */}
      <div className="m-4 flex items-center justify-center p-4">
        <h2 className="border-b text-sm text-slate-400 shadow">Hotel Images</h2>
      </div>

      <div className="mb-5 px-8 py-6">
        {hotel.hotelImages.length > 3 ? (
          <div className="">
            <Swiper
              navigation
              slidesPerView={3}
              autoplay={{
                delay: 1000,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              spaceBetween={1}
              loop={true}
            >
              {hotel?.hotelImages?.map((image, i) => (
                <SwiperSlide key={image}>
                  <div className="flex justify-center">
                    <img
                      src={image}
                      alt={`hotel-image-[${i + 1}]`}
                      className="h-[300px] object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            {hotel?.hotelImages?.map((image, i) => (
              <div key={image} className="flex justify-center">
                <img
                  src={image}
                  alt={`hotel-image-[${i + 1}]`}
                  className="h-[300px] object-cover object-center"
                />
              </div>
            ))}
          </div>
        )}
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
