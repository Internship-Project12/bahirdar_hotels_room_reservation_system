function RoomsTableHeading() {
  return (
    <div className="mb-2 grid grid-cols-9 items-center gap-2 border-b border-slate-200 bg-slate-200 p-3">
      <div className="col-span-2 col-start-1">Room</div>
      <div className="col-span-1 col-start-3">Room Number</div>
      <div className="col-span-1 col-start-4">Type</div>
      <div className="col-span-1 col-start-5">Price / Night</div>
      <div className="col-span-1 col-start-6">capacity</div>
      {/* <div className="col-span-1 col-start-7">description</div> */}
      <div className="col-span-1 col-start-7">amenities</div>
      <div className="col-span-1 col-start-8">isAvailable</div>
      <div className="col-span-1 col-start-9"></div>
    </div>
  );
}

export default RoomsTableHeading;
