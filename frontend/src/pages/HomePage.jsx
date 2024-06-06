import Hero from "../components/homepage/Hero";
import ExploreMoreBtn from "../components/homepage/ExploreMoreBtn";

function HomePage() {
  return (
    <>
      <section className="bg-blue-300 px-10">
        <div className="min-h-[calc(100vh-2*24px-50px)] flex flex-1 flex-col items-center justify-center gap-6 bg-red-500 py-6 md:p-3">
          <Hero />
          <ExploreMoreBtn />
        </div>
      </section>
      <section className="bg-blue-800 px-10">
        <div className="flex min-h-screen flex-col items-center gap-6 border-t-4 bg-slate-100 shadow-xl md:flex-row md:p-3">
          <p className="flex flex-1 flex-col gap-8 text-xl font-thin leading-7 tracking-wide md:order-1">
            <span className="">
              At{" "}
              <span className="text-xl font-extrabold tracking-tighter text-blue-800">
                Bahir Dar Hotel Booking Website
              </span>
              , we&rsquo;re committed to providing you with the best possible
              experience for planning and booking your dream getaway.
            </span>
            <span>
              Whether you&rsquo;re seeking a luxurious retreat, a
              budget-friendly stay, or an adventure-filled escape, our
              comprehensive platform offers a wide range of accommodations to
              suit every one&rsquo;s needs.
            </span>
          </p>
          <div className="flex-1 overflow-hidden rounded-xl md:max-h-[95%]">
            <img
              src="/hotel-images/img-2.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex min-h-screen flex-col items-center gap-6 border-t-4 bg-slate-100 shadow-xl md:flex-row md:p-3">
          <p className="flex flex-1 flex-col gap-8 text-xl font-thin leading-7 tracking-wide">
            <span className="">
              With easy navigation, secure payment options, and dedicated
              customer support, we strive to make your journey seamless and
              memorable. Your next unforgettable adventure awaits with{" "}
              <span className="text-lg font-normal tracking-tighter text-blue-800">
                BahirDar Hotel Booking Website
              </span>
              .
            </span>
          </p>
          <div className="flex-1 overflow-hidden rounded-xl bg-slate-800 md:max-h-[95%]">
            <img
              src="/hotel-images/img-3.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
