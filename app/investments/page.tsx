"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

const investments = [
  { name: "Global Gold Finance", value: 5356344 },
  { name: "Cocoa Farm", value: 200000 },
  { name: "Personal Home", value: 386400 },
]

export default function InvestmentsPage() {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const totalInvestment = investments.reduce((sum, inv) => sum + inv.value, 0)

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
            <CardTitle>Investment Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {investments.map((investment, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="font-medium">{investment.name}</p>
                  <p className="text-right">${investment.value.toLocaleString()}</p>
                </div>
              ))}
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <p className="font-bold">Total Investment</p>
                  <p className="font-bold">${totalInvestment.toLocaleString()}</p>
                </div>
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

