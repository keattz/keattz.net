import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Bio from "@/components/Bio";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "keattz.net",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex flex-col gap-4">
          <Bio />
          <main className="container flex flex-col max-w-custom mx-auto px-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
