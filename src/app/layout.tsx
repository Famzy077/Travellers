import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/layout/header";
import Footer from "./components/layout/header";
import "./globals.css";
import CookieConsentWrapper from "./components/ui/cookieSettings";
import ScrollButton from "./components/ui/scroll";
import PageTransitionHandler from "./components/layout/pageTransitionHandler";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travisa",
  description: "Travisa Travel Agent Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <PageTransitionHandler/>
        {children}
        <Footer/>
        <ScrollButton/>
        <CookieConsentWrapper/>
      </body>
    </html>
  );
}
