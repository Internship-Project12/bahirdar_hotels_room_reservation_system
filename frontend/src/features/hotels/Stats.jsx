/* eslint-disable react/prop-types */
function Stats({ Icon, title, number }) {
  return (
    <div className="m-2 flex items-start justify-between gap-1 rounded bg-[#E0A75E] px-2 py-8 text-slate-100 shadow-xl">
      <div className="flex w-full flex-col">
        <h3 className="text-sm font-bold">{title}</h3>
        <span className="text-2xl font-bold">{number}</span>
      </div>
      <div className="flex items-start">
        <Icon size={50} className="inline-block text-blue-500" />
      </div>
    </div>
  );
}

export default Stats;
