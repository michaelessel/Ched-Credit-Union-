"use client"

import { useEffect, useState } from "react"
import AccountSummary from "@/components/account-summary"
import QuickActions from "@/components/quick-actions"
import RecentTransactions from "@/components/recent-transactions"
import { getGreeting } from "@/utils/getGreeting"

export default function DashboardPage() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    setGreeting(getGreeting())
  }, [])

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{greeting}, Michael</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-1">
          <AccountSummary />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <QuickActions />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <RecentTransactions />
        </div>
      </div>
    </main>
  )
}

