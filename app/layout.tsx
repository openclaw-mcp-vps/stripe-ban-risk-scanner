import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Ban Risk Scanner — Know Before You're Banned",
  description: "Analyze your business model and website against Stripe's Terms of Service. Get an AI-powered risk score and actionable fixes before Stripe shuts you down."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9979c384-7d4d-4125-8809-16845e55bb7c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
