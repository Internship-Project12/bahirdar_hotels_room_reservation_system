import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiBuildingLibrary,
  HiOutlineCalendarDays,
  HiOutlineUsers,
} from "react-icons/hi2";

function SideBar() {
  return (
    <div className=" flex min-h-screen w-[260px] flex-col gap-2 bg-gray-800 p-5 uppercase text-white">
      <div className="flex items-center gap-4 p-[3px]">
        <img
          className="h-16 w-16 rounded-full"
          src="/hotel-images/img-2.jpg"
          alt="Logo"
        />
        <span className="text-2xl font-bold">BDUHotels</span>
      </div>
      <hr className="border-b-2 border-gray-700" />
      <nav className="flex flex-col gap-1 p-4 text-lg transition">
        <Link
          className="flex items-center gap-3 rounded p-3 hover:bg-slate-700"
          to="dashboard"
        >
          <HiOutlineHome size={20} />
          <span>Home</span>
        </Link>

        <Link
          className="flex items-center gap-3 rounded p-3 hover:bg-slate-700"
          to="hotels"
        >
          <HiBuildingLibrary size={20} />
          <span>Hotels</span>
        </Link>

        <Link
          className="flex items-center gap-3 rounded p-3 hover:bg-slate-700"
          to="bookings"
        >
          <HiOutlineCalendarDays size={20} />
          <span>Bookings</span>
        </Link>

        <Link
          className="flex items-center gap-3 rounded p-3 hover:bg-slate-700"
          to="users"
        >
          <HiOutlineUsers size={20} />
          <span>Users</span>
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;
