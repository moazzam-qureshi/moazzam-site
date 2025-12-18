import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://moazzam.site'),
  title: {
    default: 'Moazzam Qureshi | AI Products for Entrepreneurs',
    template: '%s | Moazzam Qureshi'
  },
  description: 'Purpose-built AI agents and tools designed to help entrepreneurs focus, scale, and succeed. Starting with Clarilo AI for ADHD founders.',
  keywords: ['AI products', 'entrepreneur tools', 'ADHD productivity', 'AI assistant', 'focus tools', 'SaaS', 'AI agents', 'productivity software'],
  authors: [{ name: 'Moazzam Qureshi' }],
  creator: 'Moazzam Qureshi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moazzam.site',
    siteName: 'Moazzam Qureshi',
    title: 'Moazzam Qureshi | AI Products for Entrepreneurs',
    description: 'Purpose-built AI agents and tools designed to help entrepreneurs focus, scale, and succeed.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Moazzam Qureshi - AI Products'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moazzam Qureshi | AI Products for Entrepreneurs',
    description: 'Purpose-built AI agents and tools designed to help entrepreneurs focus, scale, and succeed.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
