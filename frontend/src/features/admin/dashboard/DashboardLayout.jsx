import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import DashboardHeader from "./DashboardHeader";

function DashboardLayout() {
  return (
    <div className="min-h-[100vh bg-slate-800">
      <div className="mx-auto flex max-w-[120rem] overflow-auto">
        <SideBar />
        <div className="flex flex-1 flex-col bg-slate-800">
          <DashboardHeader />
          <main className="flex flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
