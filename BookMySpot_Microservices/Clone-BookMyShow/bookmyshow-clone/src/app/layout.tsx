import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CityModal } from "@/components/layout/CityModal";
import { CityProvider } from "@/context/city-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookMyShow - Movie Tickets, Shows, Sports, Events & Cinemas",
  description: "Book movie tickets, events, plays, concerts, and sports tickets online. Get offers and exclusive deals on BookMyShow for your favorite events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CityProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <CityModal />
        </CityProvider>
      </body>
    </html>
  );
}
