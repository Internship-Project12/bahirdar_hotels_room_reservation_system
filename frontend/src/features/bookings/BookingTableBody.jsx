/* eslint-disable react/prop-types */

import formatDate from "../../utils/formatDate";

/*
10:55:49.596	      
  {
    _id: '66921b10286016274ee101b0',
    user: {
      _id: '668ce28fa5b16ed846c21a22',
      firstName: 'test',
      lastName: 'TestF',
      email: 'test@test.com',
      role: 'user',
      phoneNumber: '0908005801',
      photo: 
        'https://res.cloudinary.com/dvp1mjhd9/image/upload/v1714759095/gsqg5uwxwtzc744wy6j5.png'
    },
    room: {
      _id: '668ce6d9296708cdbae3865f',
      roomNumber: '100',
      roomType: 'single',
      pricePerNight: 140,
      images: [
          'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767828/jccr0lowxldhrotudni2.jpg', 
          'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767828/jccr0lowxldhrotudni2.jpg'
      ],
      id: '668ce6d9296708cdbae3865f'
    },
    checkInDate: '2024-07-10T08:58:40.000Z',
    checkOutDate: '2024-07-13T08:58:40.000Z',
    status: 'pending',
    createdAt: '2024-07-13T06:13:36.243Z',
    updatedAt: '2024-07-13T06:13:36.243Z',
    hotel: {
      _id: '668ce408603914bd3b9e585b',
      name: 'Hilton International Hotel',
      imageCover: 
        'http://res.cloudinary.com/dvp1mjhd9/image/upload/v1719767825/q3elysozotzxbdpddv8b.jpg',
      id: '668ce408603914bd3b9e585b'
    },
    numOfNights: 3,
    pricePerNight: 140,
    totalPrice: 420,
    id: '66921b10286016274ee101b0'
  }
*/

function BookingTableBody({ booking }) {
  return (
    <div className="mb-1 grid grid-cols-10 items-center gap-3 border-b border-slate-200 p-3 text-sm shadow">
      {/* HOTEL NAME */}
      <div className="col-span-2 col-start-1 flex items-center gap-2">
        <img
          className="h-12 w-12 object-cover"
          src={booking.hotel.imageCover}
          alt="image"
        />
        <span className="w-[65%] whitespace-pre-line text-sm font-bold">
          {booking.hotel.name}
        </span>
      </div>

      {/* ROOM */}
      <div className="col-span-1 col-start-3 flex items-center gap-2">
        <img
          className="h-12 w-12 object-cover"
          src={booking.room.images[0]}
          alt="image"
        />
        <div className="">
          <p className="">{`# ${booking.room.roomNumber}`}</p>
          <p className="text-[10px] font-thin tracking-tight">
            {booking.room.roomType}
          </p>
        </div>
      </div>

      {/* USER */}
      <div className="col-span-2 col-start-4 flex items-center gap-2">
        <img
          className="h-12 w-12 object-cover"
          src={booking.user.photo}
          alt="image"
        />
        <div className="">
          <p className="">{`${booking.user.firstName}`}</p>
          <p className="tracking-tight text-xs">
            {booking.user.phoneNumber}
          </p>
        </div>
      </div>

      {/* PHONE NUMBER */}
      {/* <div className="col-span-1 col-start-5">{booking.user.phoneNumber}</div> */}

      {/* CHECKIN DATE */}
      <div className="col-span-1 col-start-6">
        {formatDate(booking.checkInDate)}
      </div>
      <div className="col-span-1 col-start-7 flex gap-2">
        <p className="">{`${booking.numOfNights}`}</p>
        <span className="">{`${booking.numOfNights > 1 ? "Nights" : "Night"}`}</span>
      </div>
      <div className="col-span-1 col-start-8 flex flex-col">
        <p className="">{`${booking.pricePerNight}`}</p>
        <span className="">ETB / Night</span>
      </div>

      {/* TOTAL PRICE */}
      <div className="col-span-1 col-start-9">{`${booking.totalPrice} ETB`}</div>

      {/* PAYMENT STATUS */}
      <div
        className="col-span-1 col-start-10 flex justify-self-center rounded px-2 py-[2px] text-white"
        style={{
          backgroundColor:
            booking.status === "confirmed"
              ? "green"
              : booking.status === "pending"
                ? "orange"
                : booking.status === "cancelled"
                  ? "red"
                  : null,
        }}
      >
        {booking.status}
      </div>
    </div>
  );
}

export default BookingTableBody;
