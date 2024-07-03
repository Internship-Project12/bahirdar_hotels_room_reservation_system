import { hotels } from "../../data/hotels";
import HotelTableBody from "../../features/hotels/HotelTableBody";
import HotelTableHeading from "../../features/hotels/HotelTableHeading";

function HotelsTable() {
  return (
    <div className="w-full bg-white font-lato text-gray-600 shadow-md">
      <h1 className="p-4 font-opensans text-2xl font-bold uppercase">
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
