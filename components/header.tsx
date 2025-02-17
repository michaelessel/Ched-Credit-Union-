"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const navItems = [
  { title: "Credit Cards", href: "/credit-cards" },
  { title: "Banking", href: "/banking" },
  { title: "Auto", href: "/auto" },
  { title: "Business", href: "/business" },
  { title: "Commercial", href: "/commercial" },
]

export default function Header() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleNavigation = (href: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push(href)
    }, 1500)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
            <span className="text-xl font-bold text-blue-600">Ched Credit Union</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="text-blue-600 hover:bg-blue-50"
                onClick={() => handleNavigation(item.href)}
                disabled={isLoading}
              >
                {item.title}
              </Button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => handleNavigation("/login")} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => handleNavigation("/open-account")}
              disabled={isLoading}
            >
              Open Account
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

