import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { MdBedroomChild } from "react-icons/md";

/* eslint-disable react/prop-types */
function HotelDetailHero({ hotel }) {
  return (
    <MaxWidthWrapper>
      <div
        className="relative flex min-h-[85vh] flex-col items-center justify-center"
        style={{
          "clip-path": "polygon(0 0, 100vw 0%, 100vw 65vh, 0 85vh)",
        }}
      >
        <div className="absolute -z-[-9] h-full w-full bg-blue-600 opacity-50"></div>
        <img
          src={hotel.imageCover}
          alt=""
          className="absolute -z-10 h-full w-full object-cover object-center"
        />

        <div className="z-10 flex flex-col items-center justify-center gap-y-5">
          <div className="w-[55rem] p-4 text-center">
            <span className="bg-blue-600 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              {hotel.name}
            </span>
          </div>

          <div className="w-1/3 text-center md:w-[35rem]">
            <span className="bg-blue-600 px-4 py-2 text-white md:text-xl md:font-bold lg:text-2xl">
              A {hotel.hotelStar} star Hotel. Located In {hotel.address}
            </span>
          </div>

          {hotel.numOfRooms > 0 ? (
            <div className="flex items-center text-sm text-white md:gap-4 md:font-semibold lg:gap-5">
              <MdBedroomChild className="size-6" />
              <span>Have A Total of {hotel.numOfRooms} Rooms</span>
            </div>
          ) : (
            <p>There are no Rooms Found In This Hotel</p>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default HotelDetailHero;
