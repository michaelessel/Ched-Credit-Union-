import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const transactions = [
  {
    id: 1,
    date: "2023-01-05",
    description: "Initial Available Balance",
    type: "credit",
    amount: 22000000,
    balance: 22000000,
  },
  {
    id: 2,
    date: "2023-01-10",
    description: "Pending Deposit",
    type: "credit",
    amount: 5000000,
    pending: true,
  },
  {
    id: 3,
    date: "2023-02-03",
    description: "Investment in Cocoa Farm - Purchase",
    type: "debit",
    amount: 3000000,
    category: "Cocoa Farm",
  },
  {
    id: 4,
    date: "2023-02-20",
    description: "Rental Income Received",
    type: "credit",
    amount: 800000,
    category: "Rental",
  },
  {
    id: 5,
    date: "2023-03-15",
    description: "Gold Finance Investment - Purchase",
    type: "debit",
    amount: 2500000,
    category: "Gold Finance",
  },
]

export default function RecentTransactions() {
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Link href="/transactions">
          <Button variant="ghost" size="sm" className="gap-2">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${transaction.type === "credit" ? "bg-green-100" : "bg-red-100"}`}>
                  {transaction.type === "credit" ? (
                    <ArrowUpIcon className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "credit" ? "+" : "-"}${transaction.amount.toLocaleString()}
                </div>
                {transaction.pending && <div className="text-xs text-yellow-600">Pending</div>}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

