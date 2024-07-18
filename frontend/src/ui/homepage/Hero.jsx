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
        delay: 5000,
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
            <div
              key={index}
              className="swiper-slide relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0"></div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-80 p-4 text-center text-white">
        <div className="rounded p-4 font-bold opacity-80">
          <h1 className="text-2xl tracking-wider">
            <span className="text-3xl font-extrabold tracking-tighter">
              Welcome to BDHotels.com <br />
            </span>
            Every stay is a memorable experience. Book your dream hotel and stay
            effortlessly.
          </h1>
          <h2 className="mt-4">
            Plan your next adventure with ease. Find and book hotels worldwide
            in just a few clicks.
          </h2>
        </div>
        <ExploreMoreBtn className="mt-4" />
      </div>
    </section>
  );
}

export default Hero;
