import { ReactScan } from "@/components/ReactScanComponent";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/app/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InnuxAI",
  description: "InnuxAI - The New Way to Manage Your Workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/innuxlogo.svg" type="image/svg+xml" />
      </head>
      <ReactScan />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
