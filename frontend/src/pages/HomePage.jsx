import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="mb-2 flex min-h-full flex-col gap-4 bg-slate-200">
      <nav className="flex justify-between gap-10 bg-blue-800 px-10 py-6">
        <span className="text-3xl font-extrabold tracking-tighter text-gray-100">
          BDHotels.com
        </span>
        <ul className="flex justify-between gap-4">
          <li>
            <Link
              to="/sign-in"
              className="flex items-center rounded bg-slate-200 px-3 py-2 font-bold text-blue-800 transition duration-300"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
      <section className="flex flex-col items-center gap-4 px-8 md:flex-row">
        <div className="flex-1 p-4 text-2xl font-light tracking-wider">
          <p className="">
            <span className="">
              Welcome to{" "}
              <span className="text-3xl font-extrabold tracking-tighter text-blue-800">
                BDHotels.com
              </span>
            </span>{" "}
            where every stay is a memorable experience. Escape to luxury and
            convenience - book your dream hotel stay effortlessly.
          </p>
          <p className="">
            Plan your next adventure with ease - find and book hotels worldwide
            in just a few clicks. Unlock the world of hospitality with our
            intuitive hotel booking platform .
          </p>
        </div>
        <div className="flex-1 overflow-hidden rounded-lg p-4 md:max-h-[95%]">
          <img
            src="./hotel-images/img-1-hero.jpg"
            alt="Hero Image"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      <div className="flex justify-center">
        <button className="rounded bg-blue-800 px-6 py-4 font-bold uppercase text-slate-200 shadow-xl">
          Explore all the Hotels in the the town
        </button>
      </div>
    </main>
  );
}

export default HomePage;
