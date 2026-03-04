'use client';

import Link from "next/link"
import Image from "next/image"

export function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100/50 bg-white/70 backdrop-blur-xl transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/bloomingroses/logo.png"
                  alt="Blooming Roses Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-2 text-sm font-medium">
              <Link
                href="/"
                className="px-4 py-2 rounded-full text-gray-600 transition-all hover:bg-gray-100 hover:text-blue-800"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 rounded-full text-gray-600 transition-all hover:bg-gray-100 hover:text-blue-800"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="px-4 py-2 rounded-full text-gray-600 transition-all hover:bg-gray-100 hover:text-blue-800"
              >
                Gallery
              </Link>
              <div className="w-px h-6 bg-gray-200 mx-2"></div>
              <Link
                href="https://tally.so/r/gDMyEd"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold tracking-wide shadow-md transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </Link>
            </nav>
          </div>
          {/* Mobile Register Button (Optional visible on sm) */}
          <div className="md:hidden flex items-center">
            <Link
              href="https://tally.so/r/gDMyEd"
              className="px-4 py-2 rounded-full bg-blue-800 text-white text-sm font-medium shadow-sm active:scale-95 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}