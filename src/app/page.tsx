import AllProduct from "@/components/AllProduct";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import PriceDownProduct from "@/components/PriceDownProduct";
import PriceUpProduct from "@/components/PriceUpProduct";

export default function Home() {
  return (
    <div>
      <Banner />
      <PriceUpProduct />
      <PriceDownProduct />
      <AllProduct />
      <Footer />
    </div>
  );
}
