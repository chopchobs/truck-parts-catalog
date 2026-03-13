import prisma from "../lib/prisma";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Ourstory from "../components/home/Ourstory";
import Hero from "../components/home/Hero";
import ProductList from "../components/home/ProductList"; // เพิ่มตัวนี้
import Services from "../components/home/Service";
import Brands from "../components/home/Brands";
import Reviews from "../components/home/Reviews";
import CallToAction from "../components/home/CallToAction";

export default async function HomePage() {
  // หาสินค้าใน cloud-supabase และส่งไปให้ List
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' } // ล่าสุดขึ้นก่อน
  });

  return (
    <main>
      <Navbar />
      <Hero />
      <Brands/>
      <Services />
      {/* <ProductList products={products} /> */}
      {/* <Reviews/> */}
      <Ourstory />
      <CallToAction/>
      <Footer />
    </main>
  );
}