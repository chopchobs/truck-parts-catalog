import React from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      
      {/* 1. แถบเมนูด้านข้าง (Sidebar) */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-2xl z-10">
        {/* โลโก้แอดมิน */}
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-2xl font-black text-blue-400 tracking-tighter uppercase">Admin Panel</h2>
          <p className="text-xs text-slate-400 mt-1">ระบบจัดการหลังบ้าน</p>
        </div>

        {/* เมนูนำทาง */}
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">
            📊 สินค้าทั้งหมด (Dashboard)
          </Link>
          <Link href="/admin/add" className="block px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors text-sm font-bold shadow-lg shadow-blue-900/50">
            ➕ เพิ่มสินค้าใหม่
          </Link>
          <Link href="/admin/category" className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">
            📑 จัดการหมวดหมู่
          </Link>
        </nav>

        {/* ปุ่มกลับหน้าร้าน */}
        <div className="p-4 border-t border-slate-800">
          <Link href="/" className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm text-center text-slate-300 bg-slate-800 hover:text-white hover:bg-slate-700 rounded-xl transition-colors">
            🏠 กลับหน้าร้านค้า
          </Link>
        </div>
      </aside>

      {/* 2. พื้นที่เนื้อหาหลักด้านขวา */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* แถบด้านบน (Header) */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 shrink-0">
          <h1 className="text-lg font-bold text-slate-700">จัดการคลังสินค้า</h1>
          
          <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-slate-700 leading-none">แอดมิน ช็อป</p>
              <span className="text-[10px] text-green-500 font-bold uppercase">Online</span>
            </div>
            <div className="w-9 h-9 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
              C
            </div>
          </div>
        </header>
        
        {/* 3. เนื้อหาที่จะเปลี่ยนไปตาม URL (children) */}
        <div className="flex-1 overflow-auto p-8 bg-slate-50/50">
          {children}
        </div>
      </main>

    </div>
  );
}