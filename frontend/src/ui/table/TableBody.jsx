/* eslint-disable react/prop-types */

function TableBody({ headers, data }) {
  return (
    <div
      className={`relative mb-2 grid grid-cols-${headers.length} items-start gap-3 border-b border-l border-r border-slate-200 p-2 text-sm`}
    >
      {headers.map((col, i) => (
        <div key={i} className="col-span-1 flex">
          {renderCell(data, col.key)}
        </div>
      ))}
      <div className="absolute right-4 text-right">
        {data?.role && (
          <>
            <p className="rounded inline-block bg-blue-800 px-2 py-[2px] text-white">
              {data?.role}
            </p>
            <p className="">{data.role === "manager" && data.hotel}</p>
          </>
        )}
      </div>
    </div>
  );
}

function renderCell(data, key) {
  if (key === "user" && data.userImg) {
    return (
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={data.userImg}
          alt={data.user}
        />
        <span>{data.user}</span>
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

  return data[key];
}

export default TableBody;
