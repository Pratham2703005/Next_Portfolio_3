import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratham Israni - Full-Stack Developer & Innovation Builder",
  description: "SIH 2024 Finalist specializing in interactive web experiences. 600+ LeetCode problems solved. Building innovative solutions with React, Next.js, and modern web technologies. Available for full-stack developer roles.",
  keywords: "Full-Stack Developer, React Developer, Next.js, SIH 2024 Finalist, Competitive Programming, Web Development, JavaScript, TypeScript, Innovation, Interactive Web Experiences",
  authors: [{ name: "Pratham Israni" }],
  creator: "Pratham Israni",
  
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pratham-potfolio.vercel.app",
    title: "Pratham Israni - Full-Stack Developer & Innovation Builder",
    description: "SIH 2024 Finalist specializing in interactive web experiences. Building innovative solutions with modern web technologies.",
    siteName: "Pratham Israni Portfolio",
    images: [
      {
        url: "/profile1.jpg",
        width: 1200,
        height: 630,
        alt: "Pratham Israni - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Israni - Full-Stack Developer & Innovation Builder",
    description: "SIH 2024 Finalist specializing in interactive web experiences. Building innovative solutions with modern web technologies.",
    images: ["/profile1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen relative">
          <Navbar />
          <main className="flex-1 relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}