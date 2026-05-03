import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.electriccircus.it"),
  title: {
    default: "Electric Circus",
    template: "%s · Electric Circus",
  },
  description:
    "Electric Circus — funk grooves, afrobeat, psychedelia. New single 'High Fever' on Killer Groove Records.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
