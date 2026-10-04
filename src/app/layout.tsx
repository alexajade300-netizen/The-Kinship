import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#4B0C1B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kinshipeducation.com"),
  title: {
    default: "KINSHIP | Evidence-Led Parenting Education",
    template: "%s | KINSHIP",
  },
  description:
    "Practical, evidence-led parenting courses from pre-conception and pregnancy through newborn life, infancy, toddlerhood, and early childhood.",
  keywords: [
    "parenting education",
    "evidence-led parenting",
    "pregnancy course",
    "newborn care",
    "infant development",
    "toddler behavior",
    "early childhood",
    "pre-conception health",
  ],
  authors: [{ name: "KINSHIP" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kinshipeducation.com",
    siteName: "KINSHIP",
    title: "KINSHIP | Evidence-Led Parenting Education",
    description:
      "Practical, evidence-led parenting courses from pre-conception and pregnancy through newborn life, infancy, toddlerhood, and early childhood.",
    images: [
      {
        url: "/images/kinship-brand-assets.png",
        width: 983,
        height: 1024,
        alt: "KINSHIP Brand & Product Assets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KINSHIP | Evidence-Led Parenting Education",
    description:
      "Evidence-led guidance for every stage of parenthood. Learn, prepare, and grow with confidence.",
    images: ["/images/kinship-brand-assets.png"],
  },
  icons: {
    icon: "/images/kinship-logo.png",
    apple: "/images/kinship-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kinshipeducation.com/#organization",
        "name": "KINSHIP",
        "url": "https://kinshipeducation.com",
        "logo": "https://kinshipeducation.com/images/kinship-logo.png",
        "description": "Evidence-led guidance for every stage of parenthood.",
        "slogan": "Evidence-led guidance for every stage of parenthood.",
      },
      {
        "@type": "WebSite",
        "@id": "https://kinshipeducation.com/#website",
        "url": "https://kinshipeducation.com",
        "name": "KINSHIP",
        "publisher": {
          "@id": "https://kinshipeducation.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-full bg-[#F8F2E8] text-[#251C1E] selection:bg-[#F0E0E3] selection:text-[#4B0C1B]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
