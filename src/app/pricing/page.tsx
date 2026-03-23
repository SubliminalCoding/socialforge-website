"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PLANS, PlanKey, BillingInterval } from "@/lib/stripe";

export default function PricingPage() {
  const [interval, setInterval] = useState<BillingInterval>("monthly");
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(plan: PlanKey) {
    setLoading(plan);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, interval }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout error:", data.error);
        setLoading(null);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setLoading(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#08090c] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-950/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-[120px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-400" />
          <span className="text-xl font-bold tracking-tight text-white">
            SocialForge
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-16 pb-12 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Simple, transparent
          <span className="text-blue-400"> pricing</span>
        </h1>
        <p className="text-lg text-white/40 max-w-xl mx-auto mb-10">
          Start free, scale when you're ready. Every plan includes a 14-day free
          trial.
        </p>

        {/* Billing toggle */}
        <div className="inline-flex items-center gap-1 p-1 rounded-xl border border-white/10 bg-white/[0.03]">
          <button
            onClick={() => setInterval("monthly")}
            className={`px-5 py-2 text-sm font-medium rounded-lg transition-all ${
              interval === "monthly"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "text-white/50 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setInterval("yearly")}
            className={`px-5 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
              interval === "yearly"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "text-white/50 hover:text-white"
            }`}
          >
            Yearly
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-medium">
              Save ~17%
            </span>
          </button>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-28 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(Object.entries(PLANS) as [PlanKey, (typeof PLANS)[PlanKey]][]).map(
            ([key, plan]) => {
              const isPopular = "popular" in plan && plan.popular;
              const price = plan[interval].price;
              const monthlyEquivalent =
                interval === "yearly"
                  ? (price / 12).toFixed(2)
                  : price.toFixed(2);

              return (
                <div
                  key={key}
                  className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                    isPopular
                      ? "border-blue-500/30 bg-blue-950/20 shadow-xl shadow-blue-500/10"
                      : "border-white/[0.08] bg-white/[0.02]"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-xs font-medium shadow-lg shadow-blue-600/30">
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        ${monthlyEquivalent}
                      </span>
                      <span className="text-white/35 text-sm">/month</span>
                    </div>
                    {interval === "yearly" && (
                      <p className="text-xs text-white/30 mt-1">
                        ${price}/year, billed annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/50"
                      >
                        <Check className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleCheckout(key)}
                    disabled={loading !== null}
                    className={`group w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-xl transition-all ${
                      isPopular
                        ? "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
                        : "border border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {loading === key ? (
                      <span className="animate-pulse">Redirecting...</span>
                    ) : (
                      <>
                        Get Started
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* FAQ-style trust section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pb-28 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes. Upgrade or downgrade anytime from your dashboard. Changes take effect on your next billing cycle.",
              },
              {
                q: "Is there a free trial?",
                a: "Every plan includes a 14-day free trial. No charge until the trial ends, cancel anytime.",
              },
              {
                q: "What payment methods do you accept?",
                a: "All major credit and debit cards through Stripe. We also support Apple Pay and Google Pay.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Cancel from your dashboard with one click. You keep access until the end of your billing period.",
              },
              {
                q: "Do I need the Business plan for OpenClaw?",
                a: "Yes. API access and webhook events are Business-tier features required for the full OpenClaw autopilot integration.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="text-sm font-medium text-white mb-1">
                  {faq.q}
                </h3>
                <p className="text-sm text-white/35">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-semibold text-white">
              SocialForge
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/25">
            <Link href="/" className="hover:text-white/50 transition-colors">
              Home
            </Link>
            <Link
              href="/pricing"
              className="hover:text-white/50 transition-colors"
            >
              Pricing
            </Link>
          </div>
          <p className="text-xs text-white/15">
            Built for builders who ship.
          </p>
        </div>
      </footer>
    </div>
  );
}
