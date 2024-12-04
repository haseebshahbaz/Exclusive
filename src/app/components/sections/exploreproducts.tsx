import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProductCard } from '../../../components/ui/product-card'

export function ExploreProducts() {
  const products = [
    {
      name: "Gaming Headphone",
      image: "/placeholder.svg?height=250&width=250",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 65,
      isNew: true
    },
    {
      name: "CANON EOS DSLR Camera",
      image: "/placeholder.svg?height=250&width=250",
      price: 360,
      originalPrice: 400,
      rating: 4,
      reviews: 95
    },
    {
      name: "ASUS FHD Gaming Laptop",
      image: "/placeholder.svg?height=250&width=250",
      price: 700,
      originalPrice: 800,
      rating: 5,
      reviews: 325,
      isNew: true
    },
    {
      name: "Curology Product Set",
      image: "/placeholder.svg?height=250&width=250",
      price: 500,
      originalPrice: 600,
      rating: 4,
      reviews: 145
    },
    {
      name: "Kids Electric Car",
      image: "/placeholder.svg?height=250&width=250",
      price: 960,
      originalPrice: 1160,
      rating: 5,
      reviews: 65,
      isNew: true
    },
    {
      name: "Jr. Zoom Soccer Cleats",
      image: "/placeholder.svg?height=250&width=250",
      price: 1160,
      originalPrice: 1260,
      rating: 4,
      reviews: 35
    },
    {
      name: "GP11 Shooter USB Gamepad",
      image: "/placeholder.svg?height=250&width=250",
      price: 660,
      originalPrice: 760,
      rating: 4,
      reviews: 55,
      isNew: true
    },
    {
      name: "Quilted Satin Jacket",
      image: "/placeholder.svg?height=250&width=250",
      price: 660,
      originalPrice: 760,
      rating: 4,
      reviews: 55
    }
  ]

  return (
    <section className="container py-[70px]">
      <div className="flex items-center gap-[87px] mb-[60px]">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
          <h2 className="text-base font-semibold text-[#DB4444]">Our Products</h2>
        </div>
        <div className="flex items-end justify-between w-full">
          <h3 className="text-4xl font-semibold">Explore Our Products</h3>
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

