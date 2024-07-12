// import { HiOutlineSearch } from "react-icons/hi";
import HeaderAccount from "../../ui/HeaderAccount";

function DashboardHeader() {
  return (
    <div className="flex h-24 items-center justify-between bg-slate-300 px-8 py-4">
      <p className="text-2xl font-bold">Admin Dashboard</p>

      {/* <div className="flex items-center rounded-full border border-gray-300 bg-gray-100 shadow-md">
        <HiOutlineSearch className="ml-4 h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent p-3 outline-none"
        />
        <button className="h-full scale-y-110 cursor-pointer rounded-r-full bg-slate-300 px-6 py-2 text-lg transition hover:bg-slate-200">
          Search
        </button>
      </div> */}

      <HeaderAccount />
    </div>
  );
}

export default DashboardHeader;
