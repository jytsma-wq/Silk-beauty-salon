import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Award-Winning Aesthetic Clinic in London | Harley Street Injectables",
  description: "London's leading non-surgical aesthetic clinic at 106 Harley Street. Harley Street Injectables brings together world-class practitioners, cutting-edge treatments & luxury care to enhance your natural beauty with precision & confidence.",
  keywords: ["aesthetic clinic", "botox", "dermal fillers", "laser treatments", "skin treatments", "Harley Street", "London", "cosmetic clinic"],
  authors: [{ name: "Harley Street Injectables" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Award-Winning Aesthetic Clinic in London | Harley Street Injectables",
    description: "London's leading non-surgical aesthetic clinic at 106 Harley Street.",
    url: "https://www.harleystreetinjectables.com",
    siteName: "Harley Street Injectables",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Award-Winning Aesthetic Clinic in London | Harley Street Injectables",
    description: "London's leading non-surgical aesthetic clinic at 106 Harley Street.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased bg-background text-foreground`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
