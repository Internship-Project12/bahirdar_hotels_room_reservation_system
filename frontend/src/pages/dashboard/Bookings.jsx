import BookingTable from "../../features/bookings/BookingTable";

function Bookings() {
  return (
    <div className="w-full">
      <BookingTable bookingTitle={"All Bookings"} />;
    </div>
  );
}

export default Bookings;
