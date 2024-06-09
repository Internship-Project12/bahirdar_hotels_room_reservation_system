import { FaStar, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HotelsPage() {
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
          {[1, 2, 3, 4, 5, 6].map((val) => (
            <div
              key={val}
              className="m-4 flex justify-between overflow-hidden rounded border-2 border-blue-300 p-3"
            >
              <div>
                <div className="flex gap-3">
                  <div className="h-[300px] min-w-[300px] flex-1 overflow-hidden rounded shadow-xl">
                    <img
                      src="/hotel-images/img-4.jpg"
                      alt=""
                      className="h-full max-w-[300px] object-cover"
                    />
                  </div>
                  {/* hotel name */}
                  <div className="flex flex-col justify-around">
                    <div className="flex flex-col gap-2">
                      <Link
                        to={`/hotels/${1}`}
                        className="text-2xl font-bold text-blue-900 underline"
                      >
                        Azwa International Hotel
                      </Link>
                      <span className="text-sm text-slate-500">
                        (7 Star Hotel In Bahirdar)
                      </span>
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
                <p className="mt-2 text-sm">
                  <span>Total of 5 floors(G + 5) </span>{" "}
                </p>
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
                      230ETB
                    </span>
                  </p>
                </div>
                <Link
                  to={`/booking/${1}`}
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

export default HotelsPage;
