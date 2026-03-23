import {
  Zap,
  BarChart3,
  Bot,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle2,
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  Music2,
  Calendar,
  Send,
  Brain,
  Webhook,
  FileJson,
  Clock,
  TrendingUp,
  Lock,
  Layers,
} from "lucide-react";

const APP_URL = "https://quadposter.up.railway.app";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-950/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-[120px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-400" />
          <span className="text-xl font-bold tracking-tight text-white">
            SocialForge
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Log in
          </a>
          <a
            href={`${APP_URL}/login`}
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 pt-20 pb-32 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
          <Bot className="h-3.5 w-3.5 text-blue-400" />
          <span className="text-xs text-white/50 font-medium">
            Powered by OpenClaw -- plug in your API key and let AI run your
            socials
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
          <span className="text-white">Create once.</span>
          <br />
          <span className="text-blue-400">Publish everywhere.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed">
          The social media command center built for automation. Connect OpenClaw,
          plug in your API key, and let AI create, schedule, and publish content
          across every platform while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={`${APP_URL}/login`}
            className="group flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            Start Building
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all"
          >
            See Features
          </a>
        </div>

        {/* Platform icons */}
        <div className="flex items-center justify-center gap-6 opacity-30">
          <Twitter className="h-6 w-6" />
          <Facebook className="h-6 w-6" />
          <Linkedin className="h-6 w-6" />
          <Youtube className="h-6 w-6" />
          <Music2 className="h-6 w-6" />
        </div>
      </section>

      {/* Social proof bar */}
      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.015]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-white/35">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>5 platforms supported</span>
          </div>
          <div className="flex items-center gap-2">
            <Webhook className="h-4 w-4" />
            <span>27 API endpoints</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Encrypted at rest</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4" />
            <span>Bot-native architecture</span>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section
        id="features"
        className="relative z-10 px-6 md:px-12 lg:px-20 py-28 max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Everything you need to
            <span className="text-blue-400"> dominate social</span>
          </h2>
          <p className="text-white/35 text-lg max-w-xl mx-auto">
            From content creation to performance analytics, SocialForge handles
            the entire pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: Layers,
              title: "Multi-Platform Publishing",
              description:
                "Create content once with live previews for each platform. Auto-format and truncate to fit character limits.",
            },
            {
              icon: Calendar,
              title: "Smart Scheduling",
              description:
                "Bulk schedule with presets or let the AI pick optimal times based on your historical performance data.",
            },
            {
              icon: Bot,
              title: "AI Autopilot",
              description:
                "Self-improving content engine. Learns from your winners, generates drafts, and evolves its playbook daily.",
            },
            {
              icon: BarChart3,
              title: "Engagement Scoring",
              description:
                "Weighted scoring that values replies 3x over likes. Know exactly which posts drive real engagement.",
            },
            {
              icon: Brain,
              title: "Playbook Learning",
              description:
                "Extracts winning hooks, best CTAs, top tags, and optimal posting times from your real data. Gets smarter every day.",
            },
            {
              icon: FileJson,
              title: "API-First Design",
              description:
                "27 REST endpoints with API key auth. Built as a hub for OpenClaw, Clawbot, or any automation you connect.",
            },
            {
              icon: Webhook,
              title: "Webhook Events",
              description:
                "Get notified on publish, fail, approve, or autopilot complete. Slack, Discord, or any URL with HMAC signing.",
            },
            {
              icon: Lock,
              title: "Security Built In",
              description:
                "OAuth tokens encrypted with AES-256-GCM. API keys hashed. Content safety filter before auto-publish.",
            },
            {
              icon: TrendingUp,
              title: "Content Recycling",
              description:
                "Auto-resurface your top performers after they cool down. Stop leaving engagement on the table.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-2.5 rounded-xl bg-white/[0.05] mb-4">
                <feature.icon className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-base font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-28 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            The content
            <span className="text-blue-400"> flywheel</span>
          </h2>
          <p className="text-white/35 text-lg max-w-xl mx-auto">
            A self-improving loop that gets smarter with every post.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Create",
              description:
                "Write or let AI generate drafts from your playbook. Review in the queue.",
              icon: Send,
            },
            {
              step: "02",
              title: "Publish",
              description:
                "Schedule optimally or publish instantly to X, Facebook, and more.",
              icon: Clock,
            },
            {
              step: "03",
              title: "Measure",
              description:
                "Pull real engagement metrics. Score every post with weighted signals.",
              icon: BarChart3,
            },
            {
              step: "04",
              title: "Learn",
              description:
                "Playbook updates automatically. Winning hooks, CTAs, and patterns feed back into creation.",
              icon: Brain,
            },
          ].map((item, i) => (
            <div key={item.step} className="relative text-center">
              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}
              <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 border border-blue-500/15 mb-4">
                <item.icon className="h-6 w-6 text-blue-400" />
              </div>
              <p className="text-xs text-white/25 font-mono mb-1">
                {item.step}
              </p>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-white/35">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* API section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-6">
              <Zap className="h-3 w-3 text-blue-400" />
              <span className="text-xs text-white/50 font-medium">
                Built for bots
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              An API that your
              <span className="text-blue-400"> agents love</span>
            </h2>
            <p className="text-white/35 mb-8 leading-relaxed">
              27 endpoints designed for automation. JSON everywhere, meaningful
              error codes, structured responses. Connect OpenClaw, build custom
              pipelines, or integrate with Zapier via webhooks.
            </p>
            <ul className="space-y-3">
              {[
                "Full pipeline status in one GET call",
                "Batch import up to 100 posts",
                "AI rewriter adapts tone per platform",
                "Smart scheduling from playbook data",
                "Content recycling resurfaces winners",
                "Webhook events with HMAC signatures",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/50"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-950/30 rounded-3xl blur-xl" />
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0b0c11] p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <span className="text-white/15 text-xs ml-2">terminal</span>
              </div>
              <pre className="text-white/50 leading-relaxed overflow-x-auto">
                <code>{`$ curl /api/v1/status -H "x-api-key: qp_..."

{
  "pipeline": {
    "queued": 3,
    "approved": 7,
    "scheduled": 12,
    "published": 284
  },
  "performance_7d": {
    "avg_score": 0.0412,
    "winners": 8,
    "total_impressions": 142800
  },
  "hints": [
    "7 posts approved but not scheduled."
  ]
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* OpenClaw Integration */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-28 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 mb-6">
                <Bot className="h-3 w-3 text-blue-400" />
                <span className="text-xs text-blue-400 font-medium">
                  OpenClaw Integration
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                Full autopilot with
                <span className="text-blue-400"> OpenClaw</span>
              </h2>
              <p className="text-white/40 mb-6 leading-relaxed">
                SocialForge is built from the ground up as the publishing layer
                for OpenClaw. Connect your API key once and OpenClaw handles
                everything: generating content that matches your brand voice,
                scheduling posts at optimal times, and publishing across all your
                connected social accounts automatically.
              </p>
              <p className="text-white/40 mb-8 leading-relaxed">
                You review and approve from the queue when you want to, or turn
                on auto-approve and let the whole pipeline run hands-free.
                SocialForge tracks what performs, feeds the data back to
                OpenClaw, and your content gets smarter every day.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Connect once, automate forever",
                    detail:
                      "Add your SocialForge API key to OpenClaw. That's it. Posts start flowing into your queue automatically.",
                  },
                  {
                    title: "Every platform, one pipeline",
                    detail:
                      "OpenClaw creates the content, SocialForge formats it for X, Facebook, LinkedIn, and publishes to each with the right tone and character limits.",
                  },
                  {
                    title: "Smart scheduling on autopilot",
                    detail:
                      "Posts get scheduled at your best-performing times based on real engagement data. No manual time-picking needed.",
                  },
                  {
                    title: "Human-in-the-loop when you want it",
                    detail:
                      "Auto-approve everything, or review each post before it goes live. Your call, changeable anytime.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/35 mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bg-blue-950/20 p-10 md:p-14 flex flex-col justify-center border-l border-white/[0.06]">
              <h3 className="text-sm font-medium text-white/50 mb-6 uppercase tracking-wider">
                How it works
              </h3>
              <div className="space-y-6">
                {[
                  {
                    num: "1",
                    title: "Connect your accounts",
                    detail:
                      "Link X, Facebook, LinkedIn, and more through OAuth. Takes 30 seconds per platform.",
                  },
                  {
                    num: "2",
                    title: "Generate an API key",
                    detail:
                      "Go to Settings, create an API key. Paste it into your OpenClaw config.",
                  },
                  {
                    num: "3",
                    title: "OpenClaw takes over",
                    detail:
                      "OpenClaw reads your brand context, generates posts, and pushes them through the SocialForge API. Posts land in your queue or publish automatically.",
                  },
                  {
                    num: "4",
                    title: "Watch it compound",
                    detail:
                      "SocialForge pulls real metrics, scores every post, and updates the playbook. OpenClaw uses that data to write better content next time.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">
                      {item.num}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/35 mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl border border-white/[0.06] bg-[#0b0c11] font-mono text-xs text-white/40">
                <p className="text-white/20 mb-2"># OpenClaw config</p>
                <p>
                  socialforge_api_key:{" "}
                  <span className="text-blue-400">
                    &quot;qp_your_key_here&quot;
                  </span>
                </p>
                <p>
                  socialforge_url:{" "}
                  <span className="text-blue-400">
                    &quot;https://your-app.railway.app&quot;
                  </span>
                </p>
                <p>
                  auto_approve:{" "}
                  <span className="text-blue-400">true</span>
                </p>
                <p>
                  platforms:{" "}
                  <span className="text-blue-400">
                    [&quot;x&quot;, &quot;facebook&quot;, &quot;linkedin&quot;]
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 md:px-12 lg:px-20 py-28 max-w-4xl mx-auto text-center">
        <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-12 md:p-16 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-950/40 rounded-full blur-[120px]" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Ready to automate your
              <span className="text-blue-400"> content engine</span>?
            </h2>
            <p className="text-white/35 text-lg mb-8 max-w-lg mx-auto">
              Connect OpenClaw, add your API key, and let your entire social
              media pipeline run on autopilot.
            </p>
            <a
              href={`${APP_URL}/login`}
              className="group inline-flex items-center gap-2 px-10 py-4 text-base font-medium rounded-xl bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
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
            <a
              href={`${APP_URL}/api-docs`}
              className="hover:text-white/50 transition-colors"
            >
              API Docs
            </a>
            <a
              href={`${APP_URL}/login`}
              className="hover:text-white/50 transition-colors"
            >
              Dashboard
            </a>
          </div>
          <p className="text-xs text-white/15">
            Built for builders who ship.
          </p>
        </div>
      </footer>
    </div>
  );
}
