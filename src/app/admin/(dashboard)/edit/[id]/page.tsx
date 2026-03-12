import prisma from "@/src/lib/prisma"
import { updateProduct } from "./action" 
import Link from "next/link"

// 💡 1. บอกระบบว่า params เป็นกล่องที่ต้องรอเปิด (Promise)
export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 💡 2. สั่งรอ (await) แกะกล่อง params ออกมาก่อน
  const resolvedParams = await params;
  const editId = resolvedParams.id; // หยิบ id ออกมาเก็บไว้ในตัวแปร editId

  // ดึงข้อมูลสินค้าเดิม และหมวดหมู่ทั้งหมดมาเตรียมไว้
  const product = await prisma.product.findUnique({
    where: { id: editId } // <--- 💡 3. เปลี่ยนมาใช้ editId ตรงนี้ครับ
  })
  const categories = await prisma.category.findMany()

  if (!product) return <div>ไม่พบสินค้า</div>

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">แก้ไขข้อมูลอะไหล่</h2>
        <Link href="/admin" className="text-slate-500 hover:text-slate-800 text-sm font-bold">
          ✕ ยกเลิก
        </Link>
      </div>

      <form action={updateProduct} className="space-y-6">
        {/* ซ่อน ID และรูปเก่าไว้ เพื่อส่งไปให้ Action ใช้งาน */}
        <input type="hidden" name="id" value={product.id} />
        <input type="hidden" name="oldImageUrl" value={product.imageUrl || ""} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">ชื่ออะไหล่</label>
            <input type="text" name="name" defaultValue={product.name} required className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">รหัสพาร์ท (Part Number)</label>
            <input type="text" name="partNumber" defaultValue={product.partNumber} required className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">หมวดหมู่</label>
            <select name="categoryId" defaultValue={product.categoryId} required className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none">
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">จำนวนสต็อก</label>
            <input type="number" name="stock" defaultValue={product.stock} required className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">ราคาต้นทุน (บาท)</label>
            <input type="number" name="costPrice" defaultValue={product.costPrice?? ""} required className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">ราคาขาย (บาท)</label>
            <input type="number" name="price" defaultValue={product.price} required className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          </div>

          <div className="md:col-span-2 p-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
            <label className="block text-sm font-bold text-slate-700 mb-2">เปลี่ยนรูปภาพใหม่ (ปล่อยว่างถ้าใช้รูปเดิม)</label>
            {product.imageUrl && (
              <div className="mb-4 text-sm text-teal-600 font-bold">✅ ตอนนี้มีรูปภาพอยู่แล้ว</div>
            )}
            <input type="file" name="image" accept="image/*" className="w-full text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 cursor-pointer" />
          </div>
        </div>

        <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-600/30 transition-all">
          💾 บันทึกการเปลี่ยนแปลง
        </button>
      </form>
    </div>
  )
}