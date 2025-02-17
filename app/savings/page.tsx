"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

export default function SavingsPage() {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const totalSavings = 22000000
  const goal = 25000000
  const progress = (totalSavings / goal) * 100

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isPageLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Retirement Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold">${totalSavings.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Savings</p>
              </div>
              <div>
                <p className="text-sm font-medium">Progress to Goal</p>
                <Progress value={progress} className="mt-2" />
                <p className="text-sm text-muted-foreground mt-1">
                  ${totalSavings.toLocaleString()} of ${goal.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-4 text-center">
          <Link href="/dashboard" className="text-blue-500 hover:underline">
            Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  )
}

