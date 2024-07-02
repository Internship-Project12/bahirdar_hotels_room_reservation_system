import { hotels } from "../../../data/hotels";
import HotelTableBody from "./HotelTableBody";
import HotelTableHeading from "./HotelTableHeading";

function HotelsTable() {
  return (
    <div className="m-6 bg-white p-3 font-lato text-gray-600 shadow-md">
      <h1 className="font-opensans p-4 text-2xl font-bold uppercase">
        All Hotels
      </h1>
      <HotelTableHeading />

      {hotels.map((hotel) => (
        <HotelTableBody key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelsTable;
