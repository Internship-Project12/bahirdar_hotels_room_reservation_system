import { Link } from "react-router-dom";
import { hotels } from "../../data/hotels";
import HotelTableBody from "./HotelTableBody";
// import HotelTableHeading from "./HotelTableHeading";

function HotelsTable() {
  return (
    <div className="w-full bg-white font-lato text-gray-600 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="p-4  text-2xl font-bold uppercase">
          All Hotels
        </h1>
        <Link
          to={"/add-hotel"}
          className="mr-2 cursor-pointer rounded bg-blue-700 px-4 py-[6px] text-lg text-white"
        >
          Add Hotel
        </Link>
      </div>

      {/* <HotelTableHeading /> */}

      {hotels.map((hotel) => (
        <HotelTableBody key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelsTable;
