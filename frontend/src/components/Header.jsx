import { Link } from "react-router-dom";

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
        <ul className="flex justify-between gap-4">
          <li>
            <Link
              to="/hotels"
              className="flex items-center rounded px-3 py-2 font-bold text-blue-100 underline transition duration-300"
            >
              hotels
            </Link>
          </li>
          {/* <li>
            <a
              href="#services-section"
              className="flex items-center rounded px-3 py-2 font-bold text-blue-100 underline transition duration-300"
            >
              services
            </a>
          </li>{" "} */}
          <li>
            <Link
              to="/sign-in"
              className="flex items-center rounded bg-slate-200 px-3 py-2 font-bold text-blue-800 transition duration-300"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
