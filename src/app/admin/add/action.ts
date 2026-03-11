"use server"

import prisma from "@/src/lib/prisma"
import { supabase } from "@/src/lib/supabase"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string
  const partNumber = formData.get("partNumber") as string
  const description = formData.get("description") as string
  const brand = formData.get("brand") as string
  const location = formData.get("location") as string
  const categoryId = formData.get("categoryId") as string
  
  const price = parseFloat(formData.get("price") as string) || 0
  const costPrice = parseFloat(formData.get("costPrice") as string) || 0
  const stock = parseInt(formData.get("stock") as string) || 0

  // ดึงไฟล์รูปมา
  const imageFile = formData.get("image") as File
  let imageUrl = null

  console.log("--- 🕵️‍♂️ เริ่มกระบวนการอัปโหลด ---")
  console.log("1. ตรวจสอบไฟล์:", imageFile ? imageFile.name : "ไม่มีไฟล์")

  // ตรวจสอบว่ามีไฟล์จริงๆ และขนาดมากกว่า 0
  if (imageFile && imageFile.size > 0) {
    try {
      console.log(`2. ขนาดไฟล์: ${imageFile.size} bytes`)

      // 💡 จุดแก้ปัญหา: แปลงไฟล์เป็น Buffer ก่อนส่ง (ชัวร์ที่สุด)
      const fileBuffer = await imageFile.arrayBuffer()
      const fileName = `${Date.now()}-${imageFile.name.replaceAll(" ", "_")}`

      console.log("3. กำลังยิงไฟล์ขึ้น Supabase ชื่อ:", fileName)

      // ส่งขึ้น Supabase
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('products')
        .upload(fileName, fileBuffer, {
          contentType: imageFile.type, // ระบุประเภทไฟล์ชัดเจน
          cacheControl: '3600',
          upsert: false,
        })

      if (uploadError) {
        console.error("❌ 4. Supabase Error! ดูรายละเอียดตรงนี้ ->", uploadError)
      } else {
        console.log("✅ 4. อัปโหลดเข้าถังสำเร็จ!")
        
        // ขอ URL มาใช้
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(fileName)
          
        imageUrl = publicUrlData.publicUrl
        console.log("✅ 5. ได้ลิงก์รูปมาแล้ว:", imageUrl)
      }
    } catch (err) {
      console.error("❌ ระบบพังระหว่างแปลงไฟล์:", err)
    }
  } else {
    console.log("⚠️ ไม่พบรูปภาพ หรือไม่ได้เลือกรูปมา")
  }
  console.log("--- 💾 กำลังบันทึกลง Prisma ---")

  try {
    await prisma.product.create({
      data: {
        name,
        partNumber,
        description,
        brand,
        location,
        price,
        costPrice,
        stock,
        categoryId,
        imageUrl, // นำลิงก์ที่ได้ (หรือ null) มาบันทึก
      },
    })
    console.log("✅ บันทึกลง Prisma สำเร็จ!")
  } catch (error) {
    console.error("❌ บันทึกลง Prisma ไม่ได้:", error)
  }

  revalidatePath("/")
  redirect("/")
}