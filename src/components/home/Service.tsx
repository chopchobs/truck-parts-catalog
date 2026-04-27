import React from "react";
import Link from "next/link";

export default function Services() {
  const servicesList = [
    {
      title: "พวงมาลัย / ช่วงล่าง",
      icon: "⚙️",
    },
    {
      title: "ชุดเกียร์",
      icon: "🛠️",
    },
    {
      title: "งานตัวถัง",
      icon: "🚛",
    },
    {
      title: "เบรก",
      icon: "🛑",
    },
    {
      title: "เปลี่ยนถ่ายน้ำมันเครื่อง",
      icon: "🛢️",
    },
    {
      title: "อื่นๆ",
      icon: "🔧",
    },
  ];

  return (
    <section
      id="Services"
      className="bg-slate-50 py-24 px-4 relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900 rounded-full opacity-10 blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-200 border border-slate-300 text-blue-950 font-bold text-sm mb-4">
            🛡️ รับประกันงานซ่อมทุกชิ้น
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight mb-4">
            บริการมาตรฐาน <span className="text-cyan-600">อู่ ช.รวมช่าง</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-8">
            จบทุกปัญหารถบรรทุกและรถยนต์ ด้วยทีมช่างผู้ชำนาญการ
            พร้อมเครื่องมือทันสมัย
          </p>

          {/* 35 Years Experience Trust Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-4 py-3 px-8 rounded-full bg-blue-950/90 border border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300">
              <span className="text-2xl md:text-3xl animate-pulse drop-shadow-md">
                🏆
              </span>
              <span className="text-xl md:text-2xl font-extrabold text-cyan-400 tracking-wide drop-shadow-md">
                ประสบการณ์ยาวนานกว่า 35 ปี
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {servicesList.map((service, index) => (
            <Link
              href="/contact"
              key={index}
              className="group bg-white rounded-full p-4 md:p-6 shadow-md hover:shadow-xl border-2 border-slate-200 hover:border-cyan-500 transition-all duration-300 cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 bg-blue-950 border-2 border-cyan-400 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 group-hover:bg-cyan-500 transition-all duration-300 shadow-inner">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-950 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors shrink-0">
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
