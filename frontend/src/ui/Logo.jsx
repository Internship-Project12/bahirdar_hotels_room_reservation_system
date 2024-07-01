import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-3xl font-extrabold tracking-tighter text-gray-100"
    >
      BDHotels.com
    </Link>
  );
}

export default Logo;
