"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DashboardHeader from "@/components/dashboard-header"
import DashboardLoading from "./loading"
import type React from "react" // Added import for React

const AUTO_LOGOUT_TIME = 2 * 60 * 1000 // 2 minutes in milliseconds

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("auth_token")
      const twoFAVerified = localStorage.getItem("2fa_verified")
      if (!token || !twoFAVerified) {
        router.push("/")
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false)
      }
    }

    checkAuth()

    // Set up auto-logout timer
    const logoutTimer = setTimeout(() => {
      localStorage.removeItem("auth_token")
      localStorage.removeItem("2fa_verified")
      router.push("/")
    }, AUTO_LOGOUT_TIME)

    // Clear the timer when the component unmounts
    return () => clearTimeout(logoutTimer)
  }, [router])

  if (isLoading) {
    return <DashboardLoading />
  }

  return (
    <>
      <DashboardHeader />
      {children}
    </>
  )
}

