import { Link } from "react-router-dom";
import HotelTableBody from "./HotelTable";
import HotelTableHeader from "./HotelTableHeader";
import { useHotels } from "./useHotels";
import Spinner from "../../ui/Spinner";

function AllHotels() {
  const { data, isLoading } = useHotels();

  if (isLoading)
    return (
      <div className="w-full bg-white text-gray-600 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="p-4 uppercase">All Hotels</h1>
          <Link
            to={"/dashboard/add-hotel"}
            className="mr-2 cursor-pointer rounded bg-blue-700 px-4 py-[6px] text-lg text-white"
          >
            Add Hotel
          </Link>
        </div>

        <HotelTableHeader />

        <Spinner />
      </div>
    );

  const { data: hotels } = data.data;

  return (
    <div className="w-full bg-white text-gray-600 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="p-4 uppercase">All Hotels</h1>
        <Link
          to={"/dashboard/add-hotel"}
          className="mr-2 cursor-pointer rounded bg-blue-700 px-4 py-[6px] text-lg text-white"
        >
          Add Hotel
        </Link>
      </div>

      <HotelTableHeader />

      {hotels.map((hotel) => (
        <HotelTableBody key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default AllHotels;
