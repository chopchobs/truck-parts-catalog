import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/admin/login", 
  },
})

// 🎯 เปลี่ยนเป็นคลุมโฟลเดอร์ admin และลูกๆ ของมันทั้งหมด แบบไม่มีข้อยกเว้น!
export const config = {
  matcher: ["/admin/:path*"]
} 