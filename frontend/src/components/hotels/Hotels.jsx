import { hotels } from "../../../data/hotels";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

function Hotels() {
  return (
    <div className="p-3 text-gray-600 shadow-md">
      <div className="mb-2 grid grid-cols-10 items-start justify-items-start gap-3 border border-slate-200 p-3 font-semibold">
        <div className="col-span-1 col-start-1">Image</div>
        <div className="col-span-1 col-start-2">Name</div>
        <div className="col-span-1 col-start-3">Adress</div>
        <div className="col-span-1 col-start-4">Number of rooms</div>
        <div className="col-span-1 col-start-5">Number of ratings</div>
        <div className="col-span-1 col-start-6">Average ratings</div>
        <div className="col-span-1 col-start-7">Facilites</div>
      </div>

      {hotels.map((hotel) => (
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
          <div className="col-span-1 col-start-5">
            {hotel.numberOfRatings} ⭐
          </div>
          <div className="col-span-1 col-start-6">
            {hotel.averageRatings} ⭐
          </div>
          <div className="col-span-1 col-start-7 flex">
            {hotel.facilities.join(", ")}
          </div>
          <div className="col-span-1 col-start-8 flex gap-2">
            <MdEdit size={24} color="blue" />
            <MdDeleteOutline size={24} color="red" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hotels;
