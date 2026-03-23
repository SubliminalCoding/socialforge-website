import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Background } from "@/components/Background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Cancelled",
};

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white flex flex-col">
      <Background />
      <Nav />

      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            No worries
          </h1>
          <p className="text-white/40 mb-8 leading-relaxed">
            Your checkout was cancelled. No charges were made. You can come back
            anytime to pick a plan.
          </p>
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
