import React from 'react';
import { AlertCircle } from 'lucide-react';

const LowStockNotifications = () => {
  // Mock low stock data
  const lowStockItems = [
    { id: 1, name: 'Product 1', sku: 'SKU001', quantity: 5, threshold: 10 },
    { id: 2, name: 'Product 2', sku: 'SKU002', quantity: 3, threshold: 15 },
    { id: 3, name: 'Product 3', sku: 'SKU003', quantity: 8, threshold: 20 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Low Stock Notifications</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">SKU</th>
              <th className="p-3 text-left">Current Quantity</th>
              <th className="p-3 text-left">Threshold</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.sku}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">{item.threshold}</td>
                <td className="p-3">
                  <span className="flex items-center text-yellow-500">
                    <AlertCircle size={16} className="mr-1" />
                    Low Stock
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LowStockNotifications;