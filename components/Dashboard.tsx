import React from 'react'
import StatsCard from './StatsCard';
import SalesPerformanceChart from './SalesPerformanceChart';
import { FaDollarSign, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-6 mb-6">
        <StatsCard
          title="Total Sales"
          value="$9,328.55"
          change="+15.6%"
          icon={<FaDollarSign />}
        />
        <StatsCard
          title="Visitors"
          value="12,302"
          change="+12.7%"
          icon={<FaUserAlt />}
        />
        <StatsCard
          title="Orders"
          value="963"
          change="-12.7%"
          icon={<FaShoppingCart />}
        />
      </div>
      <div className="bg-white shadow-md p-4 rounded-lg">
        <SalesPerformanceChart />
      </div>
    </div>
  )
}
