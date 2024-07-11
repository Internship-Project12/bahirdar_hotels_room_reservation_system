import useLogout from "../features/auth/useLogout";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function HeaderAccountMenu() {
  const { logout, isPending } = useLogout();
  const { role, handleOpenModal } = useAuthContext();

  console.log(role);

  return (
    <ul className="z-[1000] flex flex-col gap-2 p-2">
      <li className="transition duration-300 hover:cursor-pointer hover:bg-slate-700">
        <Link
          onClick={() => handleOpenModal()}
          to="/profile"
          className="flex items-center justify-start gap-2 p-3 py-2"
        >
          <VscAccount size={"25px"} />
          <p>Profile</p>
        </Link>
      </li>
      <li className="transition duration-300 hover:cursor-pointer hover:bg-slate-700">
        <div className="flex items-center justify-start gap-2 p-3 py-2">
          <VscAccount size="25px" />
          <p>My account</p>
        </div>
      </li>
      <hr />
      <li className="transition duration-300 hover:cursor-pointer hover:bg-slate-700">
        <div className="flex items-center justify-start gap-2 p-3 py-2">
          <FiSettings size="25px" />
          <p>Settings</p>
        </div>
      </li>
      {role === "admin" ? (
        <li className="transition duration-300 hover:cursor-pointer hover:bg-slate-700">
          <Link
            to="/admin"
            className="flex items-center justify-start gap-2 p-3 py-2"
          >
            <LuLayoutDashboard size="25px" />
            <p>Dashboard</p>
          </Link>
        </li>
      ) : null}
      <li>
        <hr />
        <button
          disabled={isPending}
          onClick={() => logout()}
          className="mt-2 flex w-full items-center justify-start gap-2 px-3 py-2 font-bold transition duration-300 hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-red-500"
        >
          <IoIosLogOut size="25px" />
          Sign Out
        </button>
      </li>
    </ul>
  );
}

export default HeaderAccountMenu;
