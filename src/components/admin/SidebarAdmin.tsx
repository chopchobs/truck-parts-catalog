import Link from "next/link";
import LogoutButton from "@/src/app/admin/LogoutButton";
export default function SidebarAdmin() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-2xl z-10 h-screen sticky top-0">
      <div className="p-6 border-b border-slate-800">
        <h2 className="text-2xl font-black text-teal-400 tracking-tighter uppercase">Admin Panel</h2>
        <p className="text-xs text-slate-400 mt-1">อู่ ช.รวมช่าง</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/admin" className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">📊 Dashboard</Link>
        <Link href="/admin/add" className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">➕ เพิ่มสินค้าใหม่</Link>
        <Link href="/admin/category" className="block px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">📑 จัดการหมวดหมู่</Link>
      </nav>
      <div className="p-4 border-t border-slate-800">
        <Link href="/" className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm text-center text-slate-300 bg-slate-800 hover:text-white hover:bg-slate-700 rounded-xl transition-colors">🏠 กลับหน้าร้าน</Link>
        <LogoutButton />
      </div>
    </aside>
  );
}