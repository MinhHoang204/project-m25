import React from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold">Welcome to Admin Dashboard</h2>
          <p className="mt-4">This is where you can manage all the resources.</p>
        </div>
      </div>
    </div>
  )
}
