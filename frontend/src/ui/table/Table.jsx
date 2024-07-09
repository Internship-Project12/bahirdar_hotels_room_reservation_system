/* eslint-disable react/prop-types */

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

// Generic Table Component
function Table({ title, headers, datas, actions }) {
  return (
    <div className="w-full bg-white font-lato text-gray-600 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="p-4 font-opensans text-2xl font-bold uppercase">
          {title}
        </h1>
        {actions && (
          <div>
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="mr-2 cursor-pointer rounded bg-blue-700 px-4 py-[6px] text-lg text-white"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <TableHeader headers={headers} />
      {datas?.map((item, index) => (
        <TableBody key={index} headers={headers} data={item} />
      ))}
    </div>
  );
}

export default Table;
