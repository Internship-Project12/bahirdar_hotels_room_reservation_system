import { Link } from "react-router-dom";
import RoomsTableHeading from "./RoomsTableHeading";
import { useRooms } from "./useRooms";
import Spinner from "../../ui/Spinner";
import RoomsTableBody from "./RoomsTableBody";

/*
{
    status: 'success',
    message: 'get all routes',
    numOfRooms: 6,
    data: {
      rooms: Array(6) [
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

function HotelRoomsTable() {
  const { data: { data: { rooms } = {} } = {}, isLoading } = useRooms();

  return (
    <div className="grid w-full grid-cols-1 bg-white">
      <div className="flex items-center justify-between p-6">
        <h1 className="p-4 uppercase">
          <Link to="/dashboard/bookings">All Rooms</Link>
        </h1>
        <div></div>
        <div></div>
        <div></div>
         <Link
          to={"/dashboard/add-room"}
          className="mr-2 cursor-pointer rounded-full bg-blue-700 px-4 py-[6px] text-lg text-white transition-all duration-200 hover:scale-105"
        >
          Add Room
        </Link>
      </div>
      <RoomsTableHeading />
      {isLoading ? (
        <Spinner />
      ) : rooms.length > 0 ? (
        rooms.map((room, i) => <RoomsTableBody room={room} key={i} />)
      ) : (
        <div>There are not rooms found in this hotel</div>
      )}
    </div>
  );
}

export default HotelRoomsTable;
