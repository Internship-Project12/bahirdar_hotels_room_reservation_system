import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import DashboardHeader from "./DashboardHeader";

import {
  HiOutlineHome,
  HiBuildingLibrary,
  HiOutlineCalendarDays,
  HiOutlineUsers,
} from "react-icons/hi2";
import { MdOutlineBookmarkAdded, MdSettings } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { useAuthContext } from "../../context/AuthContext";

const adminMenus = [
  {
    title: "Home",
    url: "/dashboard",
    Icon: <HiOutlineHome size={20} />,
  },
  {
    title: "Hotels",
    url: "/dashboard/hotels",
    Icon: <HiBuildingLibrary size={20} />,
  },
  {
    title: "Bookings",
    url: "/dashboard/bookings",
    Icon: <HiOutlineCalendarDays size={20} />,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    Icon: <HiOutlineUsers size={20} />,
  },
];

const managerMenus = [
  {
    title: "Home",
    url: "",
    Icon: <HiOutlineHome size={20} />,
  },
  {
    title: "Rooms",
    url: "/dashboard/rooms",
    Icon: <IoBedSharp size={20} />,
  },
  {
    title: "Bookings",
    url: "/dashboard/bookings",
    Icon: <MdOutlineBookmarkAdded size={20} />,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    Icon: <HiOutlineUsers size={20} />,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    Icon: <MdSettings size={20} />,
  },
];

function DashboardLayout() {
  const navigate = useNavigate();
  const { role, isLoggedIn } = useAuthContext();

  // IF NOT LOGGED IN NAVIGATE TO THE SIGN IN PAGE
  if (!isLoggedIn) return navigate("/login", { replace: true });

  return (
    <div className="mx-auto flex max-w-[120rem] bg-black font-lato">
      {role === "admin" ? (
        <SideBar menus={adminMenus} />
      ) : role === "manager" ? (
        <SideBar menus={managerMenus} />
      ) : null}
      <div className="flex h-screen w-[calc(100vw-260px)] flex-col bg-slate-200 px-4 text-gray-700">
        <DashboardHeader />
        <main className="overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
