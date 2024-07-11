/* eslint-disable react/prop-types */

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

// Generic Table Component
function Table({ title, headers, datas }) {
  return (
    <div className="w-full bg-white font-lato text-gray-600 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="p-4 text-2xl font-bold uppercase">
          {title}
        </h1>
      </div>
      <TableHeader headers={headers} />
      {datas?.map((item, index) => (
        <TableBody key={index} headers={headers} data={item} />
      ))}
    </div>
  );
}

export default Table;
