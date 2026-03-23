import Link from "next/link";
import { Zap, CheckCircle2, ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://quadposter.up.railway.app";

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white flex flex-col">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-950/40 rounded-full blur-[150px]" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-400" />
          <span className="text-xl font-bold tracking-tight text-white">
            SocialForge
          </span>
        </Link>
      </nav>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="inline-flex p-4 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            You&apos;re all set!
          </h1>
          <p className="text-white/40 mb-8 leading-relaxed">
            Your subscription is active. Head to the dashboard to connect your
            social accounts and start publishing.
          </p>
          <a
            href={`${APP_URL}/login`}
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
