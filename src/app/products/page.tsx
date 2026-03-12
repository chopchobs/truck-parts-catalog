import prisma from "@/src/lib/prisma";
import Navbar from "@/src/components/common/Navbar";
import ProductCard from "@/src/components/common/ProductCard";
import Link from "next/link";

// ใช้ Promise แกะค่า searchParams (เพื่อรองรับ Next.js 15)
export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category || "all"; // ถ้าไม่มีการเลือกหมวดหมู่ ให้เป็น "all" (ทั้งหมด)

  // 1. ดึงหมวดหมู่ทั้งหมดมาทำเป็นเมนูให้ลูกค้ากด
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' } // เรียงตามตัวอักษร ก-ฮ
  });

  // 2. ดึงสินค้า (ถ้าเลือกหมวดหมู่ก็กรองมาเฉพาะหมวดนั้น ถ้าไม่เลือกก็ดึงมาทั้งหมด)
  const products = await prisma.product.findMany({
    where: currentCategory !== "all" ? { categoryId: currentCategory } : {},
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      {/* แบนเนอร์หัวข้อหน้าเว็บ */}
      <div className="bg-slate-900 text-white py-12 px-4 border-b-4 border-teal-600">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-tight">แคตตาล็อกอะไหล่</h1>
          <p className="text-slate-400">เลือกดูสินค้าตามหมวดหมู่ หรือค้นหาอะไหล่ที่คุณต้องการ</p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8 flex-1 flex flex-col md:flex-row gap-8">
        
        {/* ฝั่งซ้าย: เมนูหมวดหมู่ (Sidebar) */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sticky top-24">
            <h2 className="font-bold text-slate-800 mb-4 px-2">หมวดหมู่สินค้า</h2>
            <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {/* ปุ่มดูสินค้าทั้งหมด */}
              <Link 
                href="/products" 
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  currentCategory === "all" 
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/20" 
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                📦 สินค้าทั้งหมด
              </Link>
              
              {/* ปุ่มตามหมวดหมู่ที่มีในระบบ */}
              {categories.map((cat) => (
                <Link 
                  key={cat.id}
                  href={`/products?category=${cat.id}`} 
                  className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    currentCategory === cat.id 
                      ? "bg-teal-600 text-white shadow-md shadow-teal-600/20" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* ฝั่งขวา: รายการสินค้า (Product Grid) */}
        <div className="flex-1">
          {/* แถบบอกจำนวนผลลัพธ์ */}
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">
              {currentCategory === "all" ? "รายการสินค้าทั้งหมด" : categories.find(c => c.id === currentCategory)?.name}
            </h3>
            <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
              พบ {products.length} รายการ
            </span>
          </div>

          {/* ตารางแสดงการ์ดสินค้า */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          ) : (
            /* ถ้าหมวดหมู่นั้นยังไม่มีสินค้า */
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-16 text-center shadow-sm">
              <div className="text-5xl mb-4 text-slate-300">⚙️</div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">ยังไม่มีสินค้าหมวดหมู่นี้</h2>
              <p className="text-slate-500">ทางอู่กำลังอัปเดตข้อมูลอะไหล่เพิ่มเติมครับ</p>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}