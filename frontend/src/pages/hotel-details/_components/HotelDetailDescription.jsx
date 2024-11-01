import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

/* eslint-disable react/prop-types */
function HotelDetailDescription({ hotel }) {
  return (
    <MaxWidthWrapper>
      <div className="my-5 flex flex-col items-center justify-center space-y-5 p-4">
        <h2 className="border-b p-4 text-xl text-black/70 shadow md:text-2xl md:font-bold lg:text-4xl">
          Hotel Description
        </h2>
        <div className="m-4 flex items-center justify-center p-3 text-center leading-7 tracking-wide text-black/50 md:text-left">
          <span className="md:w-[35rem]">{hotel.description}</span>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default HotelDetailDescription;
