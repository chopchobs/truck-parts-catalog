"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full shadow-md sticky top-0 z-50">
      {/* 1. Top Bar */}
      <div className="bg-slate-900 border-b border-slate-700 text-slate-300 text-[10px] sm:text-xs py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 hover:text-cyan-400 transition-colors font-bold text-cyan-500">
              📞 081 324 1382 (เฮีย/ช่าง)
            </span>
            <span className="hidden sm:flex items-center gap-1 hover:text-cyan-400 transition-colors font-bold text-[#00B900]">
              💬 LINE ID: 0813241382
            </span>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admin/login"
              className="hover:text-cyan-400 transition-colors font-bold text-slate-400"
            >
              เข้าสู่ระบบ Admin
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <div className="bg-blue-950 border-b-4 border-cyan-500">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* โลโก้ร้าน (Gear & Wrench Motif) */}
            <Link href="/" className="shrink-0 flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-600 to-blue-800 border-2 border-slate-300 text-white rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                {/* Gear/Wrench SVG Icon */}
                <svg
                  className="w-7 h-7"
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
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black text-white tracking-tight leading-none drop-shadow-md">
                  อู่ ช.<span className="text-cyan-500">รวมช่าง</span>
                </h1>
                <p className="text-[10px] md:text-[11px] font-bold text-slate-300 tracking-wider">
                  บริการด้วยใจ ใส่ใจทุกคัน
                </p>
              </div>
            </Link>

            {/* ปุ่ม Hamburger (Mobile) */}
            <button
              className="md:hidden p-2 text-cyan-400 bg-blue-900 rounded-lg border border-blue-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* เมนู & ปุ่มต่างๆ */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-200">
            <Link
              href="/"
              className="hover:text-cyan-400 transition-colors uppercase tracking-wide"
            >
              หน้าแรก
            </Link>
            <Link
              href="#Ourstory"
              className="hover:text-cyan-400 transition-colors uppercase tracking-wide"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              href="/contact"
              className="hover:text-cyan-400 transition-colors uppercase tracking-wide"
            >
              ติดต่อเรา
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full transition-all shadow-[0_0_10px_rgba(6,182,212,0.4)] border border-cyan-400 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              จองคิวซ่อม
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-950 border-t border-blue-800 px-4 py-4 space-y-2 shadow-xl absolute w-full left-0">
          <nav className="flex flex-col gap-2 font-bold text-slate-200">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-3 bg-blue-900 rounded-xl hover:text-cyan-400"
            >
              หน้าแรก
            </Link>
            <Link
              href="/#Ourstory"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-3 bg-blue-900 rounded-xl hover:text-cyan-400"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block p-3 bg-blue-900 rounded-xl hover:text-cyan-400"
            >
              ติดต่อเรา
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
