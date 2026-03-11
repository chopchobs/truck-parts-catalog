import React from 'react';

// กำหนด Type ของสินค้าให้ชัดเจน (เวลาพิมพ์ product. จะได้มี Auto-complete ขึ้นมาช่วยครับ)
export interface ProductType {
  id: string;
  name: string;
  partNumber: string;
  brand: string | null;
  price: number;
  category: { name: string };
  imageUrl?: string | null;
}

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
      {/* ส่วนรูปภาพ */}
      <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <span className="text-xs font-bold text-gray-400 uppercase">No Image</span>
        )}
        
        {/* Badge ยี่ห้อ */}
        {product.brand && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded shadow-md uppercase font-bold">
            {product.brand}
          </span>
        )}
      </div>
      
      {/* ส่วนข้อมูล */}
      <div className="p-5">
        <p className="text-[10px] font-bold text-blue-500 uppercase mb-1">{product.category?.name}</p>
        <h3 className="text-lg font-bold text-slate-800 leading-tight h-12 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-slate-400 mb-4 uppercase font-mono">PN: {product.partNumber}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-black text-slate-900">฿{product.price.toLocaleString()}</span>
          <button className="bg-slate-900 text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            รายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
}