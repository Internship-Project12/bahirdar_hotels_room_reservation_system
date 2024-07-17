/* eslint-disable react/prop-types */
function HotelDetailDescription({hotel}) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="border-b text-sm text-slate-400 shadow">
        Hotel Description
      </h2>
      <div className="m-4 flex items-center justify-center p-3 leading-10 tracking-wide">
        <span className="w-[35rem]">{hotel.description}</span>
      </div>
    </div>
  );
}

export default HotelDetailDescription
