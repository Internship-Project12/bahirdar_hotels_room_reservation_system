function BookingTableHeading() {
  return (
    <div className="mb-2 grid grid-cols-10 items-center gap-2 border-b border-slate-200 bg-slate-200 p-3">
      <div className="col-span-2 col-start-1">Hotel</div>
      <div className="col-span-1 col-start-3">Room</div>
      <div className="col-span-2 col-start-4">user</div>
      <div className="col-span-1 col-start-6">checkInDate</div>
      <div className="col-span-1 col-start-7">numOfNights</div>
      <div className="col-span-1 col-start-8">pricePerNight</div>
      <div className="col-span-1 col-start-9">totalPrice</div>
      <div className="col-span-1 col-start-10">payment status</div>
    </div>
  );
}

export default BookingTableHeading;
