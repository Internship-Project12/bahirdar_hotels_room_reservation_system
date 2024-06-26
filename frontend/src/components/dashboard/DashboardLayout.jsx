import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

// import Sidebar from "./SideBar";
// import Header from "./../Header";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex flex-1 flex-col">
//         <Header />
//         <main className="flex-grow p-4">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;
