import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function DashboardLayout() {
  return (
    <div className="mx-auto flex max-w-[1400px]">
      <SideBar />
      <div className="flex flex-1 flex-col bg-white">
        <Header />
        <main className="flex-1s flex">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
