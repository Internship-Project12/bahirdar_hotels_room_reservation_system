import { Link, useLocation } from "react-router-dom";
import HeaderAccount from "./HeaderAccount";
import { useAuthContext } from "../context/AuthContext";
import { FaArrowRight } from "react-icons/fa6";
import Logo from "./Logo";
import { cn } from "../utils/cn";

function Header() {
  const { isLoggedIn } = useAuthContext();
  const { pathname } = useLocation();
  console.log(location);

  return (
    <section className="z-50 mx-auto h-full w-full max-w-screen-xl border-b bg-slate-100 px-3 py-2 md:px-20">
      <header className="mx-auto flex h-[10vh] items-center justify-between px-6 py-1 opacity-85">
        <Logo />
        <nav>
          <ul className="flex items-center justify-between md:gap-4 lg:gap-6">
            <li>
              <Link
                to="/hotels"
                className={cn(
                  "rounded px-3 py-2",
                  pathname === "/hotels" && "text-blue-700",
                )}
              >
                Hotels
              </Link>
              {pathname === "/hotels" && (
                <div className="mx-auto h-1 w-1/2 bg-blue-600"></div>
              )}
            </li>
            <li>
              <Link
                to="/about"
                className={cn(
                  "rounded px-3 py-2",
                  pathname === "/about" && "text-blue-700",
                )}
              >
                About
              </Link>
              {pathname === "/about" && (
                <div className="mx-auto h-1 w-1/2 bg-blue-600"></div>
              )}
            </li>
            {isLoggedIn ? (
              <li>
                <HeaderAccount />
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white"
                >
                  Sign In
                  <FaArrowRight />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default Header;
