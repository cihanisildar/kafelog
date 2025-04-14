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
  title: "KafeLog - Her Kesimin Lezzet Pusulası",
  description: "KafeLog'da her fincanda gelenek ve yeniliğin mükemmel uyumunu yaşayın.",
  icons: {
    icon: [
      {
        url: "/images/cafe_4859184.png",
        sizes: "32x32",
      },
    ],
    apple: {
      url: "/images/cafe_4859184.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${quicksand.className} overflow-x-hidden`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
