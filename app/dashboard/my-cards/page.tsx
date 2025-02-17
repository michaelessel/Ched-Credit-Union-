"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Unlock } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"

interface CreditCard {
  id: string
  type: string
  lastFour: string
  isLocked: boolean
}

export default function MyCardsPage() {
  const [cards, setCards] = useState<CreditCard[]>([
    { id: "1", type: "Mastercard", lastFour: "2883", isLocked: false },
    { id: "2", type: "Debit", lastFour: "7829", isLocked: true },
  ])

  const toggleLock = (id: string) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, isLocked: !card.isLocked } : card)))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md">
        <DashboardHeader />
      </div>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Cards</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <Card key={card.id}>
              <CardHeader>
                <CardTitle>
                  {card.type} ending {card.lastFour}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div className="text-2xl font-semibold">**** **** **** {card.lastFour}</div>
                <Button variant={card.isLocked ? "destructive" : "outline"} onClick={() => toggleLock(card.id)}>
                  {card.isLocked ? (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Locked
                    </>
                  ) : (
                    <>
                      <Unlock className="mr-2 h-4 w-4" />
                      Unlocked
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

