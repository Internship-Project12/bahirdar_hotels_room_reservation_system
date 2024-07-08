/* eslint-disable react/prop-types */

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

// Generic Table Component
function Table({ title, headers, bodyDatas }) {
  return (
    <div className="w-full rounded bg-white shadow-md">
      <h1 className="p-4 font-opensans text-2xl font-bold uppercase">
        {title}
      </h1>
      <TableHeader headers={headers} />
      {bodyDatas?.map((item, index) => (
        <TableBody key={index} headers={headers} bodyData={item} />
      ))}
    </div>
  );
}

export default Table;
