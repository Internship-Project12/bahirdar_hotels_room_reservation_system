import { useNavigate, useParams } from "react-router-dom";
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
