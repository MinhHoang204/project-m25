import React from 'react'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import StatsCard from '@/components/StatsCard'
export default function page() {
  return (
    <div>page
      <Login></Login>
      <Register></Register>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <StatsCard></StatsCard>
    </div>
  )
}
