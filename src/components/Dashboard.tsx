import React from 'react';
import { BarChart3, Package, ShoppingCart, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Products"
          value="1,234"
          icon={<Package size={24} />}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Low Stock Items"
          value="23"
          icon={<AlertCircle size={24} />}
          color="bg-yellow-500"
        />
        <DashboardCard
          title="Out of Stock"
          value="5"
          icon={<Package size={24} />}
          color="bg-red-500"
        />
        <DashboardCard
          title="Total Sales"
          value="$45,678"
          icon={<ShoppingCart size={24} />}
          color="bg-green-500"
        />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="bg-white shadow rounded-lg p-4">
          <p>Activity log will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className={`${color} text-white rounded-lg shadow p-4`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="bg-white bg-opacity-30 rounded-full p-2">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;