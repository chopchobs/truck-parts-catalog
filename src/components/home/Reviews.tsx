export default function Reviews() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">เสียงตอบรับจากเถ้าแก่และช่าง</h2>
          <p className="text-slate-500">ความไว้วางใจจากลูกค้าที่ใช้บริการ อู่ ช.รวมช่าง</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* รีวิว 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:-translate-y-1 transition-transform">
            <div className="text-teal-500 text-xl mb-4">★★★★★</div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              "หาอะไหล่ HINO 500 Series Dominator พวกของเฉพาะทางหายากมาก มาเจอที่นี่ของแท้ ส่งไวมากครับ แนะนำเลย"
            </p>
            <div className="font-bold text-slate-800">- เสี่ยตั้ม ขนส่ง</div>
          </div>
          
          {/* รีวิว 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:-translate-y-1 transition-transform">
            <div className="text-teal-500 text-xl mb-4">★★★★★</div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              "รถสิบล้อมีปัญหา สั่งอะไหล่ด่วน ช่างให้คำปรึกษาดีมากครับ ราคาเป็นกันเอง อธิบายละเอียด ไม่ฟันลูกค้า"
            </p>
            <div className="font-bold text-slate-800">- เฮียชัย โลจิสติกส์</div>
          </div>
          
          {/* รีวิว 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:-translate-y-1 transition-transform">
            <div className="text-teal-500 text-xl mb-4">★★★★★</div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              "จัดส่งรวดเร็ว แพ็คของมาดีมาก ได้รับของครบถ้วนตามที่สั่ง ระบบเว็บใช้งานง่าย ซื้อซ้ำแน่นอนครับ"
            </p>
            <div className="font-bold text-slate-800">- ช่างหนุ่ม อู่ซ่อมรถ</div>
          </div>
        </div>
      </div>
    </section>
  );
}