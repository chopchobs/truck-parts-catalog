import prisma from "@/src/lib/prisma";
import Link from "next/link";
import Navbar from "@/src/components/common/Navbar";

// Next.js (เวอร์ชั่น 15) params กลายเป็นตู้เซฟ (Promise) ที่เราต้องใช้กุญแจไข (await) ก่อนถึงจะหยิบ id ออกมาใช้งาน

// 1. เปลี่ยน Type ของ params ให้เป็น Promise
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {

  // 💡 2. จุดแก้ปัญหา: ใช้ await เพื่อแกะรหัส id ออกมาจาก params ก่อน
  const resolvedParams = await params;
  const productId = resolvedParams.id;
  
  // 3. เอา productId ที่แกะแล้ว ไปค้นหาใน Database
  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: { category: true }
  });

  // ถ้าพิมพ์ URL ผิด หรือหาสินค้าไม่เจอ ให้ขึ้นหน้านี้
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">ไม่พบข้อมูลสินค้านี้</h1>
        <Link href="/" className="px-6 py-2 bg-teal-600 text-white rounded-lg font-bold">กลับหน้าร้าน</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />

      <div className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          
          {/* แถบนำทาง (Breadcrumb) */}
          <div className="text-sm text-slate-500 mb-6 font-medium">
            <Link href="/" className="hover:text-teal-600">หน้าแรก</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800">{product.name}</span>
          </div>

          {/* กล่องรายละเอียดสินค้า */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              
              {/* ฝั่งซ้าย: รูปภาพใหญ่ */}
              <div className="w-full md:w-1/2 bg-slate-100 p-8 flex items-center justify-center min-h-100">
                {product.imageUrl ? (
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-sm border-2 border-slate-300 border-dashed px-6 py-3 rounded-xl">
                    ไม่มีรูปภาพ
                  </span>
                )}
              </div>

              {/* ฝั่งขวา: ข้อมูลและปุ่มสั่งซื้อ */}
              <div className="w-full md:w-1/2 p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full mb-4 border border-teal-100">
                  {product.category?.name || "ไม่ระบุหมวดหมู่"}
                </span>

                <h1 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-2">
                  {product.name}
                </h1>

                <p className="text-slate-500 font-mono mb-6 pb-6 border-b border-slate-100">
                  Part Number: <span className="font-bold text-slate-700 text-lg">{product.partNumber}</span>
                </p>

                <div className="mb-8">
                  <p className="text-sm text-slate-500 mb-1 font-bold">ราคา</p>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-black text-slate-900">฿{product.price.toLocaleString()}</span>
                    <span className="text-sm text-slate-400 mb-1.5 font-bold">/ ชิ้น</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-slate-800 mb-2">สถานะสินค้า:</h3>
                  {product.stock > 0 ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                      มีสินค้าพร้อมส่ง ({product.stock} ชิ้น)
                    </span>
                  ) : (
                    <span className="text-red-500 font-bold flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      สินค้าหมดชั่วคราว
                    </span>
                  )}
                </div>

                {/* ปุ่มติดต่อสั่งซื้อ (วิ่งตรงเข้าเบอร์และ LINE อู่) */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="tel:0813241382" className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                    📞 โทรเช็กสต็อก
                  </a>
                  <a href="https://line.me/ti/p/~0813241382" target="_blank" className="flex-1 bg-[#00B900] hover:bg-[#009900] text-white text-center py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00B900]/20">
                    💬 สั่งซื้อผ่าน LINE
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
}