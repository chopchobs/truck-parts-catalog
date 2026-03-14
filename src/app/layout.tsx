import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "อู่ ช.รวมช่าง | รับซ่อมรถบรรทุก รถพ่วง สิบล้อ หล่มสัก",
  description: "บริการรับซ่อมรถขนาดใหญ่ทุกชนิด รถพ่วง สิบล้อ หกล้อ และจำหน่ายอะไหล่แท้ อะไหล่เทียบ ครบวงจร ที่ อ.หล่มสัก จ.เพชรบูรณ์",
  keywords: "ซ่อมรถบรรทุก, อู่ซ่อมรถ หล่มสัก, อะไหล่รถสิบล้อ, ช.รวมช่าง, เพชรบูรณ์",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gray-500  text-black min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
