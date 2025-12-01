import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

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
        <AuthProvider>
          {children}
        </AuthProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
