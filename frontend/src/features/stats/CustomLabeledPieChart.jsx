import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { roomType: "Single", value: 200 },
  { roomType: "Double", value: 129 },
  { roomType: "Twin", value: 228 },
  { roomType: "Triple", value: 140 },
  { roomType: "Quad", value: 85 },
  { roomType: "Twin-Double", value: 50 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#18cf36",
  "#8221a0",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function CustomLabeledPieChart() {
  return (
    <div className="h-full w-full">
      <h2 className="text-2xl font-bold">Hotel Room Type Category</h2>
      <div className="flex items-center">
        <div className="h-[300px] w-2/5">
          <ResponsiveContainer width="99%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={"80%"}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="focus:outline-none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2-nv gap-2 p-4">
          {data.map((entry, index) => (
            <div
              key={`legend-${index}`}
              className="m-2 flex items-center text-lg"
            >
              <div
                className="mr-2 h-4 w-4 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span className="font-medium">{entry.roomType}</span>
              <span className="ml-2">{`${((entry.value / data.reduce((acc, cur) => acc + cur.value, 0)) * 100).toFixed(0)}%`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomLabeledPieChart;
