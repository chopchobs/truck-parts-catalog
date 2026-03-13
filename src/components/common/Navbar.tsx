"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // 1. ดึงตัวช่วยเปลี่ยนหน้าเว็บมาใช้

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // 2. สร้างตัวเก็บคำค้นหา
  const router = useRouter();

  // 3. ฟังก์ชั่นเมื่อลูกค้ากด Enter หรือกดปุ่มค้นหา
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false); // ปิดเมนูมือถือเวลาค้นหาเสร็จ
    }
  };

  return (
    <header className="w-full font-sans shadow-sm sticky top-0 z-50">
      {/* 1. Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-[10px] sm:text-xs py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 hover:text-white transition-colors font-bold text-teal-400">
              📞 081 324 1382 (เฮีย/ช่าง)
            </span>
            <span className="hidden sm:flex items-center gap-1 hover:text-white transition-colors font-bold text-[#00B900]">
              💬 LINE ID: 0813241382
            </span>
          </div>
          <div className="flex gap-3">
            <Link href="/admin/login" className="hover:text-white transition-colors font-bold text-blue-400">
              เข้าสู่ระบบ Admin
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-8">
          
          {/* โลโก้ร้าน */}
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-700 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-teal-200/50">
              CR
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tighter leading-none">
                C.<span className="text-teal-600">RUAMCHANG</span>
              </h1>
              <p className="text-[9px] md:text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                Truck & Trailer Services
              </p>
            </div>
          </Link>

          {/* 💡 ช่องค้นหา (Desktop) - เปลี่ยนเป็น <form> */}
          {/* <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาด้วยชื่อ หรือ รหัสพาร์ท (Part Number)..." 
              className="w-full bg-slate-50 border border-slate-200 text-sm rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            />
            <button type="submit" className="absolute right-1 top-1 bottom-1 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full transition-colors flex items-center justify-center w-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </form> */}

          {/* เมนู & ปุ่มต่างๆ */}
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">หน้าแรก</Link>
            {/* <Link href="/products" className="hover:text-teal-600 transition-colors">หมวดหมู่สินค้า</Link> */}
            <Link href="/contact" className="hover:text-teal-600 transition-colors">ติดต่อเรา</Link>
          </div>

          {/* ปุ่ม Hamburger (Mobile) */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 3. Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-4 shadow-xl absolute w-full left-0">
          {/* 💡 ช่องค้นหา (Mobile) - เปลี่ยนเป็น <form> */}
          <form onSubmit={handleSearch} className="relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหารหัสพาร์ท..." 
              className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button type="submit" className="absolute right-3 top-3 text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </form>
          <nav className="flex flex-col gap-2 font-bold text-slate-600">
            <Link href="/" className="block p-3 bg-slate-50 rounded-xl">หน้าแรก</Link>
            <Link href="/products" className="block p-3 hover:bg-slate-50 rounded-xl">หมวดหมู่สินค้า</Link>
            <Link href="/contact" className="block p-3 hover:bg-slate-50 rounded-xl">ติดต่อเรา</Link>
          </nav>
        </div>
      )}
    </header>
  );
}