"use client";

import Link from "next/link"; // 👈 อย่าลืม import Link เข้ามาด้วยครับ

export default function Brands() {
  const brandLogos = [
    { name: "Ford", url: "/images/Logo/Ford.jpg" },
    { name: "Hino", url: "/images/Logo/Hino.jpg" },
    { name: "Honda", url: "/images/Logo/Honda.jpg" },
    { name: "Isuzu", url: "/images/Logo/Isuzu.jpg" },
    { name: "Mitsubishi", url: "/images/Logo/Mitsubishi.jpg" },
    { name: "Nissan", url: "/images/Logo/Nissan2.jpg" },
    { name: "Scania", url: "/images/Logo/Scania.jpg" },
    { name: "Toyota", url: "/images/Logo/Toyota.jpg" },
  ];

  return (
    <div className="bg-slate-50 py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-bold text-slate-400 mb-8 uppercase tracking-wider">
          แบรนด์รถบรรทุกและรถยนต์ที่เรารองรับ
        </p>
        
        {/* แถบโลโก้ */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          
          {brandLogos.map((brand) => (
            <div 
              key={brand.name} 
              className="flex items-center justify-center h-12 w-28 md:h-16 md:w-36 group transition-all duration-300"
              title={`โลโก้ ${brand.name}`}
            >
              <img 
                src={brand.url} 
                alt={`โลโก้ ${brand.name}`} 
                className="max-h-full max-w-full object-contain filter grayscale mix-blend-mode-multiply opacity-60 group-hover:grayscale-0 group-hover:mix-blend-mode-normal group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}

          {/* 💡 ปุ่มแบรนด์อื่นๆ: ดักลูกค้าที่หาโลโก้ตัวเองไม่เจอ ให้กดไปหน้าติดต่อเรา */}
          <Link 
            href="/contact"
            className="flex items-center justify-center h-10 px-6 md:h-12 md:px-8 rounded-full border-2 border-dashed border-slate-300 bg-white text-slate-500 font-bold text-sm hover:border-teal-500 hover:text-teal-700 hover:bg-teal-50 hover:shadow-md transition-all duration-300 group"
          >
            <span className="group-hover:hidden">และแบรนด์อื่นๆ...</span>
            <span className="hidden group-hover:inline-block">💬 สอบถามช่างได้เลยคลิก!</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
}