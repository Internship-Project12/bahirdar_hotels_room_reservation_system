import useLogout from "../features/auth/useLogout";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { useAuthContext } from "../context/AuthContext";

function HeaderAccountMenu() {
  const { logout, isPending } = useLogout();
  const { role } = useAuthContext();

  return (
    <ul className="flex flex-col gap-2 p-2">
      <li className="transition duration-300 hover:cursor-pointer hover:bg-slate-700">
        <div className="flex items-center justify-start gap-2 p-3 py-2">
          <VscAccount size={"25px"} />
          <p>Profile</p>
        </div>
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
          <div className="flex items-center justify-start gap-2 p-3 py-2">
            <LuLayoutDashboard size="25px" />
            <p>Dashboard</p>
          </div>
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
