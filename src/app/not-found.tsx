import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-sans px-4">
      <div className="text-center max-w-xl mx-auto">
        
        {/* ไอคอนตกแต่ง (ใช้กรวยจราจรให้เข้ากับธีมอู่รถ) */}
        <div className="text-7xl md:text-8xl mb-8 animate-bounce">
          🚧
        </div>

        {/* ตัวเลข 404 แบบเล่นสีตามธีม */}
        <h1 className="text-7xl md:text-9xl font-black text-slate-800 tracking-tighter mb-4">
          4<span className="text-teal-500">0</span>4
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
          ขออภัย ไม่พบหน้านี้ หรือ อะไหล่ที่คุณตามหา
        </h2>

        {/* ข้อความอธิบาย */}
        <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light">
          หน้าที่คุณกำลังพยายามเข้าถึงอาจถูกลบไปแล้ว ลิงก์อาจไม่ถูกต้อง <br className="hidden sm:block"/>
          หรือไม่มีข้อมูลนี้อยู่ในระบบของ <strong className="font-bold text-slate-700">อู่ ช.รวมช่าง</strong>
        </p>

        {/* ปุ่มกด (Call to Action) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* ปุ่มหลัก: กลับหน้าร้าน */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/30 transition-all group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            กลับหน้าหลัก
          </Link>

          {/* ปุ่มรอง: ติดต่อสอบถาม (เผื่อลูกค้าหาของไม่เจอ จะได้โทรมาถามเลย) */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 hover:border-teal-500 text-slate-700 hover:text-teal-700 font-bold rounded-xl transition-all"
          >
            📞 ติดต่อสอบถามช่าง
          </Link>
          
        </div>

      </div>
    </div>
  );
}