import React from 'react';
import Navbar from '@/src/components/common/Navbar';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />

      {/* แบนเนอร์หัวข้อ */}
      <div className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-5 uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-300">
            ติดต่อ อู่ ช.รวมช่าง
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            สอบถามอะไหล่ ปรึกษาอาการรถเสีย หรือนัดหมายคิวซ่อม <br className="hidden sm:block"/>
            ทีมช่างผู้เชี่ยวชาญของเราพร้อมให้บริการคุณเสมอ
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-12 flex-1">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          
          {/* ฝั่งซ้าย: ข้อมูลการติดต่อ */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-teal-700 text-white">
            <h2 className="text-2xl font-bold mb-8">ช่องทางการติดต่อ</h2>
            
            <div className="space-y-8">
              {/* เบอร์โทร */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-teal-200 text-sm font-bold mb-1">โทรศัพท์ (เฮีย/ช่าง)</p>
                  <a href="tel:0813241382" className="text-2xl font-black hover:text-teal-200 transition-colors">
                    081 324 1382
                  </a>
                </div>
              </div>

              {/* LINE */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  💬
                </div>
                <div>
                  <p className="text-teal-200 text-sm font-bold mb-1">LINE Official</p>
                  <a href="https://line.me/ti/p/~0813241382" target="_blank" rel="noreferrer" className="text-2xl font-black hover:text-[#00B900] transition-colors">
                    ID: 0813241382
                  </a>
                </div>
              </div>

              {/* ที่อยู่ (อัปเดตตาม Google Maps) */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-teal-200 text-sm font-bold mb-1">ที่ตั้งอู่</p>
                  <p className="text-lg font-medium leading-relaxed">
                    อู่ ช.รวมช่าง หล่มสัก<br />
                    33/5 ต.หนองไขว่<br />
                    อ.หล่มสัก จ.เพชรบูรณ์ 67110
                  </p>
                </div>
              </div>

              {/* เวลาทำการ (อัปเดตตาม Google Maps) */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  🕒
                </div>
                <div>
                  <p className="text-teal-200 text-sm font-bold mb-1">เวลาทำการ</p>
                  <p className="text-lg font-medium">จันทร์ - เสาร์<br/>08:30 - 17:30 น.<br/><span className="text-teal-300 text-sm">(ปิดวันอาทิตย์)</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* ฝั่งขวา: แผนที่ Google Maps แบบฝังพิกัดจริง */}
          <div className="w-full md:w-1/2 min-h-1-100 bg-slate-200 relative">
            <iframe 
              src="https://maps.google.com/maps?q=อู่+ช.รวมช่าง+หล่มสัก&hl=th&z=15&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </div>
    </main>
  );
}