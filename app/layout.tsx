import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge — Less Windows. More winning.",
  description: "Forge tunes your PC for competitive games in one click. Measured, reversible, built for players who count milliseconds. $11/month. Cancel anytime.",
  keywords: "PC optimization, gaming performance, FPS boost, Windows tweaks, competitive gaming, system tuning",
  authors: [{ name: "Forge" }],
  metadataBase: new URL("https://forge.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forge.app",
    title: "Forge — Less Windows. More winning.",
    description: "Forge tunes your PC for competitive games in one click. +23 fps measured. $11/month.",
    siteName: "Forge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Forge - PC performance tuning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge — Less Windows. More winning.",
    description: "PC performance tuning for competitive gamers. +23 fps. $11/month.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://forge.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
