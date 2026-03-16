import React from 'react';
import Link from 'next/link';

export default function Ourstory() {
  return (
    <section id='Ourstory' className="bg-white py-24 px-4 font-sans scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* ฝั่งซ้าย: รูปภาพสไตล์มินิมอล */}
          <div className="w-full lg:w-1/2 relative">
            {/* กรอบสีตกแต่งด้านหลัง */}
            <div className="absolute -inset-4 bg-teal-50/80 rounded-3xl transform -rotate-2 transition-transform hover:rotate-0 duration-500"></div>
            <img
              // src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=2070&auto=format&fit=crop"
              src='/images/Goboli.jpg'
              alt="ช่างซ่อมรถบรรทุกผู้เชี่ยวชาญ อู่ ช.รวมช่าง"
              className="relative rounded-2xl shadow-lg object-cover h-112.5 w-full"
            />
            {/* ป้ายประสบการณ์ลอยๆ */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <span className="block text-4xl font-black mb-1 text-teal-400">100%</span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">มาตรฐานมืออาชีพ</span>
            </div>
          </div>

          {/* ฝั่งขวา: เนื้อหา */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-4 leading-tight">
                ชำนาญทุกอาการ <br/>
                <span className="text-teal-600">ดูแลดุจรถของเราเอง</span>
              </h2>
              <div className="h-1 w-16 bg-teal-600 rounded-full"></div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-light">
              ที่ <strong className="text-slate-800 font-bold">อู่ ช.รวมช่าง</strong> เราเข้าใจดีว่า "เวลา" คือต้นทุนสำคัญของคนทำธุรกิจรถบรรทุก เราจึงมุ่งเน้นการวิเคราะห์อาการที่แม่นยำ ซ่อมจบตรงจุด และใช้อะไหล่คุณภาพสูง เพื่อให้รถของคุณกลับไปทำเงินได้ไวที่สุด
            </p>

            <div className="space-y-6 pt-4">
              {/* ข้อ 1 */}
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">อะไหล่แท้ และทดแทนเกรด A</h3>
                  <p className="text-sm text-slate-500 font-light">คัดสรรแบรนด์ชั้นนำ เพื่อความทนทาน คุ้มค่าทุกกิโลเมตร</p>
                </div>
              </div>

              {/* ข้อ 2 */}
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">ทีมช่างมากประสบการณ์</h3>
                  <p className="text-sm text-slate-500 font-light">วิเคราะห์งานขาด ซ่อมจบทุกปัญหา ไม่บานปลาย</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-white bg-slate-900 hover:bg-teal-600 px-8 py-4 rounded-xl transition-colors shadow-lg">
                ติดต่อสอบถามคิวซ่อม
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}