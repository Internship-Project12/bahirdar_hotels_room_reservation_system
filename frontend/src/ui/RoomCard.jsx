/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div
      className="relative h-full w-full border p-3 shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-grab"
    >
      <div className="flex flex-col">
        <div className="h-[200px] overflow-hidden rounded">
          <img
            src={room.images[0]}
            alt=""
            className="h-full w-full bg-cover bg-center"
          />
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="">
            <h2 className="inline-block items-center text-sm text-slate-600">
              <span className="text-xl font-bold text-slate-800">{`#${room.roomNumber}`}</span>
              :RoomNum
            </h2>
            <p className="inline-block items-center justify-center text-sm text-slate-600">
              Room Type:{" "}
              <span className="text-sm font-bold text-slate-800">{`${room.roomType}`}</span>
            </p>
          </div>

          <div className="">
            <h2 className="inline-block items-center text-sm text-slate-600">
              <span className="text-xl font-bold text-slate-800">{`#${room.capacity}`}</span>
              :max Person
            </h2>
            <p className="inline-block items-center justify-center text-sm text-slate-600">
              Price/Night:{" "}
              <span className="text-sm font-bold text-slate-800">{`${room.pricePerNight}`}</span>
            </p>
          </div>
        </div>
        <button className="rounded bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 px-4 py-2 text-slate-200">
          Book Room Now
        </button>

        {/* EXPLORE MORE ABOUT ROOM */}
        <Link
          to={`rooms/${room._id}`}
          className="absolute right-4 top-4 flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400 px-4 py-2 text-slate-100 shadow-xl"
        >
          &gt;&gt;
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;
