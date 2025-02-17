import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-3xl font-bold">$22,000,000.00</div>
          <p className="text-sm text-muted-foreground">Available Balance</p>
        </div>
        <div>
          <div className="text-lg font-semibold">$27,942,744.00</div>
          <p className="text-sm text-muted-foreground">Total Balance</p>
        </div>
        <div>
          <div className="text-lg font-semibold">$5,942,744.00</div>
          <p className="text-sm text-muted-foreground">Pending</p>
        </div>
      </CardContent>
    </Card>
  )
}

