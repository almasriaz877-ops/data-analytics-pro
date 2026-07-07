import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Global styles
import { ThemeProvider } from "@/lib/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Data Analytics Pro | Elite Educational Blog, Projects & Guides",
  description: "The premium learning hub for Data Analytics. Explore high-quality Python, SQL, Excel, Power BI, and Tableau tutorials, portfolio projects, career roadmaps, and technical interview questions.",
  metadataBase: new URL("https://dataanalyticspro.edu"),
  openGraph: {
    title: "Data Analytics Pro - Learn Python, SQL, BI and Data Science",
    description: "The ultimate free learning platform featuring industry-standard guides, interactive career paths, interview secrets, and structured portfolio projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analytics Pro | Master the Data Stack",
    description: "Full career roadmaps, technical interview resources, and step-by-step SQL & Python projects.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={`${inter.variable} scroll-smooth`}
>
      <body suppressHydrationWarning className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          {/* Main content container with padding-top to compensate for sticky header */}
          <main id="main-content" className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

