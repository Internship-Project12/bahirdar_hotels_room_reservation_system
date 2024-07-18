/* eslint-disable react/prop-types */
function HotelDetailHero({ hotel }) {
  return (
    <div
      className="relative flex h-[95vh] flex-col items-center justify-center"
      style={{
        "clip-path": "polygon(0 0, 100vw 0%, 100vw 70vh, 0 90vh)",
      }}
    >
      <div className="absolute -z-[-9] h-full w-full bg-blue-600 opacity-50"></div>
      <img
        src={hotel.imageCover}
        alt=""
        className="absolute -z-10 h-full w-full object-cover object-center"
      />
      <h1
        style={{ "backface-visibility": "hidden" }}
        className="z-10 w-[55rem] bg-blue-600 p-4 text-center text-7xl font-bold text-slate-300 shadow-lg"
      >
        {hotel.name}
      </h1>
      <h2
        style={{ "backface-visibility": "hidden" }}
        className="z-10 justify-center flex w-[35rem] items-center whitespace-pre-line bg-blue-600 p-4 text-center text-xl font-bold text-slate-300 opacity-85 shadow-lg"
      >
        A {hotel.hotelStar} star Hotel. Located In {hotel.address}
      </h2>
      <p
        style={{ "backface-visibility": "hidden" }}
        className="z-10 mt-2 flex w-[25rem] items-center justify-center whitespace-pre-line p-2 text-slate-100 opacity-85 shadow-lg"
      >
        Have A Total of {hotel.numOfRooms} Rooms
      </p>
    </div>
  );
}

export default HotelDetailHero;
