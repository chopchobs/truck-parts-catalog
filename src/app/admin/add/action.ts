"use server"

import prisma from "@/src/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createProduct(formData: FormData) {
  // ดึงข้อมูลจากฟอร์มให้ครบทุกฟิลด์ใหม่
  const name = formData.get("name") as string
  const partNumber = formData.get("partNumber") as string
  const description = formData.get("description") as string
  const brand = formData.get("brand") as string
  const location = formData.get("location") as string
  const categoryId = formData.get("categoryId") as string
  
  // แปลงตัวเลข
  const price = parseFloat(formData.get("price") as string) || 0
  const costPrice = parseFloat(formData.get("costPrice") as string) || 0
  const stock = parseInt(formData.get("stock") as string) || 0

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
        // updatedAt และ createdAt จะถูกใส่ให้อัตโนมัติจาก Schema ครับ
      },
    })
  } catch (error) {
    console.error("บันทึกสินค้าไม่ได้:", error)
  }

  revalidatePath("/")
  redirect("/")
}