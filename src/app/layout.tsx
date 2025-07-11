import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
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
          <script type="text/javascript">
            {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/687167fc5795e1190e42b04c/1ivtfsd62';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();`}
          </script>
        {children}
        <Footer/>
        <ScrollButton/>
        <CookieConsentWrapper/>
      </body>
    </html>
  );
}
