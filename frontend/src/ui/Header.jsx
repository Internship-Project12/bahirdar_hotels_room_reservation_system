import { Link } from "react-router-dom";
import HeaderAccount from "./HeaderAccount";
import { useAuthContext } from "../context/AuthContext";
import Logo from "./Logo";

function Header() {
  const { isLoggedIn } = useAuthContext();
  return (
    <section className="z-50 mx-auto mb-3 h-full w-full max-w-screen-xl border-b bg-slate-100 px-2.5 md:px-20">
      <header className="mx-auto flex h-[10vh] items-center justify-between px-6 py-1 opacity-85">
        <Logo />
        <nav>
          <ul className="flex items-center justify-between gap-4 text-lg">
            <li>
              <Link to="/hotels" className="rounded px-3 py-2">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/about" className="px-3 py-2">
                About
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <HeaderAccount />
              </li>
            ) : (
              <li>
                <Link to="/login" className="rounded bg-slate-200 px-3 py-2">
                  Sign In
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
