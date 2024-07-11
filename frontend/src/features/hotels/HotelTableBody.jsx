/* eslint-disable react/prop-types */
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function HotelTable({ hotel }) {
  return (
    <div
      to={"/add-hotel"}
      className="mb-1 grid grid-cols-8 items-center gap-3 border-b border-l border-r border-slate-200 p-2 text-sm"
    >
      <div className="col-span-1 col-start-1 h-full w-full">
        <img
          className="aspect-[3/2] h-full w-full rounded object-cover"
          src={hotel.imageCover}
          alt=""
        />
      </div>
      <div className="col-span-1 col-start-2">{hotel.name}</div>
      <div className="col-span-1 col-start-3">{hotel.address}</div>
      <div className="col-span-1 col-start-4">{hotel.numOfRooms} rooms</div>
      <div className="col-span-1 col-start-5">{hotel.numberOfRatings} ⭐</div>
      <div className="col-span-1 col-start-6">{hotel.averageRatings} ⭐</div>
      <div className="col-span-1 col-start-7 flex">
        {hotel.facilities && hotel.facilities.join(", ")}
      </div>
      <div className="col-span-1 col-start-8 flex flex-col items-center gap-1">
        <div className="flex gap-2">
          <Link to="/dashboard/update-hotel/668ce2f3603914bd3b9e584e">
            <MdEdit size={24} className="fill-blue-700" />
          </Link>
          <Link>
            <MdDeleteOutline size={24} color="red" />
          </Link>
        </div>
        <Link
          to="/hotels/668ce2f3603914bd3b9e584e"
          className="rounded bg-blue-700 p-2 font-semibold text-white"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default HotelTable;
