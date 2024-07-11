import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DashboardHeader from "./DashboardHeader";

import {
  HiOutlineHome,
  HiBuildingLibrary,
  HiOutlineCalendarDays,
  HiOutlineUsers,
} from "react-icons/hi2";
import { MdRoom } from "react-icons/md";

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
    title: "Hotel",
    url: "/dashboard/hotel",
    Icon: <HiBuildingLibrary size={20} />,
  },
  {
    title: "Rooms",
    url: "/dashboard/rooms",
    Icon: <MdRoom size={20} />,
  },
];

function DashboardLayout() {
  return (
    <div className="relative mx-auto flex max-w-[1400px]">
      <SideBar menus={adminMenus} />
      {/* <SideBar menus={managerMenus} /> */}
      <div className="ml-[260px] flex h-full flex-1 flex-col overflow-hidden bg-slate-200/75 text-gray-700">
        <DashboardHeader />
        <main className="mx-4 flex flex-1 overflow-y-auto overflow-x-hidden p-3 font-opensans">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
