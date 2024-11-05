import useLogout from "../features/auth/useLogout";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const links = [
  {
    title: "Profile",
    icon: <VscAccount size={"25px"} />,
    to: "/account/profile",
  },
  {
    title: "Settings",
    icon: <FiSettings size="25px" />,
    to: "/account/settings",
  },
  {
    title: "My Bookings",
    icon: <MdOutlineBookmarkAdded size="25px" />,
    to: "/account/bookings",
  },
  {
    title: "Dashboard",
    icon: <LuLayoutDashboard size="25px" />,
    to: "/dashboard",
  },
  {
    title: "Sign Out",
    icon: <IoIosLogOut size="25px" />,
    to: "/",
  },
];

function HeaderAccountMenu() {
  const { logout, isPending } = useLogout();
  const { role, handleOpenModal } = useAuthContext();
  // console.log(role);

  return (
    <ul className="flex flex-col">
      {links.map((link) => {
        if (link.title === "Sign Out") {
          return (
            <li key={link.title}>
              <button
                disabled={isPending}
                onClick={() => {
                  logout();
                }}
                className="mt-2 flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 font-bold transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {link.icon}
                {link.title}
              </button>
            </li>
          );
        }

        if (link.title === "Dashboard") {
          if (role !== "admin" && role !== "manager") {
            return null;
          }
        }

        return (
          <li
            key={link.title}
            className="rounded-md transition duration-300 hover:cursor-pointer hover:bg-slate-200"
          >
            {
              <Link
                to={link.to}
                onClick={() => handleOpenModal()}
                className="flex items-center justify-start gap-2 p-3 py-2"
              >
                {link.icon}
                <p>{link.title}</p>
              </Link>
            }
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderAccountMenu;
