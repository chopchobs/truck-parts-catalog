import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-blue-950 py-16 md:py-24 relative overflow-hidden border-t-4 border-slate-300">
      
      {/* วงกลมตกแต่งพื้นหลัง */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-slate-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          หาสินค้าไม่เจอ หรือต้องการ<span className="text-cyan-400">ปรึกษาช่าง?</span>
        </h2>
        
        <p className="text-slate-300 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          ทีมงาน อู่ ช.รวมช่าง พร้อมให้คำแนะนำเรื่องอะไหล่รถบรรทุกทุกชนิด โทรสอบถามได้เลยไม่ต้องเกรงใจ
        </p>
        
        {/* Contact Badge UI Group */}
        <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-2 md:p-3 flex flex-col sm:flex-row items-center gap-2 md:gap-4 shadow-[0_0_20px_rgba(6,182,212,0.3)] border-2 border-slate-200">
                <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-xl w-full sm:w-auto">
                    <div className="w-12 h-12 bg-blue-950 text-cyan-400 rounded-full flex items-center justify-center text-xl shadow-inner border border-slate-200">📞</div>
                    <div className="text-left">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">โทรสอบถาม (เฮีย/ช่าง)</p>
                        <a href="tel:0813241382" className="text-xl md:text-2xl font-black text-blue-950 hover:text-cyan-600 transition-colors">081 324 1382</a>
                    </div>
                </div>
                
                <div className="hidden sm:block w-[2px] h-12 bg-slate-200"></div>
                
                <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-xl w-full sm:w-auto">
                    <div className="w-12 h-12 bg-[#00B900] text-white rounded-full flex items-center justify-center text-2xl shadow-inner border border-[#00B900]/50">💬</div>
                    <div className="text-left">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">LINE ID</p>
                        <a href="https://line.me/ti/p/~0813241382" target="_blank" className="text-xl md:text-2xl font-black text-blue-950 hover:text-[#00B900] transition-colors">081 324 1382</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-center">
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-xl shadow-lg hover:bg-cyan-500 border border-cyan-400 transition-colors flex items-center justify-center gap-2"
          >
            📍 ดูแผนที่อู่ / ติดต่อเรา
          </Link>
        </div>
      </div>
    </section>
  );
}