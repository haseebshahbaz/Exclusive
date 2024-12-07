import { ProductCard } from "@/components/ui/product-card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"; // MdChevronLeft and MdChevronRight for the carousel navigation icons
import img1 from "../../../assets/FSImage1.png";
import img2 from "../../../assets/FSImage2.png";
import img3 from "../../../assets/FSImage3.png";
import img4 from "../../../assets/FSImage4.png";

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    image: img1,
    price: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
    discount: 40,
  },
  {
    name: "AK-900 Wired Keyboard",
    image: img2,
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    discount: 35,
  },
  {
    name: "IPS LCD Gaming Monitor",
    image: img3,
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    discount: 30,
  },
  {
    name: "S-Series Comfort Chair",
    image: img4,
    price: 375,
    originalPrice: 400,
    rating: 4,
    reviews: 99,
    discount: 25,
  },
];

export function FlashSales() {
  return (
    <section className="container mx-auto px-4 py-[70px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
            <h3 className="text-[#DB4444] text-base font-semibold">Today's</h3>
          </div>
          <h2 className="text-4xl font-semibold">Flash Sales </h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-[32px] leading-10 font-semibold">03</span>
            <span className="text-xs text-[#000000] mt-1">Days</span>
          </div>
          <span className="text-[32px] leading-10 font-semibold mb-5">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[32px] leading-10 font-semibold">23</span>
            <span className="text-xs text-[#000000] mt-1">Hours</span>
          </div>
          <span className="text-[32px] leading-10 font-semibold mb-5">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[32px] leading-10 font-semibold">19</span>
            <span className="text-xs text-[#000000] mt-1">Minutes</span>
          </div>
          <span className="text-[32px] leading-10 font-semibold mb-5">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[32px] leading-10 font-semibold">56</span>
            <span className="text-xs text-[#000000] mt-1">Seconds</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4 lg:mt-0">
          <button
            className="w-[46px] h-[46px] flex items-center justify-center border border-black/5 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors group"
            aria-label="Previous category"
          >
            <MdChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            className="w-[46px] h-[46px] flex items-center justify-center border border-black/5 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors group"
            aria-label="Next category"
          >
            <MdChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-[60px]">
        <button className="h-[56px] px-12 bg-[#DB4444] hover:bg-[#DB4444]/90 text-white text-base font-medium transition-colors rounded-[4px]">
          View All Products
        </button>
      </div>
    </section>
  );
}
