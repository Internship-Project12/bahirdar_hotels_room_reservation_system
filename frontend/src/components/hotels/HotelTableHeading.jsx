function HotelHeading() {
  return (
    <div className="mb-2 grid grid-cols-10 items-start justify-items-start gap-3 border border-slate-200 p-3 font-semibold">
      <div className="col-span-1 col-start-1">Image</div>
      <div className="col-span-1 col-start-2">Name</div>
      <div className="col-span-1 col-start-3">Adress</div>
      <div className="col-span-1 col-start-4">Number of rooms</div>
      <div className="col-span-1 col-start-5">Number of ratings</div>
      <div className="col-span-1 col-start-6">Average ratings</div>
      <div className="col-span-1 col-start-7">Facilites</div>
    </div>
  );
}

export default HotelHeading;
