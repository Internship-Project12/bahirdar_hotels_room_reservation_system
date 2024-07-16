import { Link, useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import BookingTableBody from "./BookingTableBody";
import BookingTableHeading from "./BookingTableHeading";
import { useBookings } from "./useBookings";
import { useState } from "react";

function AllBookings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState("");

  const { data: { data: { bookings } = {} } = {}, isLoading } = useBookings();

  const handleClickStatus = (status) => {
    searchParams.set("status", status);
    setSearchParams(searchParams);
    setActive(status);
  };

  return (
    <div className="grid w-full grid-cols-1 bg-white">
      <div className="flex items-center justify-between p-6">
        <h1 className="p-4 uppercase">
          <Link to="/dashboard/bookings">All Bookings</Link>
        </h1>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="flex items-center justify-between gap-2">
          <Link
            onClick={() => setActive("all")}
            to="/dashboard/bookings"
            className="rounded bg-blue-600 px-3 text-sm text-white"
          >
            all
          </Link>
          <button
            onClick={() => handleClickStatus("confirmed")}
            disabled={active === "confirmed"}
            className={`rounded border px-3 text-sm transition-all duration-300 hover:bg-green-700 hover:text-white disabled:cursor-not-allowed disabled:bg-green-700 disabled:text-white`}
          >
            confirmed
          </button>
          <button
            onClick={() => handleClickStatus("pending")}
            disabled={active === "pending"}
            className="rounded border px-3 text-sm transition-all duration-300 hover:bg-orange-400 hover:text-white disabled:cursor-not-allowed disabled:bg-orange-400 disabled:text-white"
          >
            pending
          </button>
          <button
            onClick={() => handleClickStatus("cancelled")}
            disabled={active === "cancelled"}
            className="rounded border px-3 text-sm transition-all duration-300 hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:bg-red-500 disabled:text-white"
          >
            cancelled
          </button>
        </div>
        <div></div>
      </div>

      <BookingTableHeading />
      {/* <Table headers={headers} data={bookings} /> */}

      {isLoading ? (
        <Spinner />
      ) : bookings.length > 0 ? (
        bookings.map((booking, i) => (
          <BookingTableBody booking={booking} key={i} />
        ))
      ) : (
        <div>There are not bookings found</div>
      )}
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
