/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

function HotelDetailImages({ hotel }) {
  return (
    <div>
      <div className="m-4 flex items-center justify-center p-4">
        <h2 className="border-b text-sm text-slate-400 shadow">Hotel Images</h2>
      </div>

      <div className="mb-5 px-8 py-6">
        {hotel.hotelImages.length > 3 ? (
          <div className="">
            <Swiper
              navigation
              slidesPerView={3}
              autoplay={{
                delay: 1000,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              spaceBetween={1}
              loop={true}
            >
              {hotel?.hotelImages?.map((image, i) => (
                <SwiperSlide key={image}>
                  <div className="flex justify-center">
                    <img
                      src={image}
                      alt={`hotel-image-[${i + 1}]`}
                      className="h-[300px] object-cover object-center"
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
                  className="h-[300px] object-cover object-center"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HotelDetailImages
