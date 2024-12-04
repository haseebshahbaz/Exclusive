import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProductCard } from '../../../components/ui/product-card'

export function BestSelling() {
  const products = [
    {
      name: "The North Coat",
      image: "/placeholder.svg?height=250&width=250",
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65
    },
    {
      name: "Gucci Duffle Bag",
      image: "/placeholder.svg?height=250&width=250",
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 65
    },
    {
      name: "RGB liquid CPU Cooler",
      image: "/placeholder.svg?height=250&width=250",
      price: 160,
      originalPrice: 170,
      rating: 4,
      reviews: 65
    },
    {
      name: "Small Bookself",
      image: "/placeholder.svg?height=250&width=250",
      price: 360,
      originalPrice: 400,
      rating: 5,
      reviews: 65
    }
  ]

  return (
    <section className="container py-[70px]">
      <div className="flex items-center gap-[87px] mb-[60px]">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
          <h2 className="text-base font-semibold text-[#DB4444]">This Month</h2>
        </div>
        <div className="flex items-end justify-between w-full">
          <h3 className="text-4xl font-semibold">Best Selling Products</h3>
          <button className="bg-[#DB4444] text-white text-base font-medium px-12 py-4 rounded-[4px]">
            View All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[30px]">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

