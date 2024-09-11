import React from 'react'
import { FaBell, FaUserCircle } from 'react-icons/fa';
export default function Navbar() {
  return (
    <div className="bg-white shadow-md px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl">Welcome back, Rikkei Academy</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full py-1 px-3 mr-4"
        />
        <FaBell className="text-gray-500 mr-4" />
        <FaUserCircle className="text-gray-500" />
      </div>
    </div>
  )
}
