"use server"

import prisma from "@/src/lib/prisma"
import { supabase } from "@/src/lib/supabase" 
import { revalidatePath } from "next/cache"

export async function deleteProduct(id: string, imageUrl: string | null) {
  try {
    // 1. ถ้าสินค้านี้มีรูปภาพ ให้ไปตามลบรูปในถัง Supabase ทิ้งด้วย
    if (imageUrl) {
      // ตัดเอาเฉพาะชื่อไฟล์ที่อยู่ท้ายสุดของ URL
      const urlParts = imageUrl.split('/')
      const fileName = urlParts[urlParts.length - 1]
      if (fileName) {
        await supabase.storage.from('products').remove([fileName])
      }
    }
    // 2. ลบข้อมูลสินค้าออกจากฐานข้อมูล Prisma
    await prisma.product.delete({
      where: { id }
    })
    // 3. สั่งให้ Next.js รีเฟรชหน้าเว็บทั้งแอดมินและหน้าร้าน เพื่อให้ข้อมูลหายไปทันที
    revalidatePath("/admin")
    revalidatePath("/")
  } catch (error) {
    console.error("ลบสินค้าไม่สำเร็จ:", error)
  }
}