function HotelTableHeader() {
  return (
    <div className="mb-2 grid grid-cols-8 items-center gap-2 border-b border-slate-200 bg-slate-200 p-3">
      <div className="col-span-1 col-start-1">Image</div>
      <div className="col-span-1 col-start-2">Name</div>
      <div className="col-span-1 col-start-3">Hotel Rating</div>
      <div className="col-span-1 col-start-4">Address</div>
      <div className="col-span-1 col-start-5">Number of Rooms</div>
      <div className="col-span-1 col-start-6">Number of Ratings</div>
      <div className="col-span-1 col-start-7">Average Ratings</div>
      <div className="col-span-1 col-start-8">Facilities</div>
    </div>
  );
}

export default HotelTableHeader;
