function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 md:flex-row">
      <div className="flex-1 p-4 text-2xl font-thin tracking-wider">
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
          Plan your next adventure with ease - find and book hotels worldwide in
          just a few clicks. Unlock the world of hospitality with our intuitive
          hotel booking platform .
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
  );
}

export default Hero;
