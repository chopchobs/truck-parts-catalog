import ProductCard, { ProductType } from '../common/ProductCard'; // ดึง ProductCard 

interface ProductListProps {
  products: ProductType[]; // ใช้ Type จาก ProductCard
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-slate-800 uppercase">สินค้าแนะนำ</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-2"></div>
        </div>
        
        {/* เรียกใช้ ProductCard แล้วโยนข้อมูลเข้าไปทีละชิ้น */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* ถ้าไม่มีสินค้าให้โชว์ข้อความนี้ */}
        {products.length === 0 && (
          <div className="text-center py-10 text-gray-400 border-2 border-dashed rounded-xl">
            ยังไม่มีสินค้าในระบบ
          </div>
        )}
      </div>
    </section>
  );
}