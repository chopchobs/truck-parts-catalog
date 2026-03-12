import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/src/lib/prisma";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        // 💡 ทริคพิเศษ: ถ้าตาราง User ว่างเปล่า ให้สร้างแอดมินเริ่มต้นให้อัตโนมัติ
        const userCount = await prisma.user.count();
        if (userCount === 0) {
          const hashedPassword = await bcrypt.hash("123456", 10);
          await prisma.user.create({
            data: { username: "admin", password: hashedPassword, name: "Admin Chop" }
          });
        }

        // 1. ค้นหา User ในฐานข้อมูล
        const user = await prisma.user.findUnique({
          where: { username: credentials.username }
        });

        if (!user) return null;

        // 2. เช็กรหัสผ่านว่าตรงไหม
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) return null;

        // 3. ถ้าผ่านหมด ส่งข้อมูลกลับไปให้ระบบ
        return { id: user.id, name: user.name, username: user.username };
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login", // ถ้ายังไม่ล็อคอิน ให้เด้งไปหน้านี้
  },
});

export { handler as GET, handler as POST };