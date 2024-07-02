/* eslint-disable react/prop-types */
function HotelsStat({ Icon, title, number }) {
  return (
    <div className="m-3 flex flex-col items-center gap-4 rounded-md bg-white p-3">
      <div className="grid grid-cols-2 items-center gap-2 p-4">
        <Icon size={50} className="text-yellow-500" />
        <div>
          <h3 className="font-bold text-slate-600">{title}</h3>
          <span className="text-lg font-bold">{number}</span>
        </div>
      </div>
      <button className="w-full rounded bg-slate-300 p-3 text-sm uppercase transition hover:bg-slate-200">
        View Details
      </button>
    </div>
  );
}

export default HotelsStat;
