import { NextRequest, NextResponse } from "next/server";
import { stripe, PLANS, PlanKey, BillingInterval } from "@/lib/stripe";

const VALID_PLANS: PlanKey[] = ["starter", "pro", "business"];
const VALID_INTERVALS: BillingInterval[] = ["monthly", "yearly"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, interval } = body as { plan: string; interval: string };

    if (!VALID_PLANS.includes(plan as PlanKey)) {
      return NextResponse.json(
        { error: "Invalid plan. Must be one of: starter, pro, business" },
        { status: 400 }
      );
    }

    if (!VALID_INTERVALS.includes(interval as BillingInterval)) {
      return NextResponse.json(
        { error: "Invalid interval. Must be monthly or yearly" },
        { status: 400 }
      );
    }

    const selectedPlan = PLANS[plan as PlanKey];
    const priceId = selectedPlan[interval as BillingInterval]?.priceId;

    if (!priceId || priceId === "price_xxxxx") {
      return NextResponse.json(
        { error: "Price not configured. Please contact support." },
        { status: 500 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      allow_promotion_codes: true,
      subscription_data: {
        trial_period_days: 14,
      },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      metadata: {
        plan,
        interval,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
