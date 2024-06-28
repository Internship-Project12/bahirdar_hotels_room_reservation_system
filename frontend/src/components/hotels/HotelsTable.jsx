import { hotels } from "../../../data/hotels";
import HotelTableBody from "./HotelTableBody";
import HotelTableHeading from "./HotelTableHeading";

function Hotels() {
  return (
    <div className="p-3 text-gray-600 shadow-md">
      <HotelTableHeading />

      {hotels.map((hotel) => (
        <HotelTableBody key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default Hotels;
