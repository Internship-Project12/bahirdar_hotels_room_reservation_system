function HotelHeading() {
  return (
    <div className="mb-2 grid grid-cols-8 items-start justify-items-start gap-3 border border-slate-200 bg-slate-200 p-3 font-semibold">
      <div className="col-span-1 col-start-1">Image</div>
      <div className="col-span-1 col-start-2">Name</div>
      <div className="col-span-1 col-start-3">Adress</div>
      <div className="col-span-1 col-start-4">Number of Rooms</div>
      <div className="col-span-1 col-start-5">Number of Ratings</div>
      <div className="col-span-1 col-start-6">Average Ratings</div>
      <div className="col-span-1 col-start-7">Facilites</div>
    </div>
  );
}

export default HotelHeading;
