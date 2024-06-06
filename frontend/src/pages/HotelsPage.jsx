import { FaStar, FaRegStar } from "react-icons/fa6";

function HotelsPage() {
  return (
    <div className="relative">
      <div className="justify-cente sticky top-4 flex">
        {/* filter/sort */}
        <div className="h-[100vh] min-w-[300px] border-r-2 border-r-blue-300 bg-blue-100">
          filter/sort
        </div>
        {/* hotels list */}
        <section className="h-screen max-w-[1024px] flex-auto overflow-scroll bg-gray-200">
          {/* hotel cards */}
          <div className="m-4 flex justify-between overflow-hidden rounded">
            <div className="flex gap-3">
              <div className="flex-1 overflow-hidden rounded shadow-xl">
                <img
                  src="/hotel-images/img-4.jpg"
                  alt=""
                  className="h-full max-w-[300px] object-cover"
                />
              </div>
              {/* hotel name */}
              <div className="flex-1">
                <h2>Azwa International Hotel</h2>

                <span>5 Star</span>
              </div>
            </div>

            {/* summary */}
            <div className="flex min-w-[200px] flex-1 flex-col items-end bg-slate-400">
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
              <h3>34 reviews</h3>
            </div>
          </div>

          <div className="m-4 flex justify-between overflow-hidden rounded">
            <div className="flex gap-3">
              <div className="flex-1 overflow-hidden rounded shadow-xl">
                <img
                  src="/hotel-images/img-4.jpg"
                  alt=""
                  className="h-full max-w-[300px] object-cover"
                />
              </div>
              {/* hotel name */}
              <div className="flex-1">
                <h2>Azwa International Hotel</h2>

                <span>5 Star</span>
              </div>
            </div>

            {/* summary */}
            <div className="flex min-w-[200px] flex-1 flex-col items-end bg-slate-400">
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
              <h3>34 reviews</h3>
            </div>
          </div>
          <div className="m-4 flex justify-between overflow-hidden rounded">
            <div className="flex gap-3">
              <div className="flex-1 overflow-hidden rounded shadow-xl">
                <img
                  src="/hotel-images/img-4.jpg"
                  alt=""
                  className="h-full max-w-[300px] object-cover"
                />
              </div>
              {/* hotel name */}
              <div className="flex-1">
                <h2>Azwa International Hotel</h2>

                <span>5 Star</span>
              </div>
            </div>

            {/* summary */}
            <div className="flex min-w-[200px] flex-1 flex-col items-end bg-slate-400">
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
              <h3>34 reviews</h3>
            </div>
          </div>
          <div className="m-4 flex justify-between overflow-hidden rounded">
            <div className="flex gap-3">
              <div className="flex-1 overflow-hidden rounded shadow-xl">
                <img
                  src="/hotel-images/img-4.jpg"
                  alt=""
                  className="h-full max-w-[300px] object-cover"
                />
              </div>
              {/* hotel name */}
              <div className="flex-1">
                <h2>Azwa International Hotel</h2>

                <span>5 Star</span>
              </div>
            </div>

            {/* summary */}
            <div className="flex min-w-[200px] flex-1 flex-col items-end bg-slate-400">
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
              <h3>34 reviews</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HotelsPage;
