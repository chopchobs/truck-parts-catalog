import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 font-sans border-t-4 border-teal-600 pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* ส่วนบนของ Footer: แบ่ง 4 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* คอลัมน์ 1: โลโก้และข้อมูลร้าน */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 ">
              <div className="w-10 h-10 bg-teal-700 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg">
                CR
              </div>
              <div>
                <h2 className="text-xl font-black text-white tracking-tighter leading-none">
                  C.<span className="text-teal-500">RUAMCHANG</span>
                </h2>
                <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                  Truck & Trailer Services
                </p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mt-4 font-light">
              อู่ ช.รวมช่าง ศูนย์รับซ่อมรถบรรทุก รถพ่วง รถสิบล้อ และจำหน่ายอะไหล่คุณภาพสูง บริการด้วยใจและประสบการณ์ช่างมืออาชีพ
            </p>
          </div>

          {/* คอลัมน์ 2: เมนูนำทาง (Quick Links) */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">เมนูด่วน</h3>
            <ul className="space-y-3 text-slate-400 text-sm font-light">
              <li><Link href="/" className="hover:text-teal-400 transition-colors">หน้าแรก</Link></li>
              <li><Link href="/products" className="hover:text-teal-400 transition-colors">แคตตาล็อกสินค้า</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">ติดต่อเรา / แผนที่อู่</Link></li>
            </ul>
          </div>

          {/* คอลัมน์ 3: บริการของเรา */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">บริการหลัก</h3>
            <ul className="space-y-3 text-slate-400 text-sm font-light">
              <li className="flex items-center gap-2"><span className="text-teal-500">▸</span> ซ่อมช่วงล่าง / พวงมาลัย</li>
              <li className="flex items-center gap-2"><span className="text-teal-500">▸</span> ระบบเกียร์ / เครื่องยนต์</li>
              <li className="flex items-center gap-2"><span className="text-teal-500">▸</span> ระบบเบรค</li>
              <li className="flex items-center gap-2"><span className="text-teal-500">▸</span> เปลี่ยนถ่ายน้ำมันเครื่อง</li>
              <li className="flex items-center gap-2"><span className="text-teal-500">▸</span> งานตัวถัง</li>
            </ul>
          </div>

          {/* คอลัมน์ 4: ข้อมูลติดต่อ */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">ติดต่ออู่</h3>
            <ul className="space-y-4 text-slate-400 text-sm font-light">
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span>33/5 ต.หนองไขว่<br/>อ.หล่มสัก จ.เพชรบูรณ์ 67110</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a href="tel:0813241382" className="hover:text-teal-400 transition-colors font-bold text-white">081 324 1382</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">💬</span>
                <a href="https://line.me/ti/p/~0813241382" target="_blank" className="hover:text-[#00B900] transition-colors font-bold text-white">LINE ID: 0813241382</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ส่วนล่างสุด: ลิขสิทธิ์ */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-light">
            &copy; {new Date().getFullYear()} C. RUAMCHANG (อู่ ช.รวมช่าง). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
            <Link href="/admin" className="hover:text-teal-400 transition-colors">Admin Login</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}