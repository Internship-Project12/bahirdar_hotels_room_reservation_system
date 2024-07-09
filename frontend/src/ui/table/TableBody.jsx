/* eslint-disable react/prop-types */

function TableBody({ headers, data }) {
  return (
    <div
      className={`mb-2 grid grid-cols-${headers.length} items-center gap-3 border-b border-l border-r border-slate-200 p-2 text-sm`}
    >
      {headers.map((col, index) => (
        <div key={index} className="col-span-1 flex">
          {renderCell(data, col.key)}
        </div>
      ))}
    </div>
  );
}

function renderCell(data, key) {
  if (key === "customer") {
    return (
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={data.customerImg}
          alt={data.customer}
        />
        <span>{data.customer}</span>
      </div>
    );
  }
  if (key === "image") {
    return (
      <div className="h-full w-full">
        <img
          className="aspect-[3/2] h-full w-full rounded object-cover"
          src={data.image}
          alt=""
        />
      </div>
    );
  }
  if (key === "paymentStatus") {
    const bgColor =
      data.paymentStatus === "Completed"
        ? "green"
        : data.paymentStatus === "Pending"
          ? "orange"
          : "red";
    return (
      <div
        className="flex justify-self-center rounded px-2 py-[2px] text-white"
        style={{ backgroundColor: bgColor }}
      >
        {data.paymentStatus}
      </div>
    );
  }
  if (key === "facilities") {
    return data[key] && data[key].join(", ");
  }
  if (key === "actions") {
    return (
      <div className="flex gap-2">
        {data[key].map((action, index) => (
          <button key={index} onClick={action.onClick}>
            {action.icon}
          </button>
        ))}
      </div>
    );
  }
  return data[key];
}

export default TableBody;
