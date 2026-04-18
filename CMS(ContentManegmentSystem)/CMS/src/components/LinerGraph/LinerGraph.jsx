import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import './LinerGraph.css'

const data = [
  { time: "1 AM", users: 30 },
  { time: "2 AM", users: 50 },
  { time: "3 AM", users: 40 },
  { time: "4 AM", users: 70 },
  { time: "5 AM", users: 90 },
  { time: "6 AM", users: 120 },
  { time: "7 AM", users: 30 },
  { time: "8 AM", users: 50 },
  { time: "9 AM", users: 40 },
  { time: "10 AM", users: 70 },
  { time: "11 AM", users: 90 },
  { time: "12 AM", users: 120 },
  { time: "1 PM", users: 30 },
  { time: "2 PM", users: 0 },
  { time: "3 PM", users: 40 },
  { time: "4 PM", users: 70 },
  { time: "5 PM", users: 90 },
  { time: "6 PM", users: 120 },
  { time: "7 PM", users: 30 },
  { time: "8 PM", users: 50 },
  { time: "9 PM", users: 80 },
  { time: "10 PM", users: 70 },
  { time: "11 PM", users: 90 },
  { time: "12 PM", users: 20 }
];

export default function LinerGraph() {
  return (
    <div className="LinerGraph">
      <h2>Hourly traffic</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />
          <YAxis />

          {/* 🔥 Hover tooltip */}
          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884d8"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}