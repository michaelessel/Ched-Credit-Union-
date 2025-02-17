import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Custom SVG icons for quick actions
const QuickActionIcons = {
  CheckingAccount: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
      <path d="M6 16H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Transfer: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 8L21 12M21 12L17 16M21 12H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16L3 12M3 12L7 8M3 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Savings: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M12 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 7L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Investment: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17L9 11L13 15L21 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 7H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  CreditCard: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
      <path d="M7 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Link href="/dashboard/checking-accounts" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <QuickActionIcons.CheckingAccount />
            <span className="mt-2">Checking Accounts</span>
          </Button>
        </Link>
        <Link href="/dashboard/my-cards" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <QuickActionIcons.CreditCard />
            <span className="mt-2">My Cards</span>
          </Button>
        </Link>
        <Link href="/transfer" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <QuickActionIcons.Transfer />
            <span className="mt-2">Transfer</span>
          </Button>
        </Link>
        <Link href="/savings" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <QuickActionIcons.Savings />
            <span className="mt-2">Savings</span>
          </Button>
        </Link>
        <Link href="/investments" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <QuickActionIcons.Investment />
            <span className="mt-2">Investments</span>
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

