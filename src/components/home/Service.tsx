import React from 'react';
import Link from 'next/link'; // 💡 1. อย่าลืม Import Link เข้ามาใช้งานครับ

export default function Services() {
  const servicesList = [
    { 
      title: "ระบบช่วงล่าง / พวงมาลัย",   
      icon: "⚙️" 
    },
    { 
      title: "ระบบเกียร์ / เฟืองท้าย", 
      icon: "🛠️" 
    },
    { 
      title: "เบรก / คลัตช์", 
      icon: "🛑" 
    },
    { 
      title: "เปลี่ยนถ่ายน้ำมันเครื่อง", 
      icon: "🛢️" 
    },
    { 
      title: "งานซ่อมตัวถัง / แชสซี", 
      icon: "🚛" 
    },
    
  ];

  return (
    <section  id='Services' className="bg-slate-50 py-24 px-4 font-sans relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 font-bold text-sm mb-4">
            🛡️ รับประกันงานซ่อมทุกชิ้น
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
            บริการมาตรฐาน <span className="text-teal-600">อู่ ช.รวมช่าง</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            จบทุกปัญหารถบรรทุกและรถยนต์ ด้วยทีมช่างผู้ชำนาญการ ประสบการณ์ยาวนานกว่า 20 ปี พร้อมเครื่องมือทันสมัย
          </p>
        </div>

        {/* 💡 1. ปรับ grid-cols-1 เป็น grid-cols-2 และลด gap บนมือถือลงให้เหลือ gap-3 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {servicesList.map((service, index) => (
            <Link 
              href="/contact"
              key={index} 
              // 💡 2. เปลี่ยน p-8 เป็น p-4 md:p-8 (มือถือขอบบางลง คอมพิวเตอร์ขอบหนาเท่าเดิม)
              className="group bg-white rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-2xl border border-slate-100 hover:border-teal-500 transition-all duration-500 cursor-pointer relative overflow-hidden flex-col h-full flex"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 💡 3. ปรับให้บนมือถือไอคอนกับตัวหนังสืออยู่คนละบรรทัด (flex-col) พอเป็นจอใหญ่ค่อยอยู่บรรทัดเดียวกัน (md:flex-row) */}
              <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 mb-2 md:mb-4">
                
                {/* 💡 4. ย่อขนาดกรอบไอคอนบนมือถือลงนิดนึง (w-12 h-12 text-2xl) */}
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 group-hover:rotate-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-inner">
                  {service.icon}
                </div>
                <div className="pt-1 md:pt-2">
                  {/* 💡 5. ปรับขนาดตัวหนังสือบนมือถือให้เล็กลงหน่อย (text-base md:text-xl) */}
                  <h3 className="text-base md:text-xl font-bold text-slate-800 group-hover:text-teal-700 transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="mt-auto pt-4 flex items-center text-xs md:text-sm font-bold text-teal-600 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2.5 group-hover:translate-x-0">
                ปรึกษาช่างคลิก <span className="ml-1 md:ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}