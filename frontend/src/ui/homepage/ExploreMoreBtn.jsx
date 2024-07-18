import { Link } from "react-router-dom";

function ExploreMoreBtn() {
  return (
    <div className="flex min-w-[50vh] justify-center">
      <Link
        to="/hotels"
        className="translate-y-1 rounded bg-blue-800 px-6 py-4 text-sm font-bold uppercase text-slate-200 shadow-2xl transition hover:scale-105 hover:bg-blue-600"
      >
        Explore all the Hotels in the the town
      </Link>
    </div>
  );
}

export default ExploreMoreBtn;
