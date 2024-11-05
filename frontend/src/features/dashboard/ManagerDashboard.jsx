import {
  MdOutlineBedroomChild,
  MdOutlineFreeCancellation,
  MdOutlineManageSearch,
  MdOutlinePendingActions,
  MdOutlineShoppingCartCheckout,
} from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Stats from "../hotels/Stats";
import BookingCard from "../bookings/BookingCard";
import { useCurrentHotel } from "./useCurrentHotel";
import { useAuthContext } from "../../context/AuthContext";
import Spinner from "../../ui/Spinner";
import CustomLabeledPieChart from "../stats/CustomLabeledPieChart";
import AreaChartBox from "../stats/AreaChartBox";
import {
  barChartBookingData,
  barChartBoxVisit,
  bookingRevenueData,
  hotelUserBookingmonthlyStatusData,
  lineChartData,
} from "../../data/stat-data";
import BarChartBox from "../stats/BarChartBox";
import LineChartBox from "../stats/LineChartBox";
import ModalAddRoom from "../../ui/ModalAddRoom";

const managerStats = [
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

const RecentlyBookedRooms = [
  {
    photo: "/rooms/room1.jpeg",
    roomNumber: "001 ",
    pricePerNight: 542,
    type: "single",
  },
  {
    photo: "/rooms/room2.jpeg",
    roomNumber: "002",
    pricePerNight: 542,
    type: "double",
  },
  {
    photo: "/rooms/room3.jpeg",
    roomNumber: "003",
    pricePerNight: 542,
    type: "single",
  },
  {
    photo: "/rooms/room4.jpeg",
    roomNumber: "004",
    pricePerNight: 542,
    type: "triple",
  },
];

function ManagerDashboard() {
  const navigate = useNavigate();
  const { setCurrentHotelHandler } = useAuthContext();

  const { hotel, isLoading, isError } = useCurrentHotel();

  if (isLoading) return <Spinner />;

  if (isError) {
    toast.error(
      "Something went very wrong when fetching a hotel data : Please try again.",
    );
    return navigate("/");
  }

  if (hotel) {
    setCurrentHotelHandler(hotel);
  }

  return (
    <>
      <div className="flex w-full flex-col overflow-hidden">
        <section className="m-3 mb-8 grid grid-cols-5 justify-between">
          {managerStats.map((stat, i) => (
            <Stats
              key={i}
              Icon={stat.Icon}
              title={stat.title}
              number={stat.number}
            />
          ))}
        </section>
        <section className="m-3 my-6 h-96 w-full bg-white p-8">
          <CustomLabeledPieChart />
        </section>

        <section className="flex justify-between">
          <div className="m-3 my-6 h-96 w-full bg-white p-6 py-6">
            <BarChartBox data={barChartBoxVisit} />
          </div>
          <div className="m-3 my-6 h-96 w-full bg-white p-6 py-6">
            <BarChartBox data={barChartBookingData} />
          </div>
        </section>

        <section className="m-3 my-6 flex h-[500px] bg-white p-8">
          <AreaChartBox
            title="Monthly Registered Number of Hotels and Users "
            data={hotelUserBookingmonthlyStatusData}
            dataKeys={["users", "hotels"]}
            colors={["#160ce4", "#15c458"]}
          />
        </section>

        <section className="m-3 my-6 flex h-[500px] bg-white p-6">
          <AreaChartBox
            title="Revenue Analysis"
            data={bookingRevenueData}
            dataKeys={["revenue"]}
            colors={["#15c458"]}
          />
        </section>

        <section className="mx-3 my-6 flex h-[400px] bg-white p-6">
          <LineChartBox
            data={lineChartData}
            title={"Total Number of Registered Users and Bookings over Time"}
          />
        </section>

        <section className="my-6 flex flex-col">
          <div className="flex justify-between bg-white p-4">
            <h2 className="text-2xl font-bold uppercase">
              Recently Booked Rooms
            </h2>
            <Link
              to="/dashboard/bookings"
              className="flex items-center rounded-full bg-blue-500 px-2 py-1 text-sm text-white transition-all duration-200 hover:scale-105"
            >
              See more &gt;&gt;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {RecentlyBookedRooms.map((room, i) => (
              <BookingCard key={i} {...room} />
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
      {hotel.rooms.length < 1 && <ModalAddRoom hotel={hotel} />}
    </>
  );
}

export default ManagerDashboard;
