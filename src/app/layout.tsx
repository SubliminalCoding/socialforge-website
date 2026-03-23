import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SocialForge - Create Once, Publish Everywhere",
    template: "%s | SocialForge",
  },
  description:
    "The social media command center built for automation. Connect OpenClaw, plug in your API key, and let AI create, schedule, and publish content across every platform.",
  openGraph: {
    title: "SocialForge - Create Once, Publish Everywhere",
    description:
      "AI-powered social media automation. Create, schedule, and publish content across every platform.",
    siteName: "SocialForge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SocialForge - Create Once, Publish Everywhere",
    description:
      "AI-powered social media automation. Create, schedule, and publish content across every platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
