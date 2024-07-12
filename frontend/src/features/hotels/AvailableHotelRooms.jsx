/* eslint-disable react/prop-types */
function AvailableHotelRooms({
  hotelPhoto,
  hotelName,
  availableRooms,
  pricePerDay,
}) {
  return (
    <div className="m-4 flex flex-col items-center justify-between rounded-lg bg-white shadow-xl">
      <div className="overflow-hidden rounded-lg">
        <img
          src={hotelPhoto}
          alt={hotelName}
          className="mb-2 h-40 w-full object-cover object-center"
        />
        <h2 className="px-2 font-semibold">{hotelName}</h2>
      </div>
      {/* <div className="flex flex-col gap-2 p-2"> */}
      <div className="flex items-center justify-between gap-0 p-2">
        <span className="flex w-[50%] items-center gap-2">
          <span className="rounded bg-blue-500 p-2 text-white">
            {availableRooms}
          </span>
          Rooms available
        </span>
        <span className="rounded bg-[#E0A75E] p-2 text-white">
          ${pricePerDay}/Day
        </span>
      </div>
      {/* </div> */}
    </div>
  );
}

export default AvailableHotelRooms;
