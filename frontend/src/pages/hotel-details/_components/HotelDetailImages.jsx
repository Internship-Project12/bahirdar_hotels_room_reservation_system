/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

function HotelDetailImages({ hotel }) {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="my-5 flex flex-col items-center justify-center space-y-10 p-4">
          <h2 className="border-b p-4 text-xl text-black/70 shadow md:text-2xl md:font-bold lg:text-4xl">
            Hotel Images
          </h2>
        </div>

        <div className="mb-5 px-8 py-6">
          {hotel.hotelImages.length > 3 ? (
            <div className="">
              <Swiper
                navigation
                autoplay={{
                  delay: 1000,
                  pauseOnMouseEnter: true,
                  waitForTransition: true,
                }}
                spaceBetween={1}
                loop={true}
                breakpoints={{
                  // Define breakpoints for responsive slidesPerView
                  640: {
                    slidesPerView: 1, // 1 slide on mobile devices
                  },
                  768: {
                    slidesPerView: 2, // 2 slides on tablets
                  },
                  1024: {
                    slidesPerView: 3, // 3 slides on larger screens
                  },
                }}
              >
                {hotel?.hotelImages?.map((image, i) => (
                  <SwiperSlide key={image}>
                    <div className="flex justify-center">
                      <img
                        src={image}
                        alt={`hotel-image-[${i + 1}]`}
                        className="h-[300px] w-full max-w-[452px] object-cover object-center" // Use w-full for mobile
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              {hotel?.hotelImages?.map((image, i) => (
                <div key={image} className="flex justify-center">
                  <img
                    src={image}
                    alt={`hotel-image-[${i + 1}]`}
                    className="h-[300px] w-[400px] object-cover object-center"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default HotelDetailImages;
