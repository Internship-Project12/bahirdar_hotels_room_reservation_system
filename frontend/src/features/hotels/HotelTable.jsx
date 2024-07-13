/* eslint-disable react/prop-types */
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { Link } from "react-router-dom";

function HotelTable({ hotel }) {
  return (
    <div
      to={"/add-hotel"}
      className="mb-1 grid grid-cols-9 items-center gap-3 overflow-hidden border-b border-l border-r border-slate-200 text-sm"
    >
      <div className="col-span-1 col-start-1 h-full w-full">
        <img className="h-16 object-cover" src={hotel.imageCover} alt="" />
      </div>
      <div className="col-span-1 col-start-2">{hotel.name}</div>
      <div className="col-span-1 col-start-3">{`${hotel.starRating} ⭐ Hotel`}</div>
      <div className="col-span-1 col-start-4">{hotel.address}</div>
      <div className="col-span-1 col-start-5">
        {hotel.numOfRooms > 0 ? `${hotel.numOfRooms} Rooms` : <GoDash />}
      </div>
      <div className="col-span-1 col-start-6">{hotel.numOfRatings} ⭐</div>
      <div className="col-span-1 col-start-7">{hotel.avgRating} ⭐</div>
      <div className="col-span-1 col-start-8 flex">
        {hotel.facilities && hotel.facilities.slice(0, 3).join(", ")}
      </div>
      <div className="col-span-1 col-start-9 flex flex-col items-center gap-1">
        <div className="flex gap-2">
          <Link to={`/dashboard/update-hotel/${hotel._id}`}>
            <MdEdit size={24} className="fill-blue-700" />
          </Link>
          <Link>
            <MdDeleteOutline size={24} color="red" />
          </Link>
        </div>
        <Link
          to={`/hotels/${hotel._id}`}
          className="rounded bg-blue-700 p-2 font-semibold text-white"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default HotelTable;
