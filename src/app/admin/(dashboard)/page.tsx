import prisma from "@/src/lib/prisma";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default async function AdminDashboard() {
  // ดึงข้อมูลสินค้าทั้งหมดจากฐานข้อมูล (ดึงข้อมูลหมวดหมู่มาด้วย และเรียงจากอัปเดตล่าสุด)
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { updatedAt: 'desc' }
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 font-sans">
      
      {/* ส่วนหัวตาราง */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">รายการอะไหล่ทั้งหมด</h2>
          <p className="text-sm text-slate-500">จัดการข้อมูลสินค้า ราคา และสต็อกของอู่</p>
        </div>
        <Link 
          href="/admin/add" 
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2"
        >
          <span>+</span> เพิ่มอะไหล่ใหม่
        </Link>
      </div>

      {/* ตารางแสดงข้อมูล */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-200">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
              <th className="p-4 font-semibold rounded-tl-xl w-20">รูปภาพ</th>
              <th className="p-4 font-semibold">ชื่ออะไหล่ / รหัสพาร์ท</th>
              <th className="p-4 font-semibold">หมวดหมู่</th>
              <th className="p-4 font-semibold">ราคา (ต้นทุน)</th>
              <th className="p-4 font-semibold">สต็อก</th>
              <th className="p-4 font-semibold rounded-tr-xl text-center w-24">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-12 text-center text-slate-400 border-2 border-dashed border-slate-100 rounded-xl">
                  <div className="text-4xl mb-2">📦</div>
                  ยังไม่มีข้อมูลสินค้า กดปุ่ม "เพิ่มอะไหล่ใหม่" ด้านขวาบนได้เลยครับ
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 transition-colors group">
                  
                  {/* คอลัมน์: รูปภาพ */}
                  <td className="p-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden border border-slate-200 flex items-center justify-center">
                      {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-[8px] text-slate-400 font-bold uppercase">No Img</span>
                      )}
                    </div>
                  </td>
                  
                  {/* คอลัมน์: ชื่อและรหัสพาร์ท */}
                  <td className="p-4">
                    <div className="font-bold text-slate-800 line-clamp-1">{product.name}</div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">PN: {product.partNumber}</div>
                  </td>
                  
                  {/* คอลัมน์: หมวดหมู่ */}
                  <td className="p-4 text-sm text-slate-600">
                    <span className="bg-slate-100 px-2 py-1 rounded-md text-xs font-medium border border-slate-200">
                      {product.category?.name || "ไม่ระบุ"}
                    </span>
                  </td>
                  
                  {/* คอลัมน์: ราคา */}
                  <td className="p-4">
                    <div className="font-bold text-slate-800">฿{product.price.toLocaleString()}</div>
                    {/* <div className="text-xs text-slate-400 mt-0.5">ทุน: ฿{product.costPrice.toLocaleString()}</div> */}
                  </td>
                  
                  {/* คอลัมน์: สต็อก */}
                  <td className="p-4">
                    {product.stock > 0 ? (
                      <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                        {product.stock} ชิ้น
                      </span>
                    ) : (
                      <span className="text-red-500 font-bold text-xs bg-red-50 px-2 py-1 rounded-md border border-red-100">
                        สินค้าหมด
                      </span>
                    )}
                  </td>
                  
                  {/* คอลัมน์: ปุ่มจัดการ (แก้ไข/ลบ) */}
                  <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                      
                      <Link 
                        href={`/admin/edit/${product.id}`} 
                        className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-md transition-colors inline-block" 
                        title="แก้ไขสินค้า"
                      >
                        ✏️
                      </Link>
                      
                      {/* เรียกใช้ปุ่มลบที่เราเพิ่งสร้าง และส่งข้อมูลชิ้นนั้นไปให้มัน */}
                      <DeleteButton 
                        id={product.id} 
                        imageUrl={product.imageUrl} 
                        productName={product.name} 
                      />
                      
                  </div>
                </td>
                  
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}