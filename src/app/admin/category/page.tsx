import { createCategory } from "./action"

export default function AddCategoryPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-gray-100">
      <h1 className="text-xl font-bold mb-4 text-gray-800">เพิ่มหมวดหมู่สินค้า</h1>
      <form action={createCategory} className="flex gap-2">
        <input 
          name="name" 
          type="text" 
          placeholder="เช่น ช่วงล่าง, เครื่องยนต์" 
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required 
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
        >
          บันทึก
        </button>
      </form>
    </div>
  )
}