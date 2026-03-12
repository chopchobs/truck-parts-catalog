import prisma from "@/src/lib/prisma"
import { createProduct } from "./action"

export default async function AddProductPage() {
  const categories = await prisma.category.findMany() // หา category.findMany ทั้งหมด

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-2xl mt-10 mb-20 border border-gray-100">
      <h1 className="text-3xl font-black mb-8 text-blue-900 uppercase tracking-tight">เพิ่มอะไหล่ใหม่ (ระบบบริหารสต็อก)</h1>

      {/* Form */}
      <form action={createProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ข้อมูลหลัก */}
        <div className="md:col-span-2 space-y-4">
          <label className="block text-sm font-bold text-gray-700 mb-2">รูปภาพอะไหล่ (แนะนำขนาด 1:1)</label>
  <input 
    name="image" 
    type="file" 
    accept="image/*" // บังคับให้เลือกได้เฉพาะไฟล์รูปภาพ
    className="w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" 
  />
          <h2 className="text-lg font-bold text-gray-400 border-b pb-2">ข้อมูลทั่วไป</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">ชื่ออะไหล่ *</label>
              <input name="name" type="text" required className="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="เช่น ลูกหมากคันชัก Hino" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">รหัสพาร์ท (Part Number) *</label>
              <input name="partNumber" type="text" required className="w-full p-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="PN-12345" />
            </div>
          </div>
        </div>

        {/* รายละเอียดเสริม */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-400 border-b pb-2">รายละเอียดสินค้า</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">ยี่ห้อ (Brand)</label>
              <input name="brand" type="text" className="w-full p-3 bg-gray-50 border rounded-xl" placeholder="Hino / Isuzu" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">ตำแหน่งเก็บ (Location)</label>
              <input name="location" type="text" className="w-full p-3 bg-gray-50 border rounded-xl" placeholder="ชั้น A1" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">คำอธิบาย</label>
            <textarea name="description" rows={3} className="w-full p-3 bg-gray-50 border rounded-xl" placeholder="ระบุรายละเอียดเพิ่มเติม..." />
          </div>
        </div>

        {/* ราคาและสต็อก */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-400 border-b pb-2">ราคาและคลังสินค้า</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">ราคาขาย (บาท) *</label>
              <input name="price" type="number" step="any" required className="w-full p-3 bg-blue-50 border-blue-200 border rounded-xl font-bold text-blue-700" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">ต้นทุน (บาท)</label>
              <input name="costPrice" type="number" step="any" className="w-full p-3 bg-gray-50 border rounded-xl" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">จำนวนในสต็อก</label>
              <input name="stock" type="number" defaultValue={0} className="w-full p-3 bg-gray-50 border rounded-xl" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">หมวดหมู่ *</label>
              <select name="categoryId" required className="w-full p-3 bg-gray-50 border rounded-xl font-medium">
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 pt-6">
          <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black text-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200">
            บันทึกข้อมูลเข้าฐานข้อมูล
          </button>
        </div>
      </form>

    </div>
  )
}