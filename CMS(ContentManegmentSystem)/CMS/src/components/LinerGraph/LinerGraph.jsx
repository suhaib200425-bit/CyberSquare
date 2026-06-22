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
import { useEffect,useState } from "react";
import axios from "axios"

 

export default function LinerGraph({GraphData}) {
  
  return (
    <div className="LinerGraph">
      <h2>Hourly traffic</h2>
      <ResponsiveContainer>
        <LineChart data={GraphData}>
          <CartesianGrid strokeDasharray="6 6" />

          <XAxis dataKey="time" />
          <YAxis allowDecimals={false} />

          {/* 🔥 Hover tooltip */}
          <Tooltip contentStyle={{
    backgroundColor: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "8px",
    color: "#fff"
  }}
  labelStyle={{
    color: "#fff"
  }}
  itemStyle={{
    color: "#22c55e"
  }} />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#e6e2e2"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}