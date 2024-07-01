import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import HeaderAccountMenu from "./HeaderAccountMenu";
import HeaderAccount from "./HeaderAccount";

function HeaderMenu() {
  const { isLoggedIn, user } = useAuthContext();

  return (
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
              <HeaderAccount user={user}>
                <HeaderAccountMenu />
              </HeaderAccount>
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
  );
}

export default HeaderMenu;
