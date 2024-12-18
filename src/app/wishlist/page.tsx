import { Button } from "@/components/ui/button"
import FS1 from "../../assets/FSImage1.png"
import FS2 from "../../assets/FSImage2.png"
import FS3 from "../../assets/FSImage3.png"
import FS4 from "../../assets/FSImage4.png"
import BS1 from "../../assets/BSPImage1.png"
import BS2 from "../../assets/BSPImage2.png"
import BS3 from "../../assets/BSPImage3.png"
import BS4 from "../../assets/BSPImage4.png"
import { ProductCard } from '@/components/ui/product-card'
import Link from "next/link"

export default function WishlistPage() {
  const wishlistItems = [
    {
      name: "HAVIT HV-G92 Gamepad",
      image: FS1.src,
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      discount: 40
    },
    {
      name: "AK-900 Wired Keyboard",
      image: FS2.src,
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
      discount: 35
    },
    {
      name: "IPS LCD Gaming Monitor",
      image: FS3.src,
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      discount: 30
    },
    {
      name: "S-Series Comfort Chair",
      image: FS4.src,
      price: 375,
      originalPrice: 400,
      rating: 4,
      reviews: 99,
      discount: 25
    }
  ]

  const justForYouItems = [
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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-[80px]">
      {/* Breadcrumb */}
      <div className="flex items-center gap-[13px] mb-[80px]">
        <Link href="/" className="text-[#000000]/50 text-sm font-normal hover:text-[#000000]/70 transition-colors">
          Home
        </Link>
        <span className="text-[#000000]/50 text-sm">/</span>
        <span className="text-sm font-normal">Wishlist</span>
      </div>

      {/* Wishlist Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-[20px] font-medium">Wishlist ({wishlistItems.length})</h1>
        <Button 
          variant="outline"
          className="h-[56px] px-12 border-[#000000]/20 text-base hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors"
        >
          Move All To Bag
        </Button>
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {wishlistItems.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>

      {/* Just For You Section */}
      <div className="mt-[140px]">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
          <h2 className="text-[#DB4444] text-base font-semibold">Just For You</h2>
        </div>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[32px] font-medium">Just For You</h2>
          <Button 
            variant="outline"
            className="h-[46px] px-12 border-[#000000]/20 text-base hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors"
          >
            See All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {justForYouItems.map((item) => (
            <ProductCard key={item.name} {...item} showDeleteIcon={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

