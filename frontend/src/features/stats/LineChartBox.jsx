/* eslint-disable react/prop-types */
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function LineChartBox({ data }) {
  return (
    <div className="flex h-full w-full flex-col justify-between pb-6 pr-6">
      <h2 className="mb-2 text-2xl font-bold">
        Total Number of Registered Hotels, Users and Bookings over Time
      </h2>
      <div className="h-full w-full">
        <ResponsiveContainer>
          <LineChart width={"100%"} height={"100%"} data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            {/* <Tooltip /> */}
            <Tooltip
              cursor={{ fill: "none" }}
              contentStyle={{
                background: "purple",
                borderRadius: "5px",
                color: "white",
                fontSize: "20px",
              }}
              itemStyle={{ color: "white" }}
              labelStyle={{ color: "white" }}
            />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
            <Line type="monotone" dataKey="hotels" stroke="#82ca9d" />
            <Line type="monotone" dataKey="bookings" stroke="#9b3cc0" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineChartBox;
