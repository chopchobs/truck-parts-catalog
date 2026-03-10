"use server"

import prisma from "@/src/lib/prisma";
import { revalidatePath } from "next/cache"

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string
  
  if (!name) return;
  await prisma.category.create({
    data: { name }
  })
  // ล้างแคชเพื่อให้หน้า Admin เห็นหมวดหมู่ใหม่ทันที
  revalidatePath("/admin/add")
  revalidatePath("/admin/category")
}