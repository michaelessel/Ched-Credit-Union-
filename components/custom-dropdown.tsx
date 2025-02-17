"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { User, ChevronDown, CreditCard, Settings, Shield, RefreshCcw, LogOut } from "lucide-react"
import type React from "react" // Added import for React

interface DropdownItem {
  href: string
  icon: React.ElementType
  label: string
}

const dropdownItems: DropdownItem[] = [
  { href: "/personal-accounting", icon: CreditCard, label: "Personal Accounting" },
  { href: "/account-settings", icon: Settings, label: "Account Settings" },
  { href: "/security-checkout", icon: Shield, label: "Security Checkout" },
  { href: "/currency-exchange", icon: RefreshCcw, label: "Currency Exchange" },
]

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleItemClick = (href: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(false)
      router.push(href)
    }, 2500)
  }

  const handleLogout = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(false)
      router.push("/logout")
    }, 1500)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-green-100 focus:outline-none transition-colors duration-150 px-3 py-2 rounded-md"
      >
        <User className="h-5 w-5" />
        <span>Michael</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {dropdownItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item.href)}
                className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                role="menuitem"
                disabled={isLoading}
              >
                <item.icon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                {item.label}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors duration-150 border-t border-gray-100"
              role="menuitem"
              disabled={isLoading}
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              Logout
            </button>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  )
}

