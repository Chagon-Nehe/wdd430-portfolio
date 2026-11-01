import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Chawanangwa Gondwe's personal portfolio website" />
      <title>Chawanangwa Gondwe Portfolio</title>
      <body className="flex flex-col min-h-screen intialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}






      
    
      
