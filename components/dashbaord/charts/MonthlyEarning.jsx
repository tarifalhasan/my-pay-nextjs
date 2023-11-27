"use client";

import { curveCardinal } from "d3-shape";
import dynamic from "next/dynamic";
import { Area, AreaChart, Tooltip } from "recharts";

const cardinal = curveCardinal.tension(0.2);

const MonthlyEarningChart = ({ data }) => {
  return (
    <AreaChart
      className="w-full"
      width={500}
      data={data}
      height={80}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Tooltip />
      {/* <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.3}
      /> */}
      <Area
        type={cardinal}
        dataKey="uv"
        stroke="#5D87FF"
        stopOpacity={0.2}
        fill="#5D87FF"
        fillOpacity={0.2}
      />
    </AreaChart>
  );
};

export default dynamic(() => Promise.resolve(MonthlyEarningChart), {
  ssr: false,
});
