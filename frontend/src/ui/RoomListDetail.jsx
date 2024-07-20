import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QueryKey from "../constants/QueryKey";
import apiRooms from "../services/apiRooms";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function RoomListDetail() {
  const { isLoggedIn } = useAuthContext();
  const { roomId, hotelId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: { data: { room } = {} } = {}, isLoading } = useQuery({
    queryKey: [QueryKey.ROOM, roomId],
    queryFn: () => apiRooms.getRoomOnHotel({ roomId, hotelId }),
  });

  if (isLoading) {
    return (
      <div className="sticky top-3 flex h-[90vh] items-center justify-center bg-slate-300">
        <Spinner />
      </div>
    );
  }

  if (!room) {
    toast.error(
      "There is no room found with that id. :( Please try again later",
    );
    return navigate(`/hotels/${hotelId}/rooms`);
  }

  return (
    <div className="relative flex flex-col items-center justify-center p-3">
      {/* ROOM NUMBER HEADING */}
      <span
        style={{ "backface-visibility": "hidden" }}
        className="absolute top-2 -skew-y-6 bg-blue-600 px-5 py-3 text-3xl font-bold capitalize text-slate-100 shadow-lg"
      >{`# ${room.roomNumber} `}</span>

      {/* ROOM IMAGE */}
      <div className="mb-4 h-[200px] w-full overflow-hidden rounded-md shadow-lg">
        <img
          src={room.images[1]}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* HEADING */}
      <h2 className="mb-2 border-b text-sm text-slate-400 shadow">
        Room Type|Number|PricePerNight|Capacity
      </h2>

      {/* ROOM TYPE | NUMBER */}
      <div className="flex w-full items-center justify-between gap-2 p-3">
        <p className="inline-block items-center justify-center gap-1 text-sm text-slate-600">
          <span className="text-sm capitalize text-slate-500">{`${room.roomType} `}</span>
          :) Bed Room
        </p>

        <p className="inline-block items-center justify-center gap-1 text-sm text-slate-600">
          <span className="text-sm capitalize text-slate-500">
            {`# ${room.roomNumber} `}
          </span>
          :) Room Number
        </p>
      </div>

      {/* PRICE PER NIGHT */}
      <p className="flex items-center gap-2 self-start p-2 text-sm text-slate-600">
        <span className="text-sm capitalize tracking-tighter text-slate-500">{`${room.pricePerNight} ETB `}</span>
        ( Price / Night )
      </p>

      {/* ROOM CAPACITY */}
      <p className="mb-4 flex items-center gap-2 self-start p-2 text-sm text-slate-600">
        max of{" "}
        <span className="text-xl capitalize tracking-tighter text-slate-500">{` ${room.capacity} `}</span>
        persons
      </p>

      {/* ROOM DESCRIPTION */}
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="border-b text-sm text-slate-400 shadow">
          Room Description
        </h2>
        <div className="m-4 flex items-center justify-center p-3 leading-10 tracking-wide">
          <span className="w-[18rem]">{room.description}</span>
        </div>
      </div>

      {/* ROOM AMENITIES */}
      <div>
        <div className="m-2 flex items-center justify-center p-4">
          <h2 className="border-b-2 border-slate-400 p-1 text-xl font-bold text-slate-600 shadow-2xl">
            Room Amenities
          </h2>
        </div>

        <div className="mx-auto mb-4 flex flex-wrap items-center justify-center gap-2">
          {room.amenities.map((amenity) => (
            <span
              className="mb-1 min-w-[5rem] rounded-full bg-blue-500 px-3 py-[.3rem] text-center text-white"
              key={amenity}
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>

      {/* ROOM IMAGES */}
      <div className="grid grid-cols-2 gap-2">
        {room.images.map((image, i) => (
          <div className="h-[100px] overflow-hidden rounded" key={i}>
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* BOOK NOW */}
      <div className="flex w-full items-center justify-center p-4">
        {isLoggedIn ? (
          <button className="w-full rounded border-b-2 bg-blue-600 px-3 py-2 text-xl uppercase text-slate-100 shadow-lg">
            Book Now
          </button>
        ) : (
          <button
            className="w-full rounded border-b-2 bg-blue-600 px-3 py-2 text-xl uppercase text-slate-100 shadow-lg"
            onClick={() =>
              navigate("/login", { state: { from: location.pathname } })
            }
          >
            Login to Book
          </button>
        )}
      </div>
    </div>
  );
}

export default RoomListDetail;

/*
  
  {
    _id: '6696b7a3a5b4af65992602bc',
    roomNumber: '285',
    roomType: 'single',
    pricePerNight: 350,
    isAvailable: true,
    amenities: Array(8) [
      'Wi-Fi', 'Air Conditioning', 'Television', 'Coffee Maker', 'Room Service', 'Hair Dryer',
      'Iron and Ironing Board', 'Desk and Chair'
    ],
    capacity: 3,
    description: 
      'The room is cozy, with a comfortable bed and a view of the city skyline.',
    images: [
      
        'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1721153443/nqbndwsiqqcfjtsvqk5a.jpg', 
        'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1721153443/pv3qxsmtm6d8ehmzh6b0.jpg'
    ],
    hotel: '668ced40c8a56b00ec4b58da',
    createdAt: '2024-07-16T18:10:43.886Z',
    updatedAt: '2024-07-16T18:29:16.421Z',
    __v: 0,
    bookings: [],
    id: '6696b7a3a5b4af65992602bc'
  }
   */
