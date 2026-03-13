import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-teal-700 py-16 relative overflow-hidden">
      {/* วงกลมตกแต่งพื้นหลังให้ดูมีมิติ */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-900 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">หาสินค้าไม่เจอ หรือต้องการปรึกษาช่าง?</h2>
        <p className="text-teal-100 text-lg mb-10">
          ทีมงาน อู่ ช.รวมช่าง พร้อมให้คำแนะนำเรื่องอะไหล่รถบรรทุกทุกชนิด โทรสอบถามได้เลยไม่ต้องเกรงใจ
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:0813241382" 
            className="px-8 py-4 bg-white text-teal-800 font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            📞 081-324-1382
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=100054236300436" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#1877F2] text-white font-bold rounded-xl shadow-lg hover:bg-[#166FE5] transition-colors flex items-center justify-center gap-2"
          >
            {/* ไอคอน Facebook แบบ SVG (คมชัด 100%) */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            FACEBOOK
          </a>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-teal-800 text-white font-bold rounded-xl shadow-lg hover:bg-teal-900 border border-teal-600 transition-colors flex items-center justify-center gap-2"
          >
            💬 ติดต่อเรา / แผนที่อู่
          </Link>
        </div>
      </div>
    </section>
  );
}