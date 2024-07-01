import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "../features/auth/useLogout";

function Header() {
  const { isLoggedIn, user } = useAuthContext();

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
                <div className="flex items-center justify-center">
                  <p className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-200 text-4xl font-bold text-blue-900 shadow-md transition duration-300 hover:cursor-pointer hover:bg-blue-100">
                    {user?.firstName[0]}
                  </p>
                  <p className="text-xl italic text-blue-200">
                    {" "}
                    {user?.firstName}
                  </p>
                </div>
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
