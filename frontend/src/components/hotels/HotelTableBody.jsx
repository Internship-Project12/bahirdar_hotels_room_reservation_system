/* eslint-disable react/prop-types */
import { MdDeleteOutline, MdEdit } from "react-icons/md";

function HotelTable({ hotel }) {
  return (
    <div
      key={hotel.id}
      className="mb-3 grid grid-cols-10 items-center gap-3 border-b border-l border-r border-slate-200 text-sm"
    >
      <div className="col-span-1 col-start-1 h-full w-full">
        <img
          className="aspect-[3/2] h-full w-full rounded object-cover"
          src={hotel.image}
          alt=""
        />
      </div>
      <div className="col-span-1 col-start-2">{hotel.name}</div>
      <div className="col-span-1 col-start-3">{hotel.address}</div>
      <div className="col-span-1 col-start-4">{hotel.numOfRooms} rooms</div>
      <div className="col-span-1 col-start-5">{hotel.numberOfRatings} ⭐</div>
      <div className="col-span-1 col-start-6">{hotel.averageRatings} ⭐</div>
      <div className="col-span-1 col-start-7 flex">
        {hotel.facilities.join(", ")}
      </div>
      <div className="col-span-1 col-start-8 flex gap-2">
        <MdEdit size={24} color="blue" />
        <MdDeleteOutline size={24} color="red" />
      </div>
    </div>
  );
}

export default HotelTable;
