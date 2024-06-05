import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between gap-10 bg-blue-800 px-10 py-6">
      <span className="text-3xl font-extrabold tracking-tighter text-gray-100">
        BDHotels.com
      </span>
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
