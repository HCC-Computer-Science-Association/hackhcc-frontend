import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const rubikGlitch = localFont({
  src: "./fonts/RubikGlitch-Regular.ttf",
  variable: "--font-rubik-glitch",
  weight: "400",
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
      <head>
        <link rel="icon" href="/public/hackhcc-coderunners-logo.png" sizes="any" />
      </head>
     
      <body
        className={`antialiased ${rubikGlitch.variable}`}
      >
         <a id="mlh-trust-badge"   style={{
    display: 'block',
    maxWidth: '100px',
    minWidth: '60px',
    position: 'fixed',
    right: '50px',
    top: '0',
    width: '10%',
    zIndex: 10000,
  }} href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=gray" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-blue.svg" alt="Major League Hacking 2026 Hackathon Season" style={{width:"100%"}} /></a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
