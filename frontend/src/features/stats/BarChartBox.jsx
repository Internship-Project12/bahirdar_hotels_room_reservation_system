/* eslint-disable react/prop-types */
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartBox = ({ data }) => {
  return (
    <div className="h-full w-full">
      <h1 className="mb-5 text-xl font-bold">{data.title}</h1>
      <div className="h-4/5 w-full">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={data.chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              cursor={{ fill: "none" }}
              formatter={(value) => [`Visit: ${value}`]}
              contentStyle={{
                background: "purple",
                borderRadius: "5px",
                color: "white",
                fontSize: "20px",
              }}
              itemStyle={{ color: "white" }}
              labelStyle={{ color: "white" }}
            />
            <Bar dataKey={data.dataKey} fill={data.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
