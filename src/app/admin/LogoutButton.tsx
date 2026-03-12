"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  
  const handleLogout = async () => {
    // 1. สั่ง NextAuth ลบ Cookie/Session ทิ้ง (สั่งให้ลบเงียบๆ ไม่ต้องเด้งเอง)
    await signOut({ redirect: false });
    
    // 2. บังคับโหลดหน้าเว็บใหม่ (Hard Refresh) เพื่อเตะกลับไปหน้า Login และเคลียร์ Cache 100%
    window.location.href = "/admin/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 text-sm text-center text-red-400 bg-red-950/30 hover:text-white hover:bg-red-600 rounded-xl transition-colors font-bold border border-red-900/50"
    >
      🚪 ออกจากระบบ
    </button>
  );
}