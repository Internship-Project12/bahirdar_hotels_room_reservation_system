import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-3xl flex items-center gap-2 font-extrabold tracking-tighter text-gray-100"
    >
      <img src="/favicon.ico" width="50px" />
      BDHotels.com
    </Link>
  );
}

export default Logo;
