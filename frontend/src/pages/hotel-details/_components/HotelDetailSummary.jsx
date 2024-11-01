import MaxWidthWrapper from "../../../ui/MaxWidthWrapper";

/* eslint-disable react/prop-types */
function HotelDetailSummary({ hotel }) {
  return (
    <MaxWidthWrapper>
      <div className="my-5 flex flex-col items-center justify-center space-y-10 p-4">
        <h2 className="border-b p-4 text-xl text-black/70 shadow md:text-2xl md:font-bold lg:text-4xl">
          Hotel Summary
        </h2>

        <div className="m-4 flex flex-col gap-y-4 p-3 lg:flex-row lg:items-center lg:justify-center">
          <p
            style={{ backfaceVisibility: "hidden" }}
            className="z-10 flex items-center whitespace-pre-line bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-4 text-center text-slate-300 shadow-lg sm:text-xl sm:font-bold md:text-3xl lg:-mr-[20rem] lg:w-[40rem]"
          >
            {hotel.summary}
          </p>
          <div className="mx-auto h-[20rem] md:w-[30rem]">
            <img
              src={hotel.hotelImages[1]}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default HotelDetailSummary;
