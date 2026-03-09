import prisma from "@/src/lib/prisma";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Ourstory from "../components/home/Ourstory";
import Hero from "../components/home/Hero";

export default async function HomePage() {
  const products = await prisma.product.findMany({
    include: { category: true }
  });

  return (
  <div>
    <Navbar/>
    <Hero/>
    <Ourstory/>
    <Footer/>
  </div>
  );
}