import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function DashboardLayout() {
  return (
    <div className="relative mx-auto flex max-w-[1400px]">
      <SideBar />
      <div className="absolute left-[260px] flex flex-1 flex-col overflow-hidden bg-slate-200/75">
        <Header />
        <main className="flex flex-1 overflow-y-auto overflow-x-hidden font-opensans">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
