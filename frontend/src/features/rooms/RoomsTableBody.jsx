/* eslint-disable react/prop-types */
/*
 {
          _id: '6693cdbc295dc5119b718701',
          roomNumber: '101',
          roomType: 'double',
          pricePerNight: 200,
          isAvailable: true,
          amenities: [ 'TV', 'AC' ],
          capacity: 1,
          description: 'This is a single room',
          images: [
            
              'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767826/dpdcizouxqvmwiubmhel.jpg', 
              'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767828/jccr0lowxldhrotudni2.jpg'
          ],
          hotel: '668ced40c8a56b00ec4b58da',
          createdAt: '2024-07-14T13:08:12.692Z',
          updatedAt: '2024-07-14T13:08:12.692Z',
          id: '6693cdbc295dc5119b718701'
        },
*/

import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function RoomsTableBody({ room }) {
  return (
    <div className="mb-1 grid grid-cols-9 items-center gap-3 border-b border-slate-200 p-3 text-sm shadow">
      {/* HOTEL NAME */}
      <div className="col-span-2 col-start-1 flex items-center gap-2">
        <img
          className="h-16 object-cover"
          src={room.images[0]}
          alt="room image"
        />
      </div>
      <div className="col-span-1 col-start-3">{`# ${room.roomNumber}`}</div>
      <div className="col-span-1 col-start-4">{`${room.roomType}`}</div>
      {/* PRICE PER NIGHT */}
      <div className="col-span-1 col-start-5 flex flex-col">
        <p className="">{`${room.pricePerNight}`}</p>
        <span className="">ETB / Night</span>
      </div>
      {/* CAPACITY */}
      <div className="col-span-1 col-start-6">{`${room.capacity} person`}</div>
      {/* DESCRIPTION */}
      {/* <div className="col-span-1 col-start-7">{`${room.description} person`}</div> */}
      {/* AMENITIES */}
      <div className="col-span-1 col-start-7 flex">
        {room.amenities && room.amenities.slice(0, 3).join(", ")}
      </div>
      <div className="col-span-1 col-start-8">{`${room.isAvailable}`}</div>
      <div className="col-span-1 col-start-9 flex flex-col items-center gap-1">
        <div className="flex gap-2">
          <Link to={`/dashboard/update-room/${room._id}`}>
            <MdEdit size={24} className="fill-blue-700" />
          </Link>
          <Link>
            <MdDeleteOutline size={24} color="red" />
          </Link>
        </div>
        <Link
         
          className="rounded bg-blue-700 p-2 font-semibold text-white"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default RoomsTableBody;
