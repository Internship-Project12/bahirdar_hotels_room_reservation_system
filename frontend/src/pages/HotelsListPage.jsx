import { useQuery } from "@tanstack/react-query";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import apiHotels from "../services/apiHotels";

function HotelsListPage() {
  const navigate = useNavigate();

  const { data: res, isLoading } = useQuery({
    queryKey: ["hotels"],
    queryFn: apiHotels.getAllHotels,
  });

  if (isLoading) {
    return <div>Loading all hotels</div>;
  }

  if (!res?.data) {
    return (
      <div>
        <p>No hotels found</p>
        <button
          onClick={() => navigate("/")}
          className="rounded bg-blue-500 p-2 text-white"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const { data: hotels } = res.data;

  return (
    <div className="relative">
      <div className="sticky top-4 flex justify-center">
        {/* filter/sort */}
        <div className="h-[100vh] min-w-[300px] border-r-2 border-r-blue-300 bg-blue-100">
          filter/sort
        </div>
        {/* hotels list */}
        <section className="h-screen max-w-[1024px] flex-1 overflow-scroll bg-gray-200">
          {/* hotel cards */}
          {hotels.map((hotel) => (
            <div
              key={hotel._id}
              className="m-4 flex justify-between overflow-hidden rounded border-2 border-blue-300 p-3"
            >
              <div>
                <div className="flex gap-3">
                  <div className="h-[300px] w-[300px] overflow-hidden rounded shadow-xl">
                    <img
                      src={hotel.imageCover}
                      alt="hotel cover image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* hotel name */}
                  <div className="flex flex-col justify-around">
                    <div className="flex flex-col gap-2">
                      <Link
                        to={`/hotels/${hotel._id}`}
                        className="text-2xl font-bold text-blue-900 underline"
                      >
                        {hotel.name}
                      </Link>
                      {hotel.starRating && (
                        <span className="text-sm text-slate-500">
                          ({hotel.starRating} Star Hotel In Bahirdar)
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col justify-center gap-3">
                      <span>Standard Rooms</span>
                      <div className="">
                        <p>
                          <span>3</span> Double bed
                        </p>
                        <p>
                          <span>2</span> Single bed
                        </p>
                      </div>
                    </div>
                    <p>Free Cancelation && free Breakfast</p>
                  </div>
                </div>
              </div>

              {/* summary */}
              <div className="flex max-w-[200px] flex-col items-end justify-evenly">
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2">
                    <span className="flex gap-1">
                      <FaStar color="#fcc419" fill="#fcc419" size={"20px"} />
                      <FaStar color="#fcc419" fill="#fcc419" size={"20px"} />
                      <FaStar color="#fcc419" fill="#fcc419" size={"20px"} />
                      <FaStar color="#fcc419" fill="#fcc419" size={"20px"} />
                      <FaRegStar color="#fcc419" fill="#fcc419" size={"20px"} />
                    </span>
                    <span className="font-bold tracking-tighter text-yellow-400">
                      4.0
                    </span>
                  </div>
                  <h3 className="text-gray-5 border-b-2 border-blue-800 font-light tracking-tight">
                    <span className="font-bold text-blue-800">34</span> reviews
                  </h3>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-lg font-bold text-slate-600">3 Nights</p>
                  <p className="text-xs font-bold text-slate-600">
                    (2 Adults, 1 Children)
                  </p>
                  <p className="text-sm font-bold text-slate-600">
                    Price:{" "}
                    <span className="text-lg font-bold tracking-tighter text-blue-800">
                      {`255 ETB`}
                    </span>
                  </p>
                </div>
                <Link
                  to={`/hotels/${hotel._id}`}
                  className="rounded bg-blue-500 p-2 text-white"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default HotelsListPage;
