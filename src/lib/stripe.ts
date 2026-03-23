import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
  typescript: true,
});

export const PLANS = {
  starter: {
    name: "Starter",
    monthly: {
      price: 9.99,
      priceId: process.env.STRIPE_PRICE_STARTER_MONTHLY!,
    },
    yearly: {
      price: 99,
      priceId: process.env.STRIPE_PRICE_STARTER_YEARLY!,
    },
    features: [
      "2 social platforms",
      "50 posts per month",
      "Basic scheduling",
      "Basic playbook insights",
      "Email support",
    ],
  },
  pro: {
    name: "Pro",
    popular: true,
    monthly: {
      price: 19.99,
      priceId: process.env.STRIPE_PRICE_PRO_MONTHLY!,
    },
    yearly: {
      price: 190,
      priceId: process.env.STRIPE_PRICE_PRO_YEARLY!,
    },
    features: [
      "5 social platforms",
      "250 posts per month",
      "AI Autopilot",
      "Smart scheduling",
      "Full playbook learning",
      "Content recycling",
      "Priority support",
    ],
  },
  business: {
    name: "Business",
    monthly: {
      price: 49.99,
      priceId: process.env.STRIPE_PRICE_BUSINESS_MONTHLY!,
    },
    yearly: {
      price: 490,
      priceId: process.env.STRIPE_PRICE_BUSINESS_YEARLY!,
    },
    features: [
      "Unlimited platforms",
      "Unlimited posts",
      "AI Autopilot",
      "Smart scheduling",
      "Full playbook learning",
      "Content recycling",
      "API access (27 endpoints)",
      "Webhook events with HMAC",
      "OpenClaw integration",
      "Dedicated support",
    ],
  },
} as const;

export type PlanKey = keyof typeof PLANS;
export type BillingInterval = "monthly" | "yearly";
