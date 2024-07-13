import Spinner from "../../ui/Spinner";
import BookingTableBody from "./BookingTableBody";
import BookingTableHeading from "./BookingTableHeading";
import { useBookings } from "./useBookings";

function AllBookings() {
  const { data, isLoading } = useBookings();

  if (isLoading)
    return (
      <div className="grid w-full grid-cols-1 bg-white">
        <div className="flex justify-between">
          <h1 className="p-4 uppercase">All Bookings</h1>
          <p>filter/sort</p>
        </div>

        <BookingTableHeading />
        {/* <Table headers={headers} data={bookings} /> */}

        <Spinner />
      </div>
    );

  const { bookings } = data.data;

  return (
    <div className="grid w-full grid-cols-1 bg-white">
      <div className="flex justify-between">
        <h1 className="p-4 uppercase">All Bookings</h1>
        <p>filter/sort</p>
      </div>

      <BookingTableHeading />
      {/* <Table headers={headers} data={bookings} /> */}

      {bookings.map((booking, i) => (
        <BookingTableBody booking={booking} key={i} />
      ))}
    </div>
  );
}

export default AllBookings;
/*
{
    status: 'success',
    message: 'get all bookings',
    numOfBookings: 1,
    data: {
      bookings: [
        {
          _id: '66921b10286016274ee101b0',
          user: {
            _id: '668ce28fa5b16ed846c21a22',
            firstName: 'test',
            lastName: 'TestF',
            email: 'test@test.com',
            role: 'user',
            phoneNumber: '0908005801'
          },
          room: {
            _id: '668ce6d9296708cdbae3865f',
            roomNumber: '100',
            roomType: 'single',
            pricePerNight: 140,
            id: '668ce6d9296708cdbae3865f'
          },
          checkInDate: '2024-07-10T08:58:40.000Z',
          checkOutDate: '2024-07-13T08:58:40.000Z',
          status: 'pending',
          createdAt: '2024-07-13T06:13:36.243Z',
          updatedAt: '2024-07-13T06:13:36.243Z',
          hotel: '668ce408603914bd3b9e585b',
          numOfNights: 3,
          pricePerNight: 140,
          totalPrice: 420,
          id: '66921b10286016274ee101b0'
        }
      ]
    }
  }
 */
