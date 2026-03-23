import { NextRequest, NextResponse } from "next/server";
import { stripe, PLANS, PlanKey, BillingInterval } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { plan, interval } = (await req.json()) as {
      plan: PlanKey;
      interval: BillingInterval;
    };

    const selectedPlan = PLANS[plan];
    if (!selectedPlan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const priceId = selectedPlan[interval]?.priceId;
    if (!priceId) {
      return NextResponse.json({ error: "Invalid interval" }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
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
