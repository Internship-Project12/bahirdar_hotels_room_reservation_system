/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";

function SideBar({ menus }) {
  return (
    <div className="flex min-h-screen w-[260px] flex-col gap-2 bg-gray-800 py-4 text-white">
      <Logo className="text-white" />

      <hr className="border-b-2 border-gray-700" />

      <nav className="mt-4 uppercase transition">
        <ul>
          {menus.map((menu, i) => (
            <li key={i}>
              <Link
                key={menu.title}
                className="flex items-center gap-3 rounded-lg px-5 py-3 hover:bg-gray-900"
                to={menu.url}
              >
                {menu.Icon}
                <span>{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
