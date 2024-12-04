import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProductCard } from '../../../components/ui/product-card'

export function FlashSales() {
  const products = [
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "/placeholder.svg?height=250&width=250",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      discount: 40
    },
    {
      name: "AK-900 Wired Keyboard",
      image: "/placeholder.svg?height=250&width=250",
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
      discount: 35
    },
    {
      name: "IPS LCD Gaming Monitor",
      image: "/placeholder.svg?height=250&width=250",
      price: 370,
      originalPrice: 400,
      rating: 4,
      reviews: 99,
      discount: 30
    },
    {
      name: "S-Series Comfort Chair",
      image: "/placeholder.svg?height=250&width=250",
      price: 375,
      originalPrice: 400,
      rating: 4,
      reviews: 99,
      discount: 25
    }
  ]

  return (
    <section className="container py-[70px]">
      <div className="flex items-center gap-[87px] mb-[40px]">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
          <h2 className="text-base font-semibold text-[#DB4444]">Today's</h2>
        </div>
        <div className="flex items-end gap-[85px]">
          <div>
            <h3 className="text-4xl font-semibold mb-3">Flash Sales</h3>
            <div className="flex gap-4 text-base">
              <div>
                <span className="font-semibold">Days</span>
                <br />
                <span className="font-bold">03</span>
              </div>
              <span className="font-bold">:</span>
              <div>
                <span className="font-semibold">Hours</span>
                <br />
                <span className="font-bold">23</span>
              </div>
              <span className="font-bold">:</span>
              <div>
                <span className="font-semibold">Minutes</span>
                <br />
                <span className="font-bold">19</span>
              </div>
              <span className="font-bold">:</span>
              <div>
                <span className="font-semibold">Seconds</span>
                <br />
                <span className="font-bold">56</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-[46px] h-[46px] flex items-center justify-center border border-black rounded-full">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-[46px] h-[46px] flex items-center justify-center border border-black rounded-full">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[30px]">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-[60px]">
        <button className="bg-[#DB4444] text-white text-base font-medium px-12 py-4 rounded-[4px]">
          View All Products
        </button>
      </div>
    </section>
  )
}

