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
  title: "Mye Farm",
  description:
    "Founder profile of Swosti Mishra, building a transparent, technology-enabled agricultural ecosystem through Myefarm — empowering farmers, FPOs, and rural enterprises across India.",
  keywords: [
    "Swosti Mishra",
    "Myefarm",
    "agritech founder",
    "farm to consumer",
    "Odisha",
    "farmer empowerment",
    "sustainable agriculture",
  ],
  openGraph: {
    title: "Swosti Mishra — Founder, Myefarm",
    description:
      "Building sustainable agri-value chains through technology. Empowering farmers, FPOs, and rural enterprises.",
    url: "https://mye.farm",
    siteName: "mye.farm",
    type: "profile",
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
      <body className="min-h-full antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
