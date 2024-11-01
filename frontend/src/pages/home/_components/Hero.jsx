import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { FaArrowRightLong } from "react-icons/fa6";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";
import { Link } from "react-router-dom";

function Hero() {
  useEffect(() => {
    new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <section className="relative w-full">
      <MaxWidthWrapper className="my-12 space-y-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Experience Bahir Dar: Your Gateway to Lakeside Bliss
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48">
            Discover Bahir Dar’s charm—book your stay effortlessly and embrace
            Ethiopia’s stunning lakeside city. From Lake Tana views to cozy
            retreats, our platform connects you to the best accommodations,
            local culture, and unforgettable experiences. Start your journey
            here
          </p>
          <Link
            to="/hotels"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            Explore more hotels <FaArrowRightLong className="ml-2" />
          </Link>
        </div>

        <div className="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 md:h-[294px] md:max-w-[512px] dark:border-gray-800">
          <div className="h-[156px] overflow-hidden rounded-lg bg-white md:h-[278px] dark:bg-gray-800">
            {/* for light mode */}
            <img
              src="https://res.cloudinary.com/dvp1mjhd9/image/upload/v1730466364/n6lceqmm17vmw840kbb6.png"
              className="h-[156px] w-full rounded-lg md:h-[278px] dark:hidden"
              alt=""
            />
            {/* for dark mode */}
            <img
              src="https://res.cloudinary.com/dvp1mjhd9/image/upload/v1730466364/n6lceqmm17vmw840kbb6.png"
              className="hidden h-[156px] w-full rounded-lg md:h-[278px] dark:block"
              alt=""
            />
          </div>
        </div>
        <div className="relative mx-auto h-[17px] max-w-[351px] rounded-b-xl rounded-t-sm bg-gray-900 md:h-[21px] md:max-w-[597px] dark:bg-gray-700">
          <div className="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-[8px] md:w-[96px]"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Hero;
