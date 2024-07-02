function BookingTableHeading() {
  return (
    <div className="mb-2 grid grid-cols-7 items-start justify-items-start gap-3 border border-slate-200 bg-slate-200 p-3 font-semibold">
      <div className="col-span-1 col-start-1">Booking Date</div>
      <div className="col-span-1 col-start-2">Customer</div>
      <div className="col-span-1 col-start-3">Persons</div>
      <div className="col-span-1 col-start-4">Phone</div>
      <div className="col-span-1 col-start-5">Check-In</div>
      <div className="col-span-1 col-start-6">Check-Out</div>
      <div className="col-span-1 col-start-7">Payment</div>
    </div>
  );
}

export default BookingTableHeading;
