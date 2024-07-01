import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import HeaderAccount from "./HeaderAccount";

function HeaderMenu() {
  return (
    <>
      <HeaderMenuCenter />
      <HeaderMenuAuth />
    </>
  );
}


function HeaderMenuAuth() {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? (
    <li>
      <HeaderAccount/>
    </li>
  ) : (
    <ul className="flex items-center justify-between gap-4">
      <li>
        <Link
          to="/login"
          className="rounded px-3 py-2 font-bold uppercase text-white underline underline-offset-4"
        >
          Sign In
        </Link>
      </li>

      <li>
        <Link
          to="/signup"
          className="rounded bg-slate-50 px-3 py-2 font-bold uppercase text-blue-800"
        >
          Sign up
        </Link>
      </li>
    </ul>
  );
}

function HeaderMenuCenter() {
  const { isLoggedIn } = useAuthContext();

  return (
    <ul className="flex items-center justify-between gap-4">
      <li>
        <Link
          to="/hotels"
          className="rounded px-3 py-2 font-bold text-blue-100 underline underline-offset-4"
        >
          Hotels
        </Link>
      </li>
      {isLoggedIn ? (
        <>
          <li>
            <Link
              to="/add-hotel"
              className="px-3 py-2 font-bold text-blue-100 underline underline-offset-4"
            >
              Add Hotel
            </Link>
          </li>
        </>
      ) : null}
    </ul>
  );
}

export default HeaderMenu;
