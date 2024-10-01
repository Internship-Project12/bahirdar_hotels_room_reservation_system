import { Link, Outlet, useLocation } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const Account = () => {
  const { pathname } = useLocation();

  return (
    <div className="m-4 mx-auto flex max-h-[90rem] min-h-screen w-[80vw] max-w-[80rem] gap-2 rounded-xl border-2 bg-gray-100 shadow-2xl">
      {/* SIDE BAR */}
      <ul className="w-[30%] space-y-5 rounded-2xl border-r-2 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 p-4 text-slate-100 opacity-80 shadow-xl">
        <li>
          <Link
            to="profile"
            className={`flex w-full items-center gap-4 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-4 py-2 text-xl shadow-lg transition-all duration-200 ${pathname === "/account/profile" ? "translate-x-4" : "hover:translate-x-4"}`}
          >
            <VscAccount size={"35px"} />
            My Profile
          </Link>
        </li>
        <li>
          <Link
            to="settings"
            className={`flex w-full items-center gap-4 rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-4 py-2 text-xl shadow-lg transition-all duration-200 ${pathname === "/account/settings" ? "translate-x-4" : "hover:translate-x-4"}`}
          >
            <FiSettings size="35px" />
            Settings
          </Link>
        </li>
        <li>
          <Link
            to="bookings"
            className={`mb-5 flex w-full items-center gap-4 rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-4 py-2 text-xl shadow-lg transition-all duration-200 ${pathname === "/account/bookings" ? "translate-x-4" : "hover:translate-x-4"}`}
          >
            <MdOutlineBookmarkAdded size="35px" />
            My Bookings
          </Link>
        </li>
      </ul>

      {/* BODY | OUTLET */}
      <div className="flex-1 rounded-lg bg-slate-200 p-2 shadow-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
