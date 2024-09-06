import React from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import AdminMenu from '@/components/AdminMenu'
export default function Categories() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <AdminMenu />
      </div>
    </div>
  )
}
