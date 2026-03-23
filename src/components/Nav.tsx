"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Menu, X } from "lucide-react";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://quadposter.up.railway.app";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
      <Link href="/" className="flex items-center gap-2">
        <Zap className="h-5 w-5 text-blue-400" />
        <span className="text-xl font-bold tracking-tight text-white">
          SocialForge
        </span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          href="/pricing"
          className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
        >
          Pricing
        </Link>
        <a
          href={`${APP_URL}/login`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
        >
          Log in
        </a>
        <Link
          href="/pricing"
          className="px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
        aria-label="Toggle navigation menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#08090c]/95 backdrop-blur-sm border-b border-white/[0.06] p-6 md:hidden flex flex-col gap-4 z-50">
          <Link
            href="/pricing"
            onClick={() => setOpen(false)}
            className="px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <a
            href={`${APP_URL}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Log in
          </a>
          <Link
            href="/pricing"
            onClick={() => setOpen(false)}
            className="px-4 py-3 text-sm font-medium text-center rounded-lg bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
