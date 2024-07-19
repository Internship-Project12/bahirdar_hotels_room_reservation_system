import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import ExploreMoreBtn from "./ExploreMoreBtn";

const images = [
  "/hotel-images/img-1-hero.jpg",
  "/hotel-images/img-2.jpg",
  "/hotel-images/img-3.jpg",
  "/hotel-images/img-4.jpg",
];
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
    <section className="relative h-[80vh] w-full">
      <div className="swiper absolute inset-0 z-0">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div key={index} className="swiper-slide">
              <img
                className="relative inset-0 h-full w-full bg-center object-cover"
                src={image}
                alt="slider image"
              />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        {/* <div className="swiper-button-prev h-8 w-8 text-white"></div>
        <div className="swiper-button-next h-8 w-8 text-white"></div> */}
      </div>

      <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center bg-black p-8 text-center text-white opacity-80">
        <div className="rounded p-4 opacity-80">
          <h1 className="text-2xl font-light tracking-wider">
            <span className="text-6xl font-extrabold tracking-tighter">
              Welcome to BDHotels.com <br />
            </span>
            Every stay is a memorable experience. Book your dream hotel and stay
            effortlessly.
            <span className="mt-4">
              Plan your next adventure with ease. Find and book hotels worldwide
              in just a few clicks.
            </span>
          </h1>
        </div>
        <ExploreMoreBtn className="mt-4" />
      </div>
    </section>
  );
}

export default Hero;
