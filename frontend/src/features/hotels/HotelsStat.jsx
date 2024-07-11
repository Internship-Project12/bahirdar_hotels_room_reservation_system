/* eslint-disable react/prop-types */
function HotelsStat({ Icon, title, number }) {
  return (
    <div className="m-2 grid grid-cols-2 items-center gap-1 rounded bg-[#E0A75E] px-2 py-8 text-slate-100">
      <Icon size={40} className="text-blue-500" />
      <div>
        <h3 className="font-bold">{title}</h3>
        <span className="font-bold">{number}</span>
      </div>
      {/* <button className="w-full rounded bg-slate-300 p-3 text-sm uppercase transition hover:bg-slate-200">
        View Details
      </button> */}
    </div>
  );
}

export default HotelsStat;
