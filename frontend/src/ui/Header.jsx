import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <header className="top-0 flex min-w-full h-24 justify-between bg-blue-800 px-24 py-6 opacity-85">
      <Logo />
      <HeaderMenu />
    </header>
  );
}

export default Header;
