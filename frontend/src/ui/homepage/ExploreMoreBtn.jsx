import { Link } from "react-router-dom";

function ExploreMoreBtn() {
  return (
    <div className="flex min-w-[50vh] justify-center">
      <Link
        to="/hotels"
        className="rounded bg-blue-800 px-6 py-4 text-sm font-bold uppercase text-slate-200 shadow-2xl"
      >
        Explore all the Hotels in the the town
      </Link>
    </div>
  );
}

export default ExploreMoreBtn;
