import "./Charts.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", students: 30 },
  { day: "Tue", students: 45 },
  { day: "Wed", students: 38 },
  { day: "Thu", students: 60 },
  { day: "Fri", students: 55 },
  { day: "Sat", students: 70 },
  { day: "Sun", students: 82 },
];

function StudentChart() {
  return (
    <div className="chart-card">
      <h2>Weekly Student Growth</h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" />

          <XAxis dataKey="day" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="students"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StudentChart;
