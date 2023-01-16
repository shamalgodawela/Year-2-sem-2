import React from "react";
import {PieChart,Pie,Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar,} from "recharts";

const Report = () => {
  const data = [
    { name: "2018", cost:1500000 },
    { name: "2019", cost: 1600000 },
    { name: "2020", cost: 1000000 },
    { name: "2021", cost: 1200000 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Assets and maintance cost for past years(RS)</h2>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="cost"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="cost" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Report;