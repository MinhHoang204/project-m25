import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function SalesPerformanceChart() {
    const data = {
        labels: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
        datasets: [
          {
            label: 'Earnings',
            data: [30, 45, 28, 50, 65, 40, 55],
            borderColor: 'black',
            fill: false,
          },
          {
            label: 'Costs',
            data: [20, 30, 35, 40, 55, 30, 45],
            borderColor: 'gray',
            fill: false,
          },
        ],
    };
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-lg font-medium">Sales Performance</h3>
      <Line data={data} />
    </div>
  )
}
