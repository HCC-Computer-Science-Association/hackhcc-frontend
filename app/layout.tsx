import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interceptor = localFont({
  src: [
    {
      path: "./fonts/Interceptor.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Interceptor Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Interceptor Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Interceptor Bold Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-interceptor",
});

const rovelink = localFont({
  src: "./fonts/Rovelink.otf",
  variable: "--font-rovelink",
});

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
        className={`${interceptor.variable} ${rovelink.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
