/* eslint-disable react/prop-types */
function BookingCard({ type, photo, roomNumber, pricePerNight }) {
  return (
    <div className="m-4 flex flex-col justify-between rounded-lg bg-white shadow-xl">
      <img
        src={photo}
        alt={roomNumber}
        className="mb-2 w-full object-cover object-center"
      />
      <div className="relative flex justify-between items-center">
        <div className="m-1 flex flex-col">
          <h2 className="text-2xl font-semibold"># No. {roomNumber}</h2>
          <p className="-mt-2 text-sm tracking-tighter">{type}</p>
        </div>

        <p className="flex items-center rounded bg-[#E0A75E] p-1 m-1 text-white">
          ${pricePerNight}/Night
        </p>
      </div>
    </div>
  );
}

export default BookingCard;
