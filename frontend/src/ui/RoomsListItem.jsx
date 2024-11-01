import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function RoomsListItem({ room }) {
  return (
    <div className="">
      <div className="mx-auto mb-4 flex max-h-[300px] w-[90%] overflow-hidden rounded border p-3 shadow-xl transition-all duration-300 hover:translate-x-1 hover:scale-[1.02]">
        <div className="flex flex-1 flex-col gap-4 md:flex-row">
          {/* ROOM IMAGE */}
          <div className="h-[200px] w-[250px] overflow-hidden rounded shadow-xl">
            <img
              src={room.images[0]}
              alt="hotel cover image"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* <div> */}
          <div className="flex flex-1 flex-col justify-between gap-3">
            <p className="inline-block items-center justify-center text-sm text-slate-600">
              Room Type:{" "}
              <span className="text-sm font-bold text-slate-800">{`${room.roomType}`}</span>
            </p>

            <h2 className="inline-block items-center text-sm text-slate-600">
              <span className="text-xl font-bold text-slate-800">{`#${room.roomNumber}`}</span>
              :RoomNum
            </h2>

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
            {/* </div> */}
            <div className="flex w-full justify-between px-4">
              <button className="rounded bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 px-4 py-2 text-slate-200">
                Book Room Now
              </button>
              <Link
                to={`${room._id}`}
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 px-4 py-2 text-slate-800 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-blue-500 hover:text-slate-200"
              >
                &gt;&gt;
              </Link>
            </div>
          </div>
          {/* <div className="bg-black">hello</div> */}
        </div>
      </div>
    </div>
  );
}

export default RoomsListItem;
