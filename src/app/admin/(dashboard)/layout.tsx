import NavbarAdmin from "@/src/components/admin/NavbarAdmin";
import SidebarAdmin from "@/src/components/admin/SidebarAdmin";
import React from "react";

// 💡 จุดที่ 1
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // 💡 จุดที่ 2: ดับเบิ้ลล็อค! เช็กเซสชั่นก่อนเลยว่ามีตัวตนไหม
  const session = await getServerSession();
  
  // 💡 จุดที่ 3: ถ้าไม่มี session (ยังไม่ล็อคอิน) เตะกลับหน้า login ทันที!
  if (!session) {
    redirect("/admin/login");
  }
  
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <SidebarAdmin />
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <NavbarAdmin />
        <div className="flex-1 overflow-auto p-8 bg-slate-50/50">
          {children}
        </div>
      </main>
    </div>
  );
}