import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Background } from "@/components/Background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription Active",
};

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://quadposter.up.railway.app";

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white flex flex-col">
      <Background />
      <Nav />

      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="inline-flex p-4 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            You&apos;re all set!
          </h1>
          <p className="text-white/40 mb-2 leading-relaxed">
            Your 14-day free trial has started. Head to the dashboard to connect
            your social accounts and start publishing.
          </p>
          <p className="text-white/25 text-sm mb-8">
            You won&apos;t be charged until your trial ends.
          </p>
          <a
            href={`${APP_URL}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            Go to Dashboard
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
