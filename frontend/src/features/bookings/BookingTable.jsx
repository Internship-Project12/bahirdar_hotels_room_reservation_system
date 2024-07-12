/* eslint-disable react/prop-types */
import Table from "../../ui/table/Table";

function BookingTable({  bookingHeaders , bookings}) {
  return (
    <Table headers={bookingHeaders} data={bookings} />
  );
}

export default BookingTable;
