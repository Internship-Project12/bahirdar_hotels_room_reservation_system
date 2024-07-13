import Table from "../../ui/table/Table";

const bookingHeaders = [
  { label: "User", key: "user" },
  { label: "Room Num", key: "room" },
  { label: "Check-In", key: "checkIn" },
  // { label: "Check-Out", key: "checkOut" },
  { label: "Num Of Nights", key: "numOfNights" },
  { label: "Price Per Night ", key: "pricePerNights" },
  { label: "status", key: "paymentStatus" },
];

const AllBookingsData = [
  {
    user: "Alemu",
    userImg: "/user1.jpeg",
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    room: `#${101}`,
    numOfNights: 5,
    pricePerNights: 250,
    paymentStatus: "Completed",
  },
  {
    user: "John Doe",
    userImg: "/user2.jpeg",
    room: `#${101}`,
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    numOfNights: 1,
    pricePerNights: 250,
    paymentStatus: "Pending",
  },
  {
    user: "Jane Smith",
    userImg: "/user3.jpeg",
    room: `#${101}`,
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    numOfNights: 2,
    pricePerNights: 250,
    paymentStatus: "Cancelled",
  },
  {
    user: "Alemu",
    userImg: "/user1.jpeg",
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    room: `#${101}`,
    numOfNights: 5,
    pricePerNights: 250,
    paymentStatus: "Completed",
  },
  {
    user: "John Doe",
    userImg: "/user2.jpeg",
    room: `#${101}`,
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    numOfNights: 1,
    pricePerNights: 250,
    paymentStatus: "Pending",
  },
  {
    user: "Jane Smith",
    userImg: "/user3.jpeg",
    room: `#${101}`,
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    numOfNights: 2,
    pricePerNights: 250,
    paymentStatus: "Cancelled",
  },
  {
    user: "Alemu",
    userImg: "/user1.jpeg",
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    room: `#${101}`,
    numOfNights: 5,
    pricePerNights: 250,
    paymentStatus: "Completed",
  },
  {
    user: "John Doe",
    userImg: "/user2.jpeg",
    room: `#${101}`,
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    numOfNights: 1,
    pricePerNights: 250,
    paymentStatus: "Pending",
  },
  {
    user: "Jane Smith",
    userImg: "/user3.jpeg",
    room: `#${101}`,
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    numOfNights: 2,
    pricePerNights: 250,
    paymentStatus: "Cancelled",
  },
];

function HotelBookings() {
  return (
    <div className="grid w-full grid-cols-1">
      <div className="flex justify-between p-3">
        <h1>All Bookings</h1>
        <p>filter/sort</p>
      </div>
      <Table headers={bookingHeaders} data={AllBookingsData} />
    </div>
  );
}

export default HotelBookings;
