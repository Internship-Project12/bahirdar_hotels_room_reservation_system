function HotelTableHeader() {
  return (
    <div className="mb-2 grid grid-cols-10 items-center gap-2 border-b border-slate-200 bg-slate-200 p-3">
      <div className="col-span-1 col-start-1">Image</div>
      <div className="col-span-1 col-start-2">Name</div>
      <div className="col-span-1 col-start-3">HotelRating</div>
      <div className="col-span-1 col-start-4">Address</div>
      <div className="col-span-1 col-start-5">Rooms</div>
      <div className="col-span-1 col-start-6">price / night</div>
      <div className="col-span-1 col-start-7">Reviews</div>
      <div className="col-span-1 col-start-8">AvgRatings</div>
      <div className="col-span-1 col-start-9">Facilities</div>
      <div className="col-span-1 col-start-10"></div>
    </div>
  );
}

export default HotelTableHeader;
