import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./DashboardHeader";

function DashboardLayout() {
  return (
    <div className="max-w-[120rem relative mx-auto flex">
      <SideBar />
      <div className="absolute left-[260px] flex h-screen min-w-[calc(100vw-260px)] flex-1 flex-col overflow-auto bg-slate-200/75">
        <DashboardHeader />
        <main className="h-[100%] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
