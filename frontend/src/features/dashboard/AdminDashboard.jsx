import {
  MdOutlineBedroomChild,
  MdOutlineFreeCancellation,
  MdOutlineManageSearch,
  MdOutlinePendingActions,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import Stats from "../hotels/Stats";
import HotelCard from "../hotels/HotelCard";
import BookingTable from "../bookings/BookingTable";
import { Link } from "react-router-dom";

const bookingHeaders = [
  { label: "User", key: "user" },
  { label: "Hotel", key: "hotel" },
  { label: "Room Num", key: "room" },
  { label: "Check-In", key: "checkIn" },
  // { label: "Check-Out", key: "checkOut" },
  { label: "Num Of Nights", key: "numOfNights" },
  { label: "Price Per Night ", key: "pricePerNights" },
  { label: "status", key: "paymentStatus" },
];

const RecentBooks = [
  {
    user: "Alemu",
    userImg: "/user1.jpeg",
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    room: `#${101}`,
    numOfNights: 5,
    pricePerNights: 250,
    paymentStatus: "Completed",
    hotel: "abc international hotel",
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
    hotel: "abc international hotel",
  },
  {
    user: "Alemu",
    userImg: "/user1.jpeg",
    checkIn: "22-05-2024",
    checkOut: "24-05-2024",
    room: `#${101}`,
    numOfNights: 5,
    pricePerNights: 250,
    paymentStatus: "Cancelled",
    hotel: "abc international hotel",
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
    hotel: "abc international hotel",
  },
];

const AdminStats = [
  {
    Icon: MdOutlineBedroomChild,
    title: "",
    number: 30,
  },
  {
    Icon: MdOutlineManageSearch,
    title: "Today's CheckIn",
    number: 30,
  },
  {
    Icon: MdOutlineShoppingCartCheckout,
    title: "Today's Checkout",
    number: 130,
  },
  {
    Icon: MdOutlineFreeCancellation,
    title: "Cancellations",
    number: 30,
  },
  {
    Icon: MdOutlinePendingActions,
    title: "Pending Payments",
    number: 30,
  },
];

const Hotels = [
  {
    image: "/hotel-images/img-2.jpg",
    name: "Palm International Hotel ",
    pricePerNight: 542,
  },
  {
    image: "/hotel-images/img-2.jpg",
    name: "Palm Palace International Hotel",
    pricePerNight: 542,
  },
  {
    image: "/hotel-images/img-2.jpg",
    name: "Palm Palace International Hotel",
    pricePerNight: 542,
  },
  {
    image: "/hotel-images/img-2.jpg",
    name: "Palm Palace International Hotel",
    pricePerNight: 542,
  },
  {
    image: "/hotel-images/img-2.jpg",
    name: "Palm Palace International Hotel",
    pricePerNight: 542,
  },
];

function AdminDashboard() {
  return (
    <div className="flex w-full flex-col">
      <section className="m-3 mb-8 grid grid-cols-5 justify-between">
        {AdminStats.map((stat, i) => (
          <Stats
            key={i}
            Icon={stat.Icon}
            title={stat.title}
            number={stat.number}
          />
        ))}
      </section>

      <section className="mb-8 flex flex-col">
        <div className="flex justify-between bg-white p-4">
          <h2 className="text-2xl font-bold uppercase">
            Recently added Hotels
          </h2>
          <Link to='/dashboard/hotels' className="px-2 bg-blue-500 rounded-full py-1 text-sm text-white flex items-center hover:scale-105 transition-all duration-200">See more &gt;&gt;</Link>
        </div>
        <div className="relative grid md:grid-cols-3 lg:grid-cols-4">
          {Hotels.slice(0, 4).map((room, i) => (
            <HotelCard
              key={i}
              hotelPhoto={room.image}
              hotelName={room.name}
              availableRooms={74}
              pricePerDay={room.pricePerNight}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="p-3">Recent Book Operation</div>
        <BookingTable bookings={RecentBooks} bookingHeaders={bookingHeaders} />
      </section>
    </div>
  );
}

export default AdminDashboard;
