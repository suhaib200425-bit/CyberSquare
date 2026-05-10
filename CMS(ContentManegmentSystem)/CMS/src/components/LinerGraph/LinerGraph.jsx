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
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />
          <YAxis allowDecimals={false} />

          {/* 🔥 Hover tooltip */}
          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#000000"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}