import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fast Marketing - Market Distribution & Digital Marketing Pakistan",
  description: "Leading marketing agency in Pakistan providing market distribution, digital marketing, and brand promotion services. Reach your target audience effectively across Pakistan.",
  keywords: "marketing agency Pakistan, market distribution, digital marketing, brand promotion, product marketing, Pakistan marketing services",
  authors: [{ name: "Fast Marketing" }],
  openGraph: {
    title: "Fast Marketing - Market Distribution & Digital Marketing Pakistan",
    description: "Leading marketing agency in Pakistan providing market distribution, digital marketing, and brand promotion services.",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
