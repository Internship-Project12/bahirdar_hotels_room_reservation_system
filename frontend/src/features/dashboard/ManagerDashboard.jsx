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
    photo: "/hotel-images/img-2.jpg",
    roomNumber: "001 ",
    pricePerNight: 542,
    type: "single",
  },
  {
    photo: "/hotel-images/img-2.jpg",
    roomNumber: "002",
    pricePerNight: 542,
    type: "double",
  },
  {
    photo: "/hotel-images/img-2.jpg",
    roomNumber: "003",
    pricePerNight: 542,
    type: "single",
  },
  {
    photo: "/hotel-images/img-2.jpg",
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
    <div className="flex w-full flex-col">
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

      <section className="mb-8 flex flex-col">
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
  );
}

export default ManagerDashboard;
