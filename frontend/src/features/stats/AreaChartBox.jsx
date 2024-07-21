/* eslint-disable react/prop-types */
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
