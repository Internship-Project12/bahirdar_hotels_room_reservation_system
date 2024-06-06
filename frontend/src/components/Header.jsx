import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 flex min-w-full justify-between bg-blue-800 px-24 py-6 opacity-85">
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
