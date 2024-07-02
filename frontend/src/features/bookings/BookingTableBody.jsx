/* eslint-disable react/prop-types */
function BookingTableBody({ booking }) {
  return (
    <div className="mb-2 grid grid-cols-7 items-center gap-3 border-b border-l border-r border-slate-200 p-2 text-sm">
      <div className="col-span-1 col-start-1">{booking.bookingDate}</div>
      <div className="col-span-1 col-start-2 flex items-center gap-2">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={booking.customerImg}
          alt=""
        />
        <span>{booking.customer}</span>
      </div>
      <div className="col-span-1 col-start-3">{booking.persons}</div>
      <div className="col-span-1 col-start-4">{booking.phone}</div>
      <div className="col-span-1 col-start-5">{booking.checkIn}</div>
      <div className="col-span-1 col-start-6">{booking.checkOut}</div>
      <div
        className="col-span-1 col-start-7 flex justify-self-center rounded px-2 py-[2px] text-white"
        style={{
          backgroundColor:
            booking.paymentStatus === "Completed"
              ? "green"
              : booking.paymentStatus === "Pending"
                ? "orange"
                : "red",
        }}
      >
        {booking.paymentStatus}
      </div>
    </div>
  );
}

export default BookingTableBody;
