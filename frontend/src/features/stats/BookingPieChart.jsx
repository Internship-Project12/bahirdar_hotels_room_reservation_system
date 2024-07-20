import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { RecentBooks } from "../../data/bookings";

// Define colors for each payment status
const statusColors = {
  Completed: "#17a11e",
  Pending: "#c3cf1b",
  Cancelled: "#dd1b1b",
};

const paymentStatusCounts = RecentBooks.reduce((acc, book) => {
  acc[book.paymentStatus] = (acc[book.paymentStatus] || 0) + 1;
  return acc;
}, {});

const paymentStatusArray = Object.keys(paymentStatusCounts).map((status) => ({
  paymentStatus: status,
  value: paymentStatusCounts[status],
  color: statusColors[status] || "gray",
}));

const totalCount = paymentStatusArray.reduce(
  (acc, item) => acc + item.value,
  0,
);

const percentage = (value) => Math.round((value / totalCount) * 100);

function BookingPieChart() {
  return (
    <div className="">
      <h2 className="mb-2 text-2xl font-bold">Booking Payment Status</h2>
      <div className="">
        <div className="flex h-[90%] w-[90%] flex-col justify-between">
          <div className="flex h-full w-full items-center justify-center">
            <PieChartBox />
          </div>
          <PieChartLegend />
        </div>
      </div>
    </div>
  );
}

function PieChartBox() {
  return (
    <ResponsiveContainer width="99%" height={300}>
      <PieChart>
        <Tooltip
          contentStyle={{
            backgroundColor: "blue",
            borderRadius: "5px",
          }}
          itemStyle={{
            color: "white",
          }}
        />
        <Pie
          data={paymentStatusArray}
          innerRadius={"50%"}
          outerRadius={"80%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          nameKey="paymentStatus"
        >
          {paymentStatusArray.map((status) => (
            <Cell
              key={status.paymentStatus}
              fill={status.color}
              className="focus:outline-none"
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

function PieChartLegend() {
  return (
    <div className="flex justify-between gap-8 text-sm">
      {paymentStatusArray.map((status) => (
        <div
          className="flex flex-col items-center justify-between gap-1"
          key={status.paymentStatus}
        >
          <div className="flex items-center gap-x-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: status.color }}
            ></div>
            <span>{status.paymentStatus}</span>
            <span>{percentage(status.value)}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingPieChart;
