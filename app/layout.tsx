import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EasterEgg from "@/components/EasterEgg";
import SoundEffects from "@/components/SoundEffects";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { metadata as seoMetadata, generateStructuredData } from "@/components/SEO";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();
  
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <LanguageProvider>
          <EasterEgg />
          <SoundEffects />
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
