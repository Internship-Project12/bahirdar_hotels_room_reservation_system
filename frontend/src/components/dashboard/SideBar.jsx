import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiBuildingLibrary,
  HiOutlineCalendarDays,
  HiOutlineUsers,
} from "react-icons/hi2";

function SideBar() {
  return (
    <div className="flex h-screen w-[250px] flex-col gap-3 bg-gray-800 p-5 text-white">
      <div className="flex items-center gap-4">
        <img
          className="h-16 w-16 rounded-full"
          src="hotel-images/img-2.jpg"
          alt="Logo"
        />
        <span className="text-2xl font-bold">BDUHotels</span>
      </div>
      <nav className="flex flex-col gap-1 p-4 text-lg">
        <Link
          className="flex items-center gap-3 rounded p-3 hover:bg-slate-700"
          to="/"
        >
          <HiOutlineHome size={20} />
          <span>Home</span>
        </Link>

        <Link
          className="flex items-center gap-3 rounded p-3 hover:bg-slate-700"
          to="/hotels"
        >
          <HiBuildingLibrary size={20} />
          <span>Hotels</span>
        </Link>

        <Link
          className="flex items-center gap-3 rounded p-3 hover:bg-slate-700"
          to="/bookings"
        >
          <HiOutlineCalendarDays size={20} />
          <span>Bookings</span>
        </Link>

        <Link
          className="flex items-center gap-3 rounded p-3 hover:bg-slate-700"
          to="/users"
        >
          <HiOutlineUsers size={20} />
          <span>Users</span>
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;

// <div className="fixed left-0 top-0 flex h-screen w-64 flex-col bg-gray-800 p-5 text-white">
//       <div className="mb-8 flex items-center gap-2">
//         <img
//           className="h-16 w-16 rounded-full"
//           src="hotel-images/img-2.jpg"
//           alt="Logo"
//         />
//         <h1 className="text-2xl font-bold">BDUHotels</h1>
//       </div>
//       <nav className="flex flex-col space-y-4">
//         <Link
//           className="flex items-center gap-2 rounded p-2 hover:bg-gray-700"
//           to="/"
//         >
//           <HiOutlineHome />
//           <span>Home</span>
//         </Link>

//         <Link
//           className="flex items-center gap-2 rounded p-2 hover:bg-gray-700"
//           to="/hotels"
//         >
//           <HiBuildingLibrary />
//           <span>Hotels</span>
//         </Link>

//         <Link
//           className="flex items-center gap-2 rounded p-2 hover:bg-gray-700"
//           to="/bookings"
//         >
//           <HiOutlineCalendarDays />
//           <span>Bookings</span>
//         </Link>

//         <Link
//           className="flex items-center gap-2 rounded p-2 hover:bg-gray-700"
//           to="/users"
//         >
//           <HiOutlineUsers />
//           <span>Users</span>
//         </Link>
//       </nav>
//     </div>
