"use client"

import Image from "next/image"
import Link from "next/link"
import CustomDropdown from "./custom-dropdown"
import NotificationDropdown from "./notification-dropdown"

export default function DashboardHeader() {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="w-1/4">
            <NotificationDropdown />
          </div>
          <Link href="/dashboard" className="flex items-center gap-2 justify-center w-1/2">
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
            <span className="text-xl font-bold">Ched Credit Union</span>
          </Link>
          <div className="w-1/4 flex justify-end">
            <CustomDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}

