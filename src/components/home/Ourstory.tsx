import React from "react";
import Link from "next/link";

export default function Ourstory() {
  return (
    <section
      id="Ourstory"
      className="bg-white py-24 px-4 font-sans scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Heading and Intro */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-950 tracking-tight mb-6 leading-tight">
              ชำนาญทุกอาการ <br className="hidden md:block" />
              <span className="text-cyan-600">ดูแลใส่ใจดุจรถของเราเอง</span>
            </h2>
            <div className="h-1.5 w-20 bg-cyan-500 rounded-full mb-8"></div>

            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              ที่{" "}
              <strong className="text-blue-950 font-bold">อู่ ช.รวมช่าง</strong>{" "}
              เราเข้าใจดีว่า{" "}
              <strong className="text-cyan-600 font-bold">
                "เวลาคือต้นทุนที่แพงที่สุด"
              </strong>{" "}
              ของธุรกิจขนส่ง เราจึงมุ่งเน้นการซ่อมที่รวดเร็ว แม่นยำ และจบตรงจุด
              เพื่อลดวันจอด (Downtime)
              คืนความพร้อมให้รถของคุณกลับไปวิ่งทำเงินได้อย่างมั่นใจและปลอดภัยที่สุด
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 font-bold text-white bg-blue-950 hover:bg-cyan-600 px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                ติดต่อสอบถามคิวซ่อม
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Features */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
            {/* Feature 1 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 bg-cyan-500/10 text-cyan-500 rounded-full flex items-center justify-center">
                {/* Wrench/Cog Icon */}
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">
                  ทีมช่างระดับมืออาชีพ
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  วิเคราะห์อาการขาด ซ่อมจบตรงจุด
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 bg-cyan-500/10 text-cyan-500 rounded-full flex items-center justify-center">
                {/* Shield Icon */}
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">
                  อะไหล่คุณภาพ คัดเกรดเน้นๆ
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  ใช้อะไหล่แท้และอะไหล่ทดแทนเกรด A จากแบรนด์ชั้นนำ
                  เพื่อความทนทาน คุ้มค่าในทุกกิโลเมตร
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
              <div className="shrink-0 w-14 h-14 bg-cyan-500/10 text-cyan-500 rounded-full flex items-center justify-center">
                {/* Clipboard Check Icon */}
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">
                  มาตรฐานและความใส่ใจ
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  ประเมินราคาอย่างตรงไปตรงมา ทำงานเป็นระบบ
                  พร้อมให้คำปรึกษาด้วยความจริงใจ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
