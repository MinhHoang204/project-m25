import React from 'react'
interface StatsCard {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
}
export default function StatsCard(title:any, value:any, change:any, icon:any) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
          {change}
        </p>
      </div>
      <div className="text-gray-500">{icon}</div>
    </div>
  )
}
