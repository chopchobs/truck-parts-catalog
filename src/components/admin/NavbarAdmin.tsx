import { getServerSession } from "next-auth";

// 💡 เติมคำว่า async เข้าไป เพื่อให้ดึงข้อมูลจาก Server ได้
export default async function NavbarAdmin() {
  
  // 1. ดึงข้อมูล Session ของคนที่ล็อคอินอยู่
  const session = await getServerSession();

  // 2. ดึงชื่อผู้ใช้ (ถ้าไม่มีให้แสดงคำว่า "แอดมิน" แทน)
  const displayName = session?.user?.name || "Admin";

  // 3. ตัดเอาตัวอักษร 2 ตัวแรกมาทำเป็นรูปโปรไฟล์ และทำให้เป็นตัวพิมพ์ใหญ่
  const avatarText = displayName.substring(0, 2).toUpperCase();

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
      <h1 className="text-lg font-bold text-slate-700">ระบบจัดการคลังสินค้า</h1>
      
      <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
        <div className="text-right hidden md:block">
          
          {/* 👇 โชว์ชื่อจริงๆ จากฐานข้อมูล */}
          <p className="text-sm font-bold text-slate-700 leading-none">{displayName}</p>
          <span className="text-[10px] text-teal-500 font-bold uppercase">Online</span>
        
        </div>
        
        {/* 👇 โชว์ตัวอักษรย่อ 2 ตัวแรก */}
        <div className="w-9 h-9 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold shadow-sm tracking-widest">
          {avatarText}
        </div>
      </div>
    </header>
  );
}