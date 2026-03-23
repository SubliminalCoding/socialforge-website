import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white overflow-hidden">
      <Background />
      <Nav />

      <article className="relative z-10 px-6 md:px-12 lg:px-20 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-white/30 text-sm mb-12">
          Last updated: March 23, 2026
        </p>

        <div className="space-y-8 text-sm text-white/50 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-white/70">Account information:</strong>{" "}
                Email address and name when you create an account.
              </li>
              <li>
                <strong className="text-white/70">Payment information:</strong>{" "}
                Processed securely by Stripe. We do not store your credit card
                details.
              </li>
              <li>
                <strong className="text-white/70">Social media tokens:</strong>{" "}
                OAuth tokens for connected platforms, encrypted with AES-256-GCM
                at rest.
              </li>
              <li>
                <strong className="text-white/70">Usage data:</strong> Content
                you create, scheduling preferences, and engagement metrics
                pulled from connected platforms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>To provide and maintain the Service</li>
              <li>To process payments and manage subscriptions</li>
              <li>To publish content to your connected social media accounts</li>
              <li>
                To generate analytics and playbook insights from your engagement
                data
              </li>
              <li>To send transactional emails (account, billing, alerts)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. Data Security
            </h2>
            <p>
              We take data security seriously. OAuth tokens are encrypted with
              AES-256-GCM at rest. API keys are hashed using bcrypt. All data is
              transmitted over HTTPS. We follow industry best practices for
              securing user data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. Third-Party Services
            </h2>
            <p className="mb-3">We integrate with the following third-party services:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-white/70">Stripe:</strong> Payment
                processing. See{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Stripe&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong className="text-white/70">Social media platforms:</strong>{" "}
                X, Facebook, LinkedIn, YouTube, TikTok. Each platform has its
                own privacy policy governing data accessed through their APIs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain your data for as long as your account is active. Upon
              account deletion, we remove your data within 30 days, except where
              retention is required by law or for legitimate business purposes
              (e.g., billing records).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a machine-readable format</li>
              <li>Withdraw consent for data processing at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. Cookies
            </h2>
            <p>
              We use essential cookies for authentication and session management.
              We do not use third-party tracking cookies or sell your data to
              advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We will notify
              you of material changes via email. Continued use of the Service
              after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              9. Contact
            </h2>
            <p>
              For questions about this privacy policy or to exercise your data
              rights, contact us at privacy@socialforge.dev.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}
