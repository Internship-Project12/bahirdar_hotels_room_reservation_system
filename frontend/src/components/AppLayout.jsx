import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="h-[100vh]">
      <Outlet />
    </div>
  );
}

export default AppLayout;
