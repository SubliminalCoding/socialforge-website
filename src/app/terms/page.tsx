import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white overflow-hidden">
      <Background />
      <Nav />

      <article className="relative z-10 px-6 md:px-12 lg:px-20 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Terms of Service
        </h1>
        <p className="text-white/30 text-sm mb-12">
          Last updated: March 23, 2026
        </p>

        <div className="space-y-8 text-sm text-white/50 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using SocialForge (&quot;the Service&quot;), you
              agree to be bound by these Terms of Service. If you do not agree,
              do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Description of Service
            </h2>
            <p>
              SocialForge is a social media automation platform that allows users
              to create, schedule, and publish content across multiple social
              media platforms. The Service includes API access, webhook events,
              and integration with third-party tools such as OpenClaw.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Accounts and Registration
            </h2>
            <p>
              You must provide accurate information when creating an account. You
              are responsible for maintaining the security of your account
              credentials. You must notify us immediately of any unauthorized
              access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Subscriptions and Billing
            </h2>
            <p>
              Paid plans are billed monthly or annually as selected at checkout.
              All plans include a 14-day free trial. You will not be charged
              until the trial period ends. You may cancel at any time from your
              dashboard. Cancellation takes effect at the end of the current
              billing period.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Refund Policy
            </h2>
            <p>
              If you cancel within the 14-day trial, you will not be charged. For
              paid subscriptions, we offer a prorated refund within the first 7
              days of a billing period. After 7 days, no refund is provided but
              you retain access until the end of your billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Acceptable Use
            </h2>
            <p>
              You agree not to use the Service to publish spam, misleading
              content, hate speech, or content that violates the terms of any
              connected social media platform. We reserve the right to suspend
              accounts that violate this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. API Usage
            </h2>
            <p>
              API access is subject to rate limits based on your plan tier. API
              keys must be kept confidential. We reserve the right to revoke API
              access for abuse or excessive usage beyond plan limits.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              SocialForge is provided &quot;as is&quot; without warranties of any
              kind. We are not liable for any damages arising from your use of
              the Service, including but not limited to loss of data, revenue, or
              social media account access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Changes to Terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use of the
              Service after changes constitutes acceptance. We will notify users
              of material changes via email.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              10. Contact
            </h2>
            <p>
              For questions about these terms, contact us at
              support@socialforge.dev.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
