import React from 'react'

interface StatusProps {
  status: 'success' | 'failed' | 'pending'
}

const StatusBadge = ({ status }: StatusProps) => {
  const badgeColors = {
    success: 'bg-green-500',
    failed: 'bg-red-500',
    pending: 'bg-yellow-500'
  }

  return <span className={`px-2 py-1 rounded-full text-white text-sm font-bold ${badgeColors[status]}`}>{status}</span>
}

export default StatusBadge
