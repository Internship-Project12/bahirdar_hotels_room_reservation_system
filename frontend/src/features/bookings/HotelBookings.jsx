import { useAuthContext } from "../../context/AuthContext";
import AllBookings from "./AllBookings";

function HotelBookings() {
  const { role, user } = useAuthContext();
  const hotelId = (role === "manager" && user.hotel._id) || "";
  // HERE THE HOTEL IS IS NEEDED TO FIND ALL THE BOOKINGS OF ONE HOTEL
  return <AllBookings hotelId={hotelId} />;
}

export default HotelBookings;
