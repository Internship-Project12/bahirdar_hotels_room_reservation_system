import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "./useLogout";

function Header() {
  const { isLoggedIn } = useAuthContext();

  const { logout, isPending } = useLogout();

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
          {isLoggedIn ? (
            <>
              <li>
                <Link
                  to="/add-hotel"
                  className="px-3 py-2 font-bold text-blue-100 underline"
                >
                  Add Hotel
                </Link>
              </li>

              <li>
                <button
                  disabled={isPending}
                  onClick={() => logout()}
                  className="rounded bg-slate-200 px-3 py-2 font-bold text-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="rounded bg-slate-200 px-3 py-2 font-bold text-blue-800"
                >
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
