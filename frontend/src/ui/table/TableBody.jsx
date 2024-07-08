/* eslint-disable react/prop-types */

function TableBody({ columns, bodyData }) {
  return (
    <div
      className={`mb-2 grid grid-cols-${columns.length} items-center gap-3 border-b border-l border-r border-slate-200 p-2 text-sm`}
    >
      {columns.map((col, index) => (
        <div key={index} className="col-span-1 flex items-center gap-3">
          {renderCell(bodyData, col.key)}
        </div>
      ))}
    </div>
  );
}

function renderCell(bodyData, key) {
  if (key === "customer") {
    return (
      <div className="flex items-center gap-2">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={bodyData.customerImg}
          alt="Customer Image"
        />
        <span>{bodyData.customer}</span>
      </div>
    );
  }
  if (key === "paymentStatus") {
    const bgColor =
      bodyData.paymentStatus === "Completed"
        ? "green"
        : bodyData.paymentStatus === "Pending"
          ? "orange"
          : "red";
    return (
      <div
        className="flex justify-self-center rounded px-2 py-[2px] text-white"
        style={{ backgroundColor: bgColor }}
      >
        {bodyData.paymentStatus}
      </div>
    );
  }
  return bodyData[key];
}

export default TableBody;
