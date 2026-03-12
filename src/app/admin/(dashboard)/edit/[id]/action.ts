"use server"

import prisma from "@/src/lib/prisma"
import { supabase } from "@/src/lib/supabase" 
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function updateProduct(formData: FormData) {
  const id = formData.get("id") as string
  const oldImageUrl = formData.get("oldImageUrl") as string
  
  const name = formData.get("name") as string
  const partNumber = formData.get("partNumber") as string
  const categoryId = formData.get("categoryId") as string
  const price = parseFloat(formData.get("price") as string) || 0
  const costPrice = parseFloat(formData.get("costPrice") as string) || 0
  const stock = parseInt(formData.get("stock") as string) || 0

  const imageFile = formData.get("image") as File
  let imageUrl = oldImageUrl // ตั้งค่าเริ่มต้นให้เป็นรูปเก่าไปก่อน

  // ถ้ามีการเลือกไฟล์รูปภาพใหม่มาด้วย
  if (imageFile && imageFile.size > 0) {
    try {
      // 1. ลบรูปเก่าทิ้งก่อน (ถ้ามี)
      if (oldImageUrl) {
        const urlParts = oldImageUrl.split('/')
        const oldFileName = urlParts[urlParts.length - 1]
        if (oldFileName) await supabase.storage.from('products').remove([oldFileName])
      }

      // 2. อัปโหลดรูปใหม่ขึ้นไป
      const fileBuffer = await imageFile.arrayBuffer()
      const newFileName = `${Date.now()}-${imageFile.name.replaceAll(" ", "_")}`
      
      const { error: uploadError } = await supabase.storage
        .from('products')
        .upload(newFileName, fileBuffer, { contentType: imageFile.type })

      if (!uploadError) {
        const { data: publicUrlData } = supabase.storage.from('products').getPublicUrl(newFileName)
        imageUrl = publicUrlData.publicUrl // อัปเดตตัวแปร imageUrl ให้เป็นลิงก์ใหม่
      }
    } catch (err) {
      console.error("เปลี่ยนรูปไม่สำเร็จ:", err)
    }
  }

  // อัปเดตข้อมูลลง Database
  try {
    await prisma.product.update({
      where: { id },
      data: { name, partNumber, categoryId, price, costPrice, stock, imageUrl },
    })
  } catch (error) {
    console.error("บันทึกการแก้ไขไม่ได้:", error)
  }

  // สั่งให้ระบบรีเฟรชข้อมูลใหม่ แล้วเด้งกลับไปหน้า Dashboard
  revalidatePath("/admin")
  revalidatePath("/")
  redirect("/admin")
}