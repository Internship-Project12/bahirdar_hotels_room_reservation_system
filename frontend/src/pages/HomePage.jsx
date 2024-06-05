import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="flex min-h-full flex-col bg-slate-200">
      <nav className="flex justify-between bg-blue-800 px-10 py-6">
        <span className="text-3xl font-bold tracking-tight text-gray-100">
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
          <li>
            <Link
              to="sign-up"
              className="flex items-center rounded bg-slate-200 px-3 py-2 font-bold text-blue-800 transition duration-300"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
      <section className="mt-24 flex justify-around gap-4 px-8">
        <div className="">
          <p className="">
            <h1 className="">
              Welcome to <span>BDHotels.com</span>
            </h1>
            where every stay is a memorable experience. Escape to luxury and
            convenience - book your dream hotel stay effortlessly.
          </p>
          <p className="">
            Plan your next adventure with ease - find and book hotels worldwide
            in just a few clicks. Unlock the world of hospitality with our
            intuitive hotel booking platform .
          </p>
        </div>
        <div className="">
          <img src="./hotel-images/img-1-hero.jpg" alt="hero image" />
        </div>
      </section>
      <div className="mt-8 flex justify-center">
        <button className="rounded bg-blue-800 px-6 py-4 font-bold uppercase text-slate-200 shadow-xl">
          Explore all the Hotels in the the town
        </button>
      </div>
    </main>
  );
}

export default HomePage;
