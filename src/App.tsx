import React, { useState } from 'react';
import { BarChart3, Package, ShoppingCart, AlertCircle, LogOut, Users } from 'lucide-react';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import LowStockNotifications from './components/LowStockNotifications';
import SalesReport from './components/SalesReport';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import UserManagement from './components/UserManagement';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppContent() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { isAuthenticated, logout, user } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Login />
          <Register />
          <ForgotPassword />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Inventory Manager</h1>
          <p className="text-sm text-gray-600 mt-1">Welcome, {user?.name}</p>
        </div>
        <nav className="mt-4">
          <button
            className={`flex items-center w-full p-4 ${activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart3 className="mr-2" size={20} />
            Dashboard
          </button>
          <button
            className={`flex items-center w-full p-4 ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('products')}
          >
            <Package className="mr-2" size={20} />
            Products
          </button>
          <button
            className={`flex items-center w-full p-4 ${activeTab === 'sales' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('sales')}
          >
            <ShoppingCart className="mr-2" size={20} />
            Sales Report
          </button>
          <button
            className={`flex items-center w-full p-4 ${activeTab === 'notifications' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('notifications')}
          >
            <AlertCircle className="mr-2" size={20} />
            Low Stock
          </button>
          {user?.role === 'admin' && (
            <button
              className={`flex items-center w-full p-4 ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('users')}
            >
              <Users className="mr-2" size={20} />
              User Management
            </button>
          )}
          <button
            className="flex items-center w-full p-4 text-gray-600 hover:bg-gray-100"
            onClick={logout}
          >
            <LogOut className="mr-2" size={20} />
            Logout
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'products' && <ProductList />}
        {activeTab === 'sales' && <SalesReport />}
        {activeTab === 'notifications' && <LowStockNotifications />}
        {activeTab === 'users' && user?.role === 'admin' && <UserManagement />}
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;