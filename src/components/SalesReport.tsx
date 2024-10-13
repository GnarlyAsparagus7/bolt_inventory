import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesReport = () => {
  // Mock sales data
  const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 5500 },
  ];

  const chartData = {
    labels: salesData.map(item => item.name),
    datasets: [
      {
        label: 'Sales',
        data: salesData.map(item => item.sales),
        backgroundColor: '#3b82f6',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Sales',
      },
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sales Report</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <Bar options={options} data={chartData} />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Top Selling Products</h3>
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Units Sold</th>
              <th className="p-3 text-left">Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-3">Product 1</td>
              <td className="p-3">500</td>
              <td className="p-3">$10,000</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3">Product 2</td>
              <td className="p-3">350</td>
              <td className="p-3">$8,750</td>
            </tr>
            <tr>
              <td className="p-3">Product 3</td>
              <td className="p-3">200</td>
              <td className="p-3">$6,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;