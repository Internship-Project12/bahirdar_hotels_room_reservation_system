/* eslint-disable react/prop-types */
// import {
//   Area,
//   AreaChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// const data = [
//   {
//     month: "January",
//     hotels: 250,
//     users: 500,
//     bookings: 260,
//   },
//   {
//     month: "Febraury",
//     hotels: 250,
//     users: 300,
//     bookings: 102,
//   },
//   {
//     month: "March",
//     hotels: 230,
//     users: 201,
//     bookings: 150,
//   },
//   {
//     month: "April",
//     hotels: 294,
//     users: 240,
//     bookings: 287,
//   },
//   {
//     month: "May",
//     hotels: 200,
//     users: 220,
//     bookings: 330,
//   },
//   {
//     month: "June",
//     hotels: 149,
//     users: 290,
//     bookings: 400,
//   },
//   {
//     month: "July",
//     hotels: 204,
//     users: 302,
//     bookings: 500,
//   },
//   {
//     month: "Augest",
//     hotels: 270,
//     users: 300,
//     bookings: 140,
//   },
//   {
//     month: "September",
//     hotels: 198,
//     users: 300,
//     bookings: 286,
//   },
//   {
//     month: "October",
//     hotels: 140,
//     users: 392,
//     bookings: 417,
//   },
//   {
//     month: "November",
//     hotels: 374,
//     users: 94,
//     bookings: 214,
//   },
//   {
//     month: "December",
//     hotels: 649,
//     users: 107,
//     bookings: 260,
//   },
// ];

// function AreaChartBox() {
//   return (
//     <div className="flex h-full w-full flex-col justify-between pb-6 pr-6">
//       <h2 className="mb-8 text-2xl font-bold">
//         Hotels, Users and Bookings Monthly Status
//       </h2>
//       <div className="h-[400px] w-full">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart
//             data={data}
//             margin={{
//               top: 10,
//               right: 30,
//               left: 0,
//               bottom: 0,
//             }}
//           >
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "purple",
//                 borderRadius: "5px",
//                 fontSize: "20px",
//                 color: "orange",
//               }}
//               itemStyle={{
//                 color: "white",
//                 fontSize: "20px",
//               }}
//             />
//             <Area
//               type="monotone"
//               dataKey="bookings"
//               stackId="1"
//               stroke="#ffab03"
//               fill="#ffab03"
//             />
//             <Area
//               type="monotone"
//               dataKey="users"
//               stackId="1"
//               stroke="#160ce4"
//               fill="#160ce4"
//             />
//             <Area
//               type="monotone"
//               dataKey="hotels"
//               stackId="1"
//               stroke="#15c458"
//               fill="#15c458"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default AreaChartBox;

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaChartBox = ({ title, data, dataKeys, colors, height = 400 }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between pb-6 pr-6">
      <h2 className="mb-8 text-2xl font-bold">{title}</h2>
      <div className={`h-[${height}px] w-full`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "purple",
                borderRadius: "5px",
                fontSize: "20px",
                color: "orange",
              }}
              itemStyle={{
                color: "white",
                fontSize: "20px",
              }}
            />
            {dataKeys.map((key, index) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stackId="1"
                stroke={colors[index]}
                fill={colors[index]}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
