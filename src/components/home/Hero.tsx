import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-blue-950 overflow-hidden">
      {/* 1. ภาพพื้นหลัง (Background Image & Overlay) */}
      <div className="absolute inset-0">
        <img
          src="/images/Photo-cover.jpeg"
          alt="Heavy Duty Truck Repair Garage"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay: Deep Navy to Cyan */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-950/80 to-cyan-500/50"></div>
      </div>

      {/* 2. เนื้อหาหลัก (Main Content) */}
      <div className="relative z-10 container mx-auto px-4 py-20 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
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
            บริการด้วยใจ ใส่ใจทุกคัน
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] mb-6 tracking-tight drop-shadow-lg">
            อู่ ช.รวมช่าง <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-sky-300">
              รับซ่อม รถบรรทุก รถพ่วง รถสิบล้อ รถขนาดใหญ่
            </span>
          </h1>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-md border border-slate-300/30 backdrop-blur-sm">
              <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
              <span className="text-white text-xs font-bold">
                คุณภาพมาตรฐาน
              </span>
            </div>
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-md border border-slate-300/30 backdrop-blur-sm">
              <span className="text-cyan-400 text-sm font-black">✓</span>
              <span className="text-white text-xs font-bold">ช่างมืออาชีพ</span>
            </div>
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-md border border-slate-300/30 backdrop-blur-sm">
              <span className="text-cyan-400 text-sm font-black">✓</span>
              <span className="text-white text-xs font-bold">
                บริการรวดเร็ว
              </span>
            </div>
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-md border border-slate-300/30 backdrop-blur-sm">
              <span className="text-cyan-400 text-sm font-black">✓</span>
              <span className="text-white text-xs font-bold">
                ราคาเป็นกันเอง
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-8 bg-blue-900/60 w-fit px-5 py-3 rounded-xl backdrop-blur-md border border-slate-400/30 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <svg
              className="w-7 h-7 text-cyan-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span className="text-lg md:text-xl font-bold text-slate-100 tracking-wide">
              พิกัด:{" "}
              <span className="text-cyan-400">อ.หล่มสัก จ.เพชรบูรณ์</span>
            </span>
          </div>

          {/* ปุ่ม Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#Services"
              className="px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-center transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 group border border-cyan-400"
            >
              ดูบริการของเรา
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-300/40 font-bold text-center backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              ติดต่ออู่ / แผนที่
            </Link>
          </div>
        </div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.1,192.27,110.1,235.9,101.05,279.24,78.5,321.39,56.44Z"
            className="fill-slate-50"
          ></path>
        </svg>
      </div>
    </div>
  );
}
