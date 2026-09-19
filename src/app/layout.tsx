import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bayusedana26.github.io"),
  title: "Bayu Sedana | Software & Data Specialist",
  description:
    "IT professional with 5+ years of experience across software engineering, data analytics, project management, and corporate technical training.",
  keywords: [
    "Bayu Sedana",
    "IT Professional",
    "Software Development",
    "Data Analytics",
    "Project Management",
    "Python",
    "SQL",
    "Technical Mentor",
    "Data Analyst",
  ],
  authors: [{ name: "Bayu Sedana", url: "https://github.com/bayusedana26" }],
  creator: "Bayu Sedana",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: "https://bayusedana26.github.io",
    siteName: "Bayu Sedana | Software & Data Specialist",
    title: "Bayu Sedana | Software & Data Specialist",
    description:
      "IT professional specializing across software engineering, data analytics, project management, and corporate technical training.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayu Sedana | Software & Data Specialist",
    description:
      "IT professional specializing across software engineering, data analytics, project management, and corporate technical training.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bayu Sedana",
    jobTitle: "IT Professional & Technical Consultant",
    url: "https://bayusedana26.github.io",
    sameAs: [
      "https://github.com/bayusedana26",
      "https://www.linkedin.com/in/bayusedana/",
      "https://public.tableau.com/app/profile/bayusedana/vizzes",
    ],
    knowsAbout: [
      "Software Development",
      "Data Analytics",
      "Python",
      "SQL",
      "Tableau",
      "Business Intelligence",
      "Technical Mentoring",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
