import React from 'react'

export default function AdminMenu() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Category Management</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add New Category</button>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Category Name</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-4">1</td>
            <td className="py-2 px-4">Category 1</td>
            <td className="py-2 px-4">
              <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </td>
          </tr>
          {/* Thêm các hàng khác ở đây */}
        </tbody>
      </table>
    </div>
  )
}
