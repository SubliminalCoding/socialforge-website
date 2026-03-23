import Link from "next/link";
import { Zap } from "lucide-react";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://quadposter.up.railway.app";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-semibold text-white">SocialForge</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-white/25">
          <Link
            href="/pricing"
            className="hover:text-white/50 transition-colors"
          >
            Pricing
          </Link>
          <a
            href={`${APP_URL}/api-docs`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors"
          >
            API Docs
          </a>
          <a
            href={`${APP_URL}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors"
          >
            Dashboard
          </a>
          <Link
            href="/terms"
            className="hover:text-white/50 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-white/50 transition-colors"
          >
            Privacy
          </Link>
        </div>
        <p className="text-xs text-white/15">Built for builders who ship.</p>
      </div>
    </footer>
  );
}
