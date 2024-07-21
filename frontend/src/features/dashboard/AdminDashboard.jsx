import {
  MdOutlineBedroomChild,
  MdOutlineFreeCancellation,
  MdOutlineManageSearch,
  MdOutlinePendingActions,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import Stats from "../hotels/Stats";
import HotelCard from "../hotels/HotelCard";
// import BookingTable from "../bookings/BookingTable";
import { Link } from "react-router-dom";
import RecentUsers from "../users/RecentUsers";
import BookingPieChart from "../stats/BookingPieChart";
import AreaChartBox from "../stats/AreaChartBox";
import BarChartBox from "../stats/BarChartBox";
import {
  barChartBookingData,
  barChartBoxVisit,
  bookingRevenueData,
  hotelUserBookingmonthlyStatusData,
} from "../../data/stat-data";

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

const AdminStats = [
  {
    Icon: MdOutlineBedroomChild,
    title: "Available rooms",
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

      <section className="m-3 my-6 flex justify-between bg-white p-4">
        <RecentUsers />
        <BookingPieChart />
      </section>

      <section className="m-3 my-6 flex h-[500px] bg-white p-8">
        <AreaChartBox
          title="Number of Registered Hotels and Users Monthly"
          data={hotelUserBookingmonthlyStatusData}
          dataKeys={["users", "hotels"]}
          colors={["#160ce4", "#15c458"]}
        />
      </section>

      <section className="flex justify-between">
        <div className="m-3 my-6 h-96 w-full bg-white p-6 py-6">
          <BarChartBox data={barChartBoxVisit} />
        </div>
        <div className="m-3 my-6 h-96 w-full bg-white p-6 py-6">
          <BarChartBox data={barChartBookingData} />
        </div>
      </section>
      <section className="m-3 my-6 flex h-[500px] bg-white p-6">
        <AreaChartBox
          title="Revenue Analysis"
          data={bookingRevenueData}
          dataKeys={["revenue"]}
          colors={["#15c458"]}
        />
      </section>
      <section className="mb-8 flex flex-col">
        <div className="flex justify-between bg-white p-4">
          <h2 className="text-2xl font-bold uppercase">
            Recently added Hotels
          </h2>
          <Link
            to="/dashboard/hotels"
            className="flex items-center rounded-full bg-blue-500 px-2 py-1 text-sm text-white transition-all duration-200 hover:scale-105"
          >
            See more &gt;&gt;
          </Link>
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
        <div className="flex justify-between bg-white p-4">
          <h2 className="text-2xl font-bold uppercase">Recent Users</h2>
          <Link
            to="/dashboard/users"
            className="flex items-center rounded-full bg-blue-500 px-2 py-1 text-sm text-white transition-all duration-200 hover:scale-105"
          >
            See more &gt;&gt;
          </Link>
        </div>

        {/* <BookingTable bookings={RecentBooks} bookingHeaders={bookingHeaders} /> */}
      </section>
    </div>
  );
}

export default AdminDashboard;
