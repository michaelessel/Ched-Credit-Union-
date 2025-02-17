"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import DashboardHeader from "@/components/dashboard-header"
import { Loader2 } from "lucide-react"

export default function AccountSettingsPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input id="accountNumber" value="1234567890" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customRoutine">Custom Routine</Label>
                <Input id="customRoutine" placeholder="Enter your custom routine" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="depositCheck">Check Deposit</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="depositCheck" />
                  <label
                    htmlFor="depositCheck"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Enable automatic check deposit
                  </label>
                </div>
              </div>
              <Button type="submit">Save Settings</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

