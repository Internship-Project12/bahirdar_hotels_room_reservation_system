/* eslint-disable react/prop-types */

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

// Generic Table Component
function Table({ title, columns, bodyDatas }) {
  return (
    <div>
      <div className="w-full rounded bg-white shadow-md">
        <h1 className="p-4 font-opensans text-2xl font-bold uppercase">
          {title}
        </h1>
        <TableHeader columns={columns} />
        {bodyDatas.map((item, index) => (
          <TableBody key={index} columns={columns} bodyData={item} />
        ))}
      </div>
    </div>
  );
}

// Table Body Component

// Function to render cell based on column key

export default Table;
