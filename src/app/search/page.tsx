import prisma from "@/src/lib/prisma";
import Navbar from "@/src/components/common/Navbar";
import ProductCard from "@/src/components/common/ProductCard";
import Link from "next/link";

// ใช้ Promise แกะค่า searchParams (เทคนิค Next.js 15)
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  
  const resolvedParams = await searchParams;
  const query = resolvedParams.q || ""; // คำที่ลูกค้าพิมพ์ค้นหา

  // ถ้าลูกค้าไม่ได้พิมพ์อะไรมาเลย ให้โชว์อาเรย์ว่างๆ
  let products: any[] = [];

  if (query.trim() !== "") {
    // 💡 ค้นหาจาก Database: หาในชื่อ (name) หรือ หาในรหัสพาร์ท (partNumber) ก็ได้
    products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } }, // insensitive พิมพ์พิมพ์เล็ก (a) หรือพิมพ์ใหญ่ (A) ก็ค้นหาเจอกันหมด
          { partNumber: { contains: query, mode: "insensitive" } },
        ],
      },
      include: { category: true },
      orderBy: { createdAt: "desc" }, // เอาของใหม่ขึ้นก่อน
    });
  }

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      <div className="container mx-auto max-w-6xl px-4 py-12 flex-1">
        
        {/* หัวข้อบอกว่าค้นหาคำว่าอะไร */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-teal-600 font-bold hover:underline mb-4 inline-block">
            ← กลับหน้าแรก
          </Link>
          <h1 className="text-2xl md:text-3xl font-black text-slate-800">
            ผลการค้นหาสำหรับ: <span className="text-teal-600">"{query}"</span>
          </h1>
          <p className="text-slate-500 mt-2">พบสินค้าทั้งหมด {products.length} รายการ</p>
        </div>

        {/* แสดงผลการค้นหา */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          /* ถ้าค้นหาไม่เจอให้ขึ้นกล่องนี้ */
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-16 text-center shadow-sm">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">ไม่พบอะไหล่ที่คุณค้นหา</h2>
            <p className="text-slate-500 mb-6">ลองตรวจสอบรหัสพาร์ท หรือตัวสะกดอีกครั้งนะครับ</p>
            <Link href="/" className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-teal-600 transition-colors">
              ดูสินค้าทั้งหมด
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}