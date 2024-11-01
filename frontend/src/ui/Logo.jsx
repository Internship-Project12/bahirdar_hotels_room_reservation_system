import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-mono text-2xl font-extrabold tracking-tighter text-blue-600"
    >
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <img
          src="/logo-main.jpg"
          className="h-full w-full bg-cover bg-center"
        />
      </div>
      {/* BDHotels.com */}
      HotelVerse
    </Link>
  );
}

export default Logo;
// "HotelVerse" combines “hotel” with “verse” (a shorthand for “universe”). It implies a comprehensive, all-encompassing platform or ecosystem for
// hotel management and booking. In essence, HotelVerse suggests a centralized "universe" or hub for everything related to hotels, from booking to
// room and payment management, aligning well with the features of your app.
