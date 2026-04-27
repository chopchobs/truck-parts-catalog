import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 border-t-8 border-slate-300 pt-16 pb-8 relative overflow-hidden">
      {/* subtle background accents */}
      <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-rfrom-transparent via-cyan-500 to-transparent opacity-50"></div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* ส่วนบนของ Footer: แบ่ง 4 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* คอลัมน์ 1: โลโก้และข้อมูลร้าน */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-600 to-blue-800 border-2 border-slate-300 text-white rounded-xl flex items-center justify-center shadow-md">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-black text-white tracking-tighter leading-none">
                  อู่ ช.<span className="text-cyan-500">รวมช่าง</span>
                </h2>
                <p className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">
                  บริการด้วยใจ ใส่ใจทุกคัน
                </p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              ศูนย์รับซ่อมรถบรรทุก รถพ่วง รถสิบล้อ และจำหน่ายอะไหล่คุณภาพสูง
              บริการมาตรฐานด้วยเครื่องมือทันสมัยและช่างมืออาชีพ
            </p>
          </div>

          {/* คอลัมน์ 2: เมนูนำทาง (Quick Links) */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-slate-800 pb-2 inline-block">
              เมนูด่วน
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-600">›</span> หน้าแรก
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/products"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-600">›</span> แคตตาล็อกสินค้า
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-600">›</span> ติดต่อเรา / แผนที่อู่
                </Link>
              </li>
            </ul>
          </div>

          {/* คอลัมน์ 3: บริการของเรา */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-slate-800 pb-2 inline-block">
              บริการหลัก
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-cyan-500">›</span> พวงมาลัย / ช่วงล่าง
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-500">›</span> ชุดเกียร์
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-500">›</span> งานตัวถัง
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-500">›</span> เบรก
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-500">›</span>{" "}
                เปลี่ยนถ่ายน้ำมันเครื่อง
              </li>
            </ul>
          </div>

          {/* คอลัมน์ 4: ข้อมูลติดต่อ */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-slate-800 pb-2 inline-block">
              ติดต่ออู่
            </h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3 bg-blue-900/40 p-3 rounded-lg border border-slate-700">
                <span className="text-xl">📍</span>
                <span>
                  33/5 ต.หนองไขว่
                  <br />
                  อ.หล่มสัก จ.เพชรบูรณ์ 67110
                </span>
              </li>

              {/* Contact Badge Style in Footer */}
              <li className="bg-white rounded-lg p-3 border-2 border-slate-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-950 text-cyan-400 rounded-full flex items-center justify-center text-sm">
                    📞
                  </div>
                  <a
                    href="tel:0813241382"
                    className="text-lg font-black text-blue-950 hover:text-cyan-600 transition-colors"
                  >
                    081 324 1382
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#00B900] text-white rounded-full flex items-center justify-center text-sm">
                    💬
                  </div>
                  <a
                    href="https://line.me/ti/p/~0813241382"
                    target="_blank"
                    className="text-lg font-black text-blue-950 hover:text-[#00B900] transition-colors"
                  >
                    081 324 1382
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ส่วนล่างสุด: ลิขสิทธิ์ */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} C. RUAMCHANG (อู่ ช.รวมช่าง). All
            rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
            <Link
              href="/admin"
              className="hover:text-cyan-400 transition-colors"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
