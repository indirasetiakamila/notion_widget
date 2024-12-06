"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export default function DigitalCountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      const difference = lastDayOfMonth.getTime() - now.getTime()

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[300px] bg-white font-digital">
      <h2 className="text-2xl text-[#8B4513] mb-6 font-semibold tracking-wide">Time Remaining This Month</h2>
      <div className="flex flex-wrap gap-6 items-center justify-center mb-6">
        <Card className="p-4 w-24 h-24 flex flex-col items-center justify-center bg-[#8B4513] text-[#DEB887] border-[#D2691E] border-2 rounded-lg shadow-inner">
          <span className="text-4xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="text-xs uppercase tracking-wide">days</span>
        </Card>
        <Card className="p-4 w-24 h-24 flex flex-col items-center justify-center bg-[#8B4513] text-[#DEB887] border-[#D2691E] border-2 rounded-lg shadow-inner">
          <span className="text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-xs uppercase tracking-wide">hours</span>
        </Card>
        <Card className="p-4 w-24 h-24 flex flex-col items-center justify-center bg-[#8B4513] text-[#DEB887] border-[#D2691E] border-2 rounded-lg shadow-inner">
          <span className="text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-xs uppercase tracking-wide">mins</span>
        </Card>
        <Card className="p-4 w-24 h-24 flex flex-col items-center justify-center bg-[#8B4513] text-[#DEB887] border-[#D2691E] border-2 rounded-lg shadow-inner">
          <span className="text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-xs uppercase tracking-wide">secs</span>
        </Card>
      </div>
      <p className="text-[#8B4513] font-medium text-lg">Savor every moment</p>
    </div>
  )
}

