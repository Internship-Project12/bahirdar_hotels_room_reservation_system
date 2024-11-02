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
      Hotelify
    </Link>
  );
}

export default Logo;
// "Hotelify" is a coined name, combining "hotel" with the suffix "-ify," which is often used in tech and branding to suggest making something easier, accessible, or enhanced through a particular service or platform. In this case, "Hotelify" implies a platform that makes booking hotels simpler, more efficient, and user-friendly.
