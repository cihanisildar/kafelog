import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "KafeLog - Premium Kahve Deneyimi",
  description: "KafeLog'da her fincanda gelenek ve yeniliğin mükemmel uyumunu yaşayın.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  ;
}) {
  return (
    <html lang="tr">
      <body className={quicksand.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
