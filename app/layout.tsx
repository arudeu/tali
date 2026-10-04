import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components/loader";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Tali | Wedding invitation websites",
  description: "Tali designs wedding invitation websites. Choose a template or get a custom design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased">
        <Loader>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Loader>
      </body>
    </html>
  );
}
