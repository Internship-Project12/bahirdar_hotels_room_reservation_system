/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function SideBar({ menus }) {
  return (
    <div className="flex min-h-screen w-[260px] flex-col gap-2 bg-gray-800 p-5 uppercase text-white">
      <div className="flex items-center gap-4 p-[3px]">
        <img
          className="h-16 w-16 rounded-full"
          src="/hotel-images/img-2.jpg"
          alt="Logo"
        />
        <span className="text-2xl font-bold">BDUHotels</span>
      </div>
      <hr className="border-b-2 border-gray-700" />

      <nav className="mt-4 flex flex-col gap-3 p-4 text-lg transition">
        {menus.map((menu) => (
          <Link
            key={menu.title}
            className="flex items-center gap-3 rounded p-3 hover:bg-slate-700"
            to={menu.url}
          >
            {menu.Icon}
            <span>{menu.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default SideBar;
