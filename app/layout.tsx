import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";




export const metadata: Metadata = {
  title: "HackHCC: CodeRunners",
  description: "April 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
