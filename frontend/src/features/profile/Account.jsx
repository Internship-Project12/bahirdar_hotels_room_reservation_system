import { Link, Outlet, useLocation } from "react-router-dom";
// import { useAuthContext } from "../../context/AuthContext";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const user = {
  _id: "668ce22aa5b16ed846c21a18",
  firstName: "Edmealem",
  lastName: "Kassahun",
  email: "admin@test.com",
  role: "admin",
  phoneNumber: "0908005801",
  createdAt: "2024-07-09T07:09:30.494Z",
  updatedAt: "2024-07-13T11:38:46.251Z",
  __v: 0,
  photo:
    "https://res.cloudinary.com/dvp1mjhd9/image/upload/v1714759095/gsqg5uwxwtzc744wy6j5.png",
};

const Account = () => {
  const { pathname } = useLocation();
  // const { user, handleChange } = useAuthContext();

  // console.log(user);

  return (
    <div className="m-4 mx-auto flex w-[80vw] gap-2 rounded-xl border-2 bg-gray-100 shadow-2xl">
      {/* SIDE BAR */}
      <ul className="min-h-[70vh] w-[30%] space-y-5 rounded-2xl border-r-2 bg-blue-900 p-4 text-slate-100 opacity-80 shadow-xl">
        <li>
          <div className="h-[250px] overflow-hidden rounded-lg bg-black">
            <img
              src={user.photo}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </li>
        <li>
          <Link
            to="profile"
            className={`flex w-full items-center gap-4 rounded-full bg-blue-800 px-4 py-2 text-xl shadow-lg transition-all duration-200 ${pathname === "/account/profile" ? "translate-x-4" : "hover:translate-x-4"}`}
          >
            <VscAccount size={"35px"} />
            My Profile
          </Link>
        </li>
        <li>
          <Link
            to="settings"
            className={`flex w-full items-center gap-4 rounded-full bg-blue-800 px-4 py-2 text-xl shadow-lg transition-all duration-200 ${pathname === "/account/settings" ? "translate-x-4" : "hover:translate-x-4"}`}
          >
            <FiSettings size="35px" />
            Settings
          </Link>
        </li>
        <li>
          <Link
            to="bookings"
            className={`flex mb-5 w-full items-center gap-4 rounded-full bg-blue-800 px-4 py-2 text-xl shadow-lg transition-all duration-200 ${pathname === "/account/settings" ? "translate-x-4" : "hover:translate-x-4"}`}
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
