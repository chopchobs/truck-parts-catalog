"use client"

import { deleteProduct } from "./action"; 

interface DeleteButtonProps {
  id: string;
  imageUrl: string | null;
  productName: string;
}

export default function DeleteButton({ id, imageUrl, productName }: DeleteButtonProps) {
  
  const handleDelete = async () => {
    // โชว์ Pop-up แจ้งเตือนก่อน
    const isConfirm = window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบ "${productName}"?\n(ลบแล้วไม่สามารถกู้คืนได้)`)

    // ถ้ากด OK ค่อยเรียกคำสั่งลบ
    if (isConfirm) {
      await deleteProduct(id, imageUrl)
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="p-1.5 text-red-600 hover:bg-red-100 rounded-md transition-colors"
      title="ลบสินค้า"
    >
      🗑️
    </button>
  )
}