import React from 'react'
import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
import AdminMenu from '@/components/admin/AdminMenu'
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
