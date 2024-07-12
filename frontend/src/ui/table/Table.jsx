/* eslint-disable react/prop-types */

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

// Generic Table Component
function Table({ headers, data }) {
  return (
    <div className="w-full bg-white text-gray-600 shadow-md">
      {/* TABLE TITLE */}
      {/* <div className="flex items-center justify-between">
        <h1 className="p-4 text-2xl font-bold uppercase">
          {title}
        </h1>
      </div> */}

      {/* TABLE HEADER */}
      <TableHeader headers={headers} />

      {/* TABLE BODY */}
      {data?.map((item, index) => (
        <TableBody key={index} headers={headers} data={item} />
      ))}
    </div>
  );
}

export default Table;
