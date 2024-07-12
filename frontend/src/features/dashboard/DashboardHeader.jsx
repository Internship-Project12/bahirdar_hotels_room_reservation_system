// import { HiOutlineSearch } from "react-icons/hi";
import HeaderAccount from "../../ui/HeaderAccount";

function DashboardHeader() {
  return (
    <div className="flex h-24 items-center justify-between bg-slate-300 -ml-4 px-8 py-4">
      <p className="text-2xl font-bold">Admin Dashboard</p>
      <HeaderAccount />
    </div>
  );
}

export default DashboardHeader;
