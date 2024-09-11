import React from 'react'
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUsers } from 'react-icons/fa';
export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold">Rikkei Academy</h1>
      </div>
      <nav className="mt-6">
        <ul>
          <li className="px-6 py-3 hover:bg-gray-700">
            <FaTachometerAlt className="inline-block mr-2" /> Dashboard
          </li>
          <li className="px-6 py-3 hover:bg-gray-700">
            <FaBox className="inline-block mr-2" /> Products
          </li>
          <li className="px-6 py-3 hover:bg-gray-700">
            <FaShoppingCart className="inline-block mr-2" /> Orders
          </li>
          <li className="px-6 py-3 hover:bg-gray-700">
            <FaUsers className="inline-block mr-2" /> Customers
          </li>
        </ul>
      </nav>
      <div className="mt-auto px-6 py-4">
        <button className="w-full bg-red-500 text-white py-2">Log out</button>
      </div>
    </div>
  )
}
