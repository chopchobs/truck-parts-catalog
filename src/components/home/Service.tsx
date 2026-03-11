import React from 'react';

export default function Services() {
  const servicesList = [
    { title: "พวงมาลัย/ช่วงล่าง", icon: "⚙️" },
    { title: "ชุดเกียร์", icon: "🛠️" },
    { title: "งานตัวถัง", icon: "🚛" },
    { title: "เบรค", icon: "🛑" },
    { title: "เปลี่ยนถ่ายน้ำมันเครื่อง", icon: "🛢️" },
    { title: "บริการอื่นๆ", icon: "🔧" }
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 border-t border-slate-200 font-sans">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">บริการของ <span className="text-teal-700">อู่ ช.รวมช่าง</span></h2>
          <div className="h-1.5 w-24 bg-teal-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-teal-700 text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:bg-teal-600 hover:-translate-y-1 transition-all duration-300 cursor-default border-2 border-teal-800/50"
            >
              <span className="text-4xl mb-3">{service.icon}</span>
              <h3 className="text-lg md:text-xl font-bold tracking-wide">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}