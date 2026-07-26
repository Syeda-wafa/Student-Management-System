import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "React", value: 40 },
  { name: "Node.js", value: 25 },
  { name: "MongoDB", value: 20 },
  { name: "Express", value: 15 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

function CoursePieChart() {
  return (
    <div className="chart-card">
      <h2>Course Distribution</h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={110} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CoursePieChart;
