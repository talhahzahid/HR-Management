import LeaveCard from '@/components/LeaveCard'
import React from 'react'

export default function Page() {
  // Mock Data - In reality, this could come from an API
  const leaveStats = [
    { id: 1, title: 'Annual Leave', used: 12, total: 20, icon: '📅', bgColor: 'bg-blue-600' },
    { id: 2, title: 'Sick Leave', used: 2, total: 10, icon: '🤒', bgColor: 'bg-red-500' },
    { id: 3, title: 'Casual Leave', used: 4, total: 7, icon: '🏖️', bgColor: 'bg-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header Section */}
        <div className="mb-8 border-l-4 border-blue-600 pl-4">
          <h1 className="text-2xl font-bold text-gray-800">Leave Dashboard</h1>
          <p className="text-gray-500 text-sm">Summary of your attendance for 2026</p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {leaveStats.map((stat) => (
            <LeaveCard
              key={stat.id}
              title={stat.title}
              used={stat.used}
              total={stat.total}
              icon={stat.icon}
              bgColor={stat.bgColor}
            />
          ))}
        </div>

      </div>
    </div>
  )
}