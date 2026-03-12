import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-slate-900 overflow-hidden font-sans">
      {/* 1. ภาพพื้นหลัง (Background Image & Overlay) */}
     <div className="absolute inset-0">
        <img
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
        alt="Truck Parts Warehouse"
        className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
      </div>

      {/* 2. เนื้อหาหลัก (Main Content) */}
      <div className="relative z-10 container mx-auto px-4 py-20 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            C.RUAMCHANG: TRUCK SERVICES & PARTS
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            อู่ ช.รวมช่าง <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-300 text-3xl md:text-5xl">
              รับซ่อมรถบรรทุก รถพ่วง รถสิบล้อ
            </span>
          </h1>

          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl font-light">
            บริการรับซ่อมรถขนาดใหญ่ทุกชนิด และรับสั่งอะไหล่รถพ่วง สิบล้อ หกล้อ บริการด้วยใจและประสบการณ์ช่างมืออาชีพ
          </p>
                  
          {/* ปุ่ม Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#products" 
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-center transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group"
            >
              ดูสินค้าทั้งหมด
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-center backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              ติดต่อสอบถาม
            </Link>
          </div>
        </div>
      </div>

      {/* 3. แถบข้อมูลความน่าเชื่อถือ (Trust Indicators) ด้านล่าง */}
   {/* 3. แถบข้อมูลความน่าเชื่อถือ (Trust Indicators) ด้านล่าง */}
      <div className="relative z-10 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-white/10">
            
            {/* ช่อง 1: ประสบการณ์ (เปลี่ยนตัวเลขปีได้ตามจริงเลยครับ) */}
            <div className="px-4 hover:scale-105 transition-transform">
              <span className="block text-2xl font-black text-teal-400 mb-1">15+ ปี</span>
              <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">ประสบการณ์ซ่อมรถใหญ่</span>
            </div>
            
            {/* ช่อง 2: ความมั่นใจในงานซ่อม */}
            <div className="px-4 hover:scale-105 transition-transform">
              <span className="block text-2xl font-black text-teal-400 mb-1">100%</span>
              <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">ซ่อมจบตรงจุด ไม่บานปลาย</span>
            </div>
            
            {/* ช่อง 3: คุณภาพอะไหล่ */}
            <div className="px-4 hover:scale-105 transition-transform">
              <span className="block text-2xl font-black text-teal-400 mb-1">เกรด A</span>
              <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">อะไหล่แท้และทดแทนพรีเมียม</span>
            </div>
            
            {/* ช่อง 4: ความครบวงจร */}
            <div className="px-4 hover:scale-105 transition-transform">
              <span className="block text-2xl font-black text-teal-400 mb-1">ครบวงจร</span>
              <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">ช่วงล่าง เบรค เกียร์ งานตัวถัง</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}