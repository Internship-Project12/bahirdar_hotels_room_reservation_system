import { HiOutlineSearch } from "react-icons/hi";

function Header() {
  return (
    <div className="flex w-full items-center justify-between border-b-2 p-6 text-gray-600 shadow-md">
      <p className="text-2xl font-bold">Admin Dashboard</p>

      <div className="flex items-center rounded rounded-l-full border border-gray-300 bg-gray-100 shadow-md">
        <HiOutlineSearch className="ml-4 h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent p-3 outline-none"
        />
        <button className="h-full scale-y-110 cursor-pointer rounded bg-slate-300 px-6 py-2 text-lg transition hover:bg-slate-200">
          Search
        </button>
      </div>

      <div className="flex items-center gap-2">
        <img className="h-14 w-14" src="user.jpg" alt="user" />
        <span>Bob</span>
      </div>
    </div>
  );
}

export default Header;
