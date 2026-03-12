"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // เรียกใช้ระบบ Login ของ NextAuth
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      setLoading(false);
    } else {
      router.push("/admin"); // ล็อคอินสำเร็จ ให้พาเข้าหน้า Dashboard
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 font-sans p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
        {/* แถบสีตกแต่ง */}
        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-teal-400 to-cyan-500"></div>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-teal-700 text-white rounded-2xl flex items-center justify-center font-black text-3xl mx-auto mb-4 shadow-lg shadow-teal-700/30">
            CR
          </div>
          <h1 className="text-2xl font-black text-slate-800">เข้าสู่ระบบหลังบ้าน</h1>
          <p className="text-slate-500 text-sm mt-1">อู่ ช.รวมช่าง ระบบจัดการคลังสินค้า</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-100 text-center font-bold">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">ชื่อผู้ใช้งาน (Username)</label>
            <input 
              type="text" 
              name="username" 
              required 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all" 
              placeholder="กรอกชื่อผู้ใช้งาน"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">รหัสผ่าน (Password)</label>
            <input 
              type="password" 
              name="password" 
              required 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all" 
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-600/30 transition-all mt-4 disabled:opacity-50"
          >
            {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
          </button>
        </form>
      </div>
    </div>
  );
}