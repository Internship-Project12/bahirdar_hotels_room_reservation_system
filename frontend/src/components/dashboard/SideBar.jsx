import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiBuildingLibrary,
  HiOutlineCalendarDays,
  HiOutlineUsers,
} from "react-icons/hi2";

function SideBar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-gray-800 p-5 text-white">
      <div className="mb-8 flex items-center gap-2">
        <img
          className="h-16 w-16 rounded-full"
          src="hotel-images/img-2.jpg"
          alt="Logo"
        />
        <h1 className="text-2xl font-bold">BDUHotels</h1>
      </div>
      <nav className="flex flex-col space-y-4">
        <Link
          className="flex items-center gap-2 rounded p-2 hover:bg-gray-700"
          to="/"
        >
          <HiOutlineHome />
          <span>Home</span>
        </Link>

        <Link
          className="flex items-center gap-2 rounded p-2 hover:bg-gray-700"
          to="/hotels"
        >
          <HiBuildingLibrary />
          <span>Hotels</span>
        </Link>

        <Link
          className="flex items-center gap-2 rounded p-2 hover:bg-gray-700"
          to="/bookings"
        >
          <HiOutlineCalendarDays />
          <span>Bookings</span>
        </Link>

        <Link
          className="flex items-center gap-2 rounded p-2 hover:bg-gray-700"
          to="/users"
        >
          <HiOutlineUsers />
          <span>Users</span>
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;
