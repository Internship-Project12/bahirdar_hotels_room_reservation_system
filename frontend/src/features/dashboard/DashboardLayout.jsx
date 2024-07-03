import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DashboardHeader from "./DashboardHeader";

function DashboardLayout() {
  return (
    <div className="relative mx-auto flex max-w-[1400px]">
      <SideBar />
      <div className="fixed left-[260px] flex h-full flex-1 flex-col overflow-hidden bg-slate-200/75 text-gray-700">
        <DashboardHeader />
        <main className="flex flex-1 overflow-y-auto overflow-x-hidden font-opensans">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
