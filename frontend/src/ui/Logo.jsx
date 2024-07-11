import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center text-2xl gap-2 font-extrabold tracking-tighter text-gray-200"
    >
      <img src="/favicon.ico" width="50px" />
      BDHotels.com
    </Link>
  );
}

export default Logo;
