"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import DashboardHeader from "@/components/dashboard-header"
import { transactions } from "@/utils/transactions"

export default function PersonalAccountingPage() {
  const [accountData, setAccountData] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    currentBalance: 0,
  })

  useEffect(() => {
    const calculateAccountData = () => {
      const totalIncome = transactions.filter((t) => t.type === "credit").reduce((sum, t) => sum + t.amount, 0)

      const totalExpenses = transactions.filter((t) => t.type === "debit").reduce((sum, t) => sum + t.amount, 0)

      const currentBalance = totalIncome - totalExpenses

      setAccountData({ totalIncome, totalExpenses, currentBalance })
    }

    calculateAccountData()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Personal Accounting - Michael Clayton Jnr</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Current Balance</h2>
                  <p className="text-2xl font-bold text-green-600">${accountData.currentBalance.toLocaleString()}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Routing Number</h2>
                  <p className="text-2xl font-bold">071000013</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Account Number</h2>
                  <p className="text-2xl font-bold">7822198345</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Account Type</h2>
                  <p className="text-2xl font-bold">Checking</p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Transaction History</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Transaction Number</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.time}</TableCell>
                          <TableCell>{transaction.transactionNumber}</TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell
                            className={`text-right ${
                              transaction.type === "credit" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {transaction.type === "credit" ? "+" : "-"}${transaction.amount.toLocaleString()}
                          </TableCell>
                          <TableCell
                            className={transaction.status === "pending" ? "text-yellow-600" : "text-green-600"}
                          >
                            {transaction.status}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

