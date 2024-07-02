function AvailableHotelRooms({
  hotelPhoto,
  hotelName,
  availableRooms,
  pricePerDay,
}) {
  return (
    <div className="m-2 flex flex-col items-center rounded-lg bg-white p-4">
      <img
        src={hotelPhoto}
        alt={hotelName}
        className="mb-2 h-40 w-full rounded-lg object-cover"
      />
      <div className="flex flex-col gap-2">
        <h2 className="px-2 font-semibold">{hotelName}</h2>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="rounded bg-blue-500 p-2 text-white">
              {availableRooms}
            </span>
            Rooms available
          </span>
          <span className="rounded bg-[#E0A75E] p-2 font-medium text-white">
            ${pricePerDay}/Day
          </span>
        </div>
      </div>
    </div>
  );
}

export default AvailableHotelRooms;
