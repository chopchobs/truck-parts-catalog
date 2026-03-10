import React from 'react';

interface ProductListProps {
  products: any[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-slate-800 uppercase">สินค้าแนะนำ</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="group border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                <span className="text-xs font-bold text-gray-400 uppercase">No Image</span>
                {item.brand && (
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded shadow-md">
                    {item.brand}
                  </span>
                )}
              </div>
              
              <div className="p-5">
                <p className="text-[10px] font-bold text-blue-500 uppercase mb-1">{item.category?.name}</p>
                <h3 className="text-lg font-bold text-slate-800 leading-tight h-12 mb-2">{item.name}</h3>
                <p className="text-xs text-slate-400 mb-4 uppercase font-mono">PN: {item.partNumber}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-slate-900">฿{item.price.toLocaleString()}</span>
                  <button className="bg-slate-900 text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    รายละเอียด
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}