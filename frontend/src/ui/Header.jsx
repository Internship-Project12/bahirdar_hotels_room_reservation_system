import { Link } from "react-router-dom";
import HeaderAccount from "./HeaderAccount";
import { useAuthContext } from "../context/AuthContext";
import Logo from "./Logo";

function Header() {
  const { isLoggedIn } = useAuthContext();
  return (
    <header className="z-10 flex h-[15vh] min-w-full items-center justify-between bg-blue-900 px-24 py-6 opacity-85">
      <Logo />
      <nav>
        <ul className="flex items-center justify-between gap-4 text-lg">
          <li>
            <Link
              to="/hotels"
              className="rounded px-3 py-2 font-bold text-blue-100 hover:text-[#05bd05]"
            >
              Hotels
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-2 font-bold text-blue-100 hover:text-[#05bd05]"
            >
              About
            </Link>
          </li>

          {isLoggedIn ? (
            <li>
              <HeaderAccount />
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="rounded bg-slate-200 px-3 py-2 font-bold text-blue-800 hover:text-[#05bd05]"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
