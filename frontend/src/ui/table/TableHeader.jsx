/* eslint-disable react/prop-types */
function TableHeader({ headers }) {
  return (
    <div
      className={`mb-2 grid grid-cols-${headers.length} items-start justify-items-start gap-3 border border-slate-200 bg-slate-200 p-3 font-semibold`}
    >
      {headers.map((col, i) => (
        <div key={i} className="col-span-1">
          {col.label}
        </div>
      ))}
    </div>
  );
}

export default TableHeader;
