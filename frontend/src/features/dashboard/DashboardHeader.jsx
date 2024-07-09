import { HiOutlineSearch } from "react-icons/hi";
import { useAuthContext } from "../../context/AuthContext";

function DashboardHeader() {
  const { user } = useAuthContext();
  return (
    <div className="fixed left-[260px] right-0 top-0 z-10 flex h-24 flex-1 items-center justify-between border-b-2 bg-slate-200 p-4 shadow-md">
      <p className="text-2xl font-bold">Admin Dashboard</p>

      <div className="flex items-center rounded-full border border-gray-300 bg-gray-100 shadow-md">
        <HiOutlineSearch className="ml-4 h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent p-3 outline-none"
        />
        <button className="h-full scale-y-110 cursor-pointer rounded-r-full bg-slate-300 px-6 py-2 text-lg transition hover:bg-slate-200">
          Search
        </button>
      </div>

      <div className="flex items-center gap-2">
        <img className="h-16 w-16 rounded-full" src={user.photo} alt="user" />
        <span>{user.firstName}</span>
      </div>
    </div>
  );
}

export default DashboardHeader;
