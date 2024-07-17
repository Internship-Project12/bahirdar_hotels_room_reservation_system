/* eslint-disable react/prop-types */
function HotelDetailFacilities({ hotel }) {
  return (
    <div>
      <div className="m-4 flex items-center justify-center p-4">
        <h2 className="border-b text-sm text-slate-400 shadow">
          Hotel Facilities
        </h2>
      </div>

      <div className="mx-auto mb-4 flex w-[70vw] flex-wrap items-center justify-center gap-7">
        {hotel.facilities.map((facility) => (
          <span
            className="min-w-[10rem] rounded-full bg-blue-900 px-4 py-2 text-center text-white"
            key={facility}
          >
            {facility}
          </span>
        ))}
      </div>
    </div>
  );
}

export default HotelDetailFacilities;
