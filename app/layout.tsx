import type { Metadata } from "next";
import { Geist, Geist_Mono,  Playfair_Display, Inter } from "next/font/google";
import Header from "./(component)/Header";
import Footer from "./(component)/Footer";
import "./globals.css";
import Copyright from "./(component)/Copyright";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yes-park-cafe.vercel.app"),
  title: "SLSU Yes Park Cafe",
  description: "Yes Park Cafe: An e-commerce website that let you buy, add cart, and pay online. It's a website that help users to order without being in the store.",
  alternates: { canonical: "https://yes-park-cafe.vercel.app" },
  openGraph: {
    title: "SLSU Yes Park Cafe",
    description: "Yes Park Cafe: An e-commerce website that let you buy, add cart, and pay online. It's a website that help users to order without being in the store.",
    url: "https://yes-park-cafe.vercel.app",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased flex min-h-screen flex-col`}
      >
        <Header />
        <main className="w-full flex-1">

            {children}

        </main>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
  
