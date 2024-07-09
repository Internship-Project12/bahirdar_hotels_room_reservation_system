import { Link } from "react-router-dom";
import HeaderAccount from "./HeaderAccount";

function Header() {
  return (
    <header className="top-0 flex min-w-full justify-between bg-blue-800 px-24 py-6 opacity-85">
      <Link
        to="/"
        className="text-3xl font-extrabold tracking-tighter text-gray-100"
      >
        BDHotels.com
      </Link>
      <nav>
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link
              to="/hotels"
              className="rounded px-3 py-2 font-bold text-blue-100 underline"
            >
              Hotels
            </Link>
          </li>

          <li>
            <Link
              to="/add-hotel"
              className="px-3 py-2 font-bold text-blue-100 underline"
            >
              Add Hotel
            </Link>
          </li>

          <li>
            <Link
              to="/sign-in"
              className="rounded bg-slate-200 px-3 py-2 font-bold text-blue-800"
            >
              Sign In
            </Link>
          </li>
          <li>
            <HeaderAccount />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
