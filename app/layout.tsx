import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "mye.farm — Centre of Excellence in Agritech",
  description:
    "Bridging farmers and consumers through technology, traceability, and trust. Building a food system that's fair, sustainable, and rooted in tradition.",
  keywords: [
    "agritech",
    "farm to consumer",
    "organic",
    "Odisha",
    "farmer empowerment",
    "sustainable agriculture",
  ],
  openGraph: {
    title: "mye.farm — Centre of Excellence in Agritech",
    description:
      "Empowering farmers. Nourishing communities. Transforming agriculture.",
    url: "https://mye.farm",
    siteName: "mye.farm",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
