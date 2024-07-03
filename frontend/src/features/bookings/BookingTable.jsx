/* eslint-disable react/prop-types */
import { bookings } from "../../data/bookings";
import BookingTableBody from "./BookingTableBody";
import BookingTableHeading from "./BookingTableHeading";

function BookingTable({ bookingTitle }) {
  return (
    <div>
      <div className="w-full rounded bg-white shadow-md">
        <h1 className="p-4 font-opensans text-2xl font-bold uppercase">
          {bookingTitle}
        </h1>
        <BookingTableHeading />
        {bookings.map((booking) => (
          <BookingTableBody key={booking.phone} booking={booking} />
        ))}
      </div>
    </div>
  );
}

export default BookingTable;
