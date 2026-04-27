import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin", "thai"],
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
      <body className={`${kanit.className} antialiased bg-slate-50 text-slate-900`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
