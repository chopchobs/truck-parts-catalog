import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const cat = await prisma.category.create({ data: { name: 'อะไหล่ช่วงล่าง' } })
  await prisma.product.create({
    data: {
      partNumber: 'TRK-001',
      name: 'ลูกหมากคันชัก Hino',
      price: 1500,
      categoryId: cat.id,
      stock: 10
    }
  })
  console.log('✅ Seed สำเร็จ!')
}
main().finally(() => prisma.$disconnect())