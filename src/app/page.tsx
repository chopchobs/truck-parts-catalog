import prisma from "../lib/prisma";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Ourstory from "../components/home/Ourstory";
import Hero from "../components/home/Hero";
import ProductList from "../components/home/ProductList"; // เพิ่มตัวนี้

export default async function HomePage() {
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' } // ล่าสุดขึ้นก่อน
  });

  return (
    <main>
      <Navbar />
      <ProductList products={products} />
      <Hero />
      <Ourstory />
      <Footer />
    </main>
  );
}