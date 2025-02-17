import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer>
      {/* Support Banner */}
      <div className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold">Need Help?</h3>
              <p className="text-sm">Our support team is here for you 24/7</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm">Call us: (555) 123-4567</p>
              <p className="text-sm">Email: support@chedcreditunion.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-12 h-12">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1502-o7tNDKqvlQTBOgwnakO9CD0CMkPLU6.png"
                    alt="Ched Credit Union"
                    fill
                    className="object-contain brightness-0 invert"
                    sizes="48px"
                  />
                </div>
                <span className="text-2xl font-bold">Ched Credit Union</span>
              </Link>
              <p className="text-gray-400 text-base">
                Serving our community with trusted financial services since 1950.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="/banking" className="text-gray-400 hover:text-white">
                        Banking
                      </Link>
                    </li>
                    <li>
                      <Link href="/credit-cards" className="text-gray-400 hover:text-white">
                        Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link href="/investments" className="text-gray-400 hover:text-white">
                        Investments
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="/help" className="text-gray-400 hover:text-white">
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-400 hover:text-white">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} Ched Credit Union. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

