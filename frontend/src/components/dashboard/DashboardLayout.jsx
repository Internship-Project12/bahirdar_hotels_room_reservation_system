import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function DashboardLayout() {
  return (
    <div className="mx-auto flex max-w-[1400px]">
      <SideBar />
      <div className="flex flex-1 flex-col bg-slate-100">
        <Header />
        <main className="flex flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
