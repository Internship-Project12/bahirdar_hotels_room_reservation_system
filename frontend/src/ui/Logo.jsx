import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-2xl font-extrabold tracking-wider text-blue-900"
    >
      <img src="/favicon.ico" width="50px" />
      BDHotels.com
      {/* HotelVerse */}
    </Link>
  );
}

export default Logo;
// "HotelVerse" combines “hotel” with “verse” (a shorthand for “universe”). It implies a comprehensive, all-encompassing platform or ecosystem for
// hotel management and booking. In essence, HotelVerse suggests a centralized "universe" or hub for everything related to hotels, from booking to
// room and payment management, aligning well with the features of your app.
