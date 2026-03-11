import React from 'react';
import Link from 'next/link';

export default function Ourstory() {
  return (
    <section className="bg-white py-20 px-4 font-sans border-t border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* ฝั่งซ้าย: รูปภาพและกราฟิก */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-blue-50/80 rounded-3xl transform -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop"
              alt="ช่างซ่อมรถบรรทุกผู้เชี่ยวชาญ"
              className="relative rounded-2xl shadow-xl object-cover h-112.5 w-full border border-slate-100"
            />
            {/* กล่องตัวเลขประสบการณ์ลอยๆ (Floating Badge) */}
            <div className="absolute -bottom-6 -right-4 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl hidden md:block border border-slate-700">
              <span className="block text-4xl font-black mb-1 text-blue-400">15+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Years Experience</span>
            </div>
          </div>

          {/* ฝั่งขวา: เนื้อหาและข้อความ */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-4 uppercase">
                เพื่อนแท้ของ <span className="text-blue-600">คนสิบล้อ</span>
              </h2>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              เราเข้าใจดีว่า "รถบรรทุก" คือหัวใจหลักในการขับเคลื่อนธุรกิจของคุณ ทุกนาทีที่รถต้องจอดซ่อมหมายถึงต้นทุนที่สูญเสียไป
              ไม่ว่าคุณจะดูแลฟลีทรถหัวลากขนาดใหญ่ หรือเป็นเจ้าของรถสายลุยอย่างตระกูล <strong className="text-slate-800">500 Series Dominator</strong> เราพร้อมเคียงข้างด้วยอะไหล่คุณภาพที่คุณวางใจได้
            </p>

            <div className="space-y-6">
              {/* ข้อ 1: อะไหล่แท้ */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm border border-blue-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">อะไหล่แท้ & ทดแทนเกรดพรีเมียม</h3>
                  <p className="text-sm text-slate-500">คัดสรรเฉพาะแบรนด์ชั้นนำ ได้มาตรฐาน OEM อายุการใช้งานยาวนาน คุ้มค่าทุกกิโลเมตร</p>
                </div>
              </div>

              {/* ข้อ 2: จัดส่งไว */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm border border-blue-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">เช็กสต็อกเรียลไทม์ จัดส่งด่วน</h3>
                  <p className="text-sm text-slate-500">ลดระยะเวลารอคอยให้สั้นที่สุด ด้วยระบบคลังสินค้าออนไลน์ สั่งปุ๊บรู้ผลปั๊บ พร้อมจัดส่งทั่วประเทศ</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <Link href="/about" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors group">
                อ่านเรื่องราวทั้งหมดของเรา
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}