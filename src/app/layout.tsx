import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";
import CookieConsentWrapper from "./components/UI/CookieSettings";
import ScrollButton from "./components/UI/Scroll";
import PageTransitionHandler from "./components/layout/PageTransitionHandler";


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
