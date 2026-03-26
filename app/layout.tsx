import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import BackgroundCanvas from "@/components/layout/BackgroundCanvas";
import { ClientAppWrapper } from "@/components/layout/ClientAppWrapper";
import QueryProvider from "@/components/app/QueryProvider";
import AuthProvider from "@/components/app/AuthProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Gold Trading | Premium Gold Trading Community",
  description:
    "Join 5,000+ traders accessing 8-10 daily gold signals with a verified 91% win rate. Professional-grade analysis, real results.",
  keywords: [
    "gold trading",
    "XAU/USD",
    "gold signals",
    "trading community",
    "precious metals",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
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
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased noise-overlay">
        <BackgroundCanvas />
        <QueryProvider>
          <AuthProvider>
            <ClientAppWrapper>{children}</ClientAppWrapper>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
