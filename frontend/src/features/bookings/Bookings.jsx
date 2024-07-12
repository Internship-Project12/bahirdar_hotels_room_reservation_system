/* eslint-disable react/prop-types */
import BookingTable from "./BookingTable";

function Bookings({ bookingHeaders, bookings }) {
  return (
    <div className="grid w-full grid-cols-1">
      <div className="flex justify-between p-3">
        <h1>All Bookings</h1>
        <p>filter/sort</p>
      </div>
      <BookingTable bookingHeaders={bookingHeaders} bookings={bookings} />
    </div>
  );
}

export default Bookings;
