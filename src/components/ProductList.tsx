import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import AddEditProduct from './AddEditProduct';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Mock product data
  const products = [
    { id: 1, name: 'Product 1', sku: 'SKU001', quantity: 100, price: 19.99 },
    { id: 2, name: 'Product 2', sku: 'SKU002', quantity: 50, price: 29.99 },
    { id: 3, name: 'Product 3', sku: 'SKU003', quantity: 75, price: 39.99 },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
          onClick={() => setShowAddProduct(true)}
        >
          <Plus size={20} className="mr-2" />
          Add Product
        </button>
      </div>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">SKU</th>
            <th className="p-3 text-left">Quantity</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className="border-b border-gray-200">
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.sku}</td>
              <td className="p-3">{product.quantity}</td>
              <td className="p-3">${product.price.toFixed(2)}</td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAddProduct && (
        <AddEditProduct onClose={() => setShowAddProduct(false)} />
      )}
    </div>
  );
};

export default ProductList;