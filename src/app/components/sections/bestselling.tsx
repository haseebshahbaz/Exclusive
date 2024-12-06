import { ProductCard } from "@/components/ui/product-card"
import BS1 from "../../../assets/BSPImage1.png"
import BS2 from "../../../assets/BSPImage2.png"
import BS3 from "../../../assets/BSPImage3.png"
import BS4 from "../../../assets/BSPImage4.png"

const products = [
  {
    name: "The north coat",
    image: BS4.src,
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65
  },
  {
    name: "Gucci duffle bag",
    image: BS3.src,
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 65
  },
  {
    name: "RGB liquid CPU Cooler",
    image: BS2.src,
    price: 160,
    originalPrice: 170,
    rating: 4,
    reviews: 65
  },
  {
    name: "Small BookSelf",
    image: BS1.src,
    price: 360,
    rating: 5,
    reviews: 65
  }
]

export function BestSelling() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
            <h3 className="text-[#DB4444] text-base font-semibold">This Month</h3>
          </div>
          <h2 className="text-4xl font-semibold">Best Selling Products</h2>
        </div>
        <button className="mt-4 md:mt-0 px-12 py-4 bg-[#DB4444] text-white rounded-md hover:bg-[#DB4444]/90 transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

