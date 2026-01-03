import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello Tailwind + Next.js (Bolt)",
  description: "Minimal Next.js + Tailwind starter for bolt.new"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
