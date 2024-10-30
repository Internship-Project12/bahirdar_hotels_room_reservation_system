import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-2xl font-extrabold tracking-tighter"
    >
      <img src="/favicon.ico" width="50px" />
      BDHotels.com
    </Link>
  );
}

export default Logo;
