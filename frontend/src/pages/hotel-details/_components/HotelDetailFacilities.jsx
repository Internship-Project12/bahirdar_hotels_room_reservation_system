import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

/* eslint-disable react/prop-types */
function HotelDetailFacilities({ hotel }) {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="my-5 flex flex-col items-center justify-center space-y-10 p-4">
          <h2 className="border-b p-4 text-xl text-black/70 shadow md:text-2xl md:font-bold lg:text-4xl">
            Hotel Facilities
          </h2>
        </div>

        <div className="mx-auto mb-4 grid w-[70vw] grid-cols-2 gap-7 md:flex md:flex-wrap md:items-center md:justify-center">
          {hotel.facilities.map((facility) => (
            <span
              className="min-w-[10rem] rounded-full bg-blue-900 px-2 py-1 text-center text-white md:px-4 md:py-2"
              key={facility}
            >
              {facility}
            </span>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default HotelDetailFacilities;
