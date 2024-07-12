// import { HiOutlineSearch } from "react-icons/hi";
import { useAuthContext } from "../../context/AuthContext";
import HeaderAccount from "../../ui/HeaderAccount";

function DashboardHeader() {
  const { role } = useAuthContext();
  return (
    <div className="-ml-4 flex h-24 items-center justify-between bg-slate-300 px-8 py-4">
      <p className="text-2xl font-bold">
        {role === "admin" ? "Admin Dashboard" : "ABC International Hotel"}
      </p>
      <HeaderAccount />
    </div>
  );
}

export default DashboardHeader;
