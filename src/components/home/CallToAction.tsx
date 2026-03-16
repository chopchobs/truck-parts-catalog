import Link from "next/link";

export default function CallToAction() {
  return (
    // 💡 1. ลดกรอบพื้นที่ว่างบนมือถือ: ใช้ py-10 สำหรับมือถือ และ md:py-16 สำหรับจอคอม
    <section className="bg-teal-700 py-10 md:py-16 relative overflow-hidden">
      
      {/* วงกลมตกแต่งพื้นหลังให้ดูมีมิติ */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-900 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* 💡 2. ย่อขนาดหัวข้อ: มือถือใช้ text-2xl จอใหญ่ขยับเป็น 4xl หรือ 5xl (ลดการขึ้นบรรทัดใหม่เยอะๆ บนมือถือ) */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
          หาสินค้าไม่เจอ หรือต้องการปรึกษาช่าง?
        </h2>
        
        {/* 💡 3. ย่อขนาดคำอธิบาย: มือถือใช้ text-base (16px) จอใหญ่ใช้ text-lg (18px) */}
        <p className="text-teal-100 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
          ทีมงาน อู่ ช.รวมช่าง พร้อมให้คำแนะนำเรื่องอะไหล่รถบรรทุกทุกชนิด โทรสอบถามได้เลยไม่ต้องเกรงใจ
        </p>
        
        {/* เลย์เอาต์จัดเรียงปุ่ม (อันนี้ของเดิมทำดีอยู่แล้วครับ) */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          
          {/* 💡 4. ปรับขนาดปุ่ม: บนมือถือปุ่ม py-4 จะดูหนาไปนิด ผมปรับเป็น py-3 px-6 แล้วค่อยขยายตอนจอใหญ่ (md:) */}
          <a 
            href="tel:0813241382" 
            className="px-6 py-3 md:px-8 md:py-4 bg-white text-teal-800 font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            📞 081-324-1382
          </a>
          
          <a 
            href="https://www.facebook.com/profile.php?id=100054236300436" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-8 md:py-4 bg-[#1877F2] text-white font-bold rounded-xl shadow-lg hover:bg-[#166FE5] transition-colors flex items-center justify-center gap-2"
          >
            {/* ไอคอน Facebook แบบ SVG */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            FACEBOOK
          </a>
          
          <Link 
            href="/contact" 
            className="px-6 py-3 md:px-8 md:py-4 bg-teal-800 text-white font-bold rounded-xl shadow-lg hover:bg-teal-900 border border-teal-600 transition-colors flex items-center justify-center gap-2"
          >
            💬 ติดต่อเรา / แผนที่อู่
          </Link>
          
        </div>
      </div>
    </section>
  );
}