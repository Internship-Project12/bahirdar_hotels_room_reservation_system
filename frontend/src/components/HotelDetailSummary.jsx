/* eslint-disable react/prop-types */
function HotelDetailSummary({hotel}) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="m-4 border-b text-sm text-slate-400 shadow">
        Hotel Summary
      </h2>

      <div className="m-4 flex items-center justify-center p-3">
        <p
          style={{ "backface-visibility": "hidden" }}
          className="z-10 -mr-[20rem] flex w-[45rem] items-center whitespace-pre-line bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-4 text-center text-4xl font-bold text-slate-300 shadow-lg"
        >
          {hotel.summary}
        </p>
        <div className="">
          <img
            src={hotel.hotelImages[1]}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default HotelDetailSummary
