import React from 'react'
import '/resources/css/Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title, data,dataKey,grid}) {
    return (
        <div className="Chart">
            <h3 className="charTitle">
                {title}
            </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1} height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          { grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" stroke="#5550bd" />
          {/* <YAxis />*/ } 
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}
