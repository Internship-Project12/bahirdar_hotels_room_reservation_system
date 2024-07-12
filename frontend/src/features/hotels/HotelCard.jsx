/* eslint-disable react/prop-types */
function HotelCard({ hotelPhoto, hotelName, availableRooms, pricePerDay }) {
  return (
    <div className="m-4 flex flex-col justify-between rounded-lg bg-white shadow-xl">
      <div className="overflow-hidden rounded-lg">
        <img
          src={hotelPhoto}
          alt={hotelName}
          className="mb-2 h-40 w-full object-cover object-center"
        />
        <h2 className="px-2 font-semibold">{hotelName}</h2>
      </div>
      <div className="flex justify-between p-2">
        <p className="flex flex-col items-center">
          <span className="rounded bg-blue-500 p-2 text-white">
            {availableRooms} Rooms
          </span>
        </p>
        <p className="rounded bg-[#E0A75E] p-2 text-white">
          ${pricePerDay}/Night
        </p>
      </div>
    </div>
  );
}

export default HotelCard;
