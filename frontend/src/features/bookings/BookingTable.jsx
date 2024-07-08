/* eslint-disable react/prop-types */
import { bookings } from "../../data/bookings";
import Table from "../../ui/table/Table";

const bookingHeaders = [
  { label: "Booking Date", key: "bookingDate" },
  { label: "Customer", key: "customer" },
  { label: "Persons", key: "persons" },
  { label: "Phone", key: "phone" },
  { label: "Check-In", key: "checkIn" },
  { label: "Check-Out", key: "checkOut" },
  { label: "Payment", key: "paymentStatus" },
];

function BookingTable({ bookingTitle }) {
  return (
    <Table title={bookingTitle} headers={bookingHeaders} bodyDatas={bookings} />
  );
}

export default BookingTable;
