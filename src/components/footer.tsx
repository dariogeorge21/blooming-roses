'use client';

import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t border-gray-100 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 py-12 md:h-32 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-800 to-pink-600 bg-clip-text text-transparent">
                Blooming Roses
              </span>
              <span className="text-sm font-medium text-gray-400">2K26</span>
            </div>
            <p className="text-center text-sm text-gray-500 md:text-left font-medium">
              &copy; {new Date().getFullYear()} Organized by Jesus Youth Pala. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://tally.so/r/gDMyEd"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-blue-50 px-6 py-2.5 text-blue-800 transition-all hover:bg-blue-100 border border-blue-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm font-semibold tracking-wide transition-all group-hover:pr-4">Register Now</span>
              <svg
                className="absolute right-3 opacity-0 transition-all group-hover:opacity-100"
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}