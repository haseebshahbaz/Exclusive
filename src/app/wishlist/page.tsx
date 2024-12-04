import { ProductCard } from "@/components/ui/product-card"
import { Button } from "@/components/ui/button"

export default function WishlistPage() {
  const wishlistItems = [
    {
      name: "Gucci duffle bag",
      image: "/placeholder.svg",
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 65,
      discount: 15
    },
    {
      name: "RGB liquid CPU Cooler",
      image: "/placeholder.svg",
      price: 160,
      originalPrice: 170,
      rating: 4,
      reviews: 65
    },
    {
      name: "GP11 Shooter USB Gamepad",
      image: "/placeholder.svg",
      price: 550,
      originalPrice: 600,
      rating: 4,
      reviews: 65,
      isNew: true
    },
    {
      name: "Quilted Satin Jacket",
      image: "/placeholder.svg",
      price: 750,
      originalPrice: 800,
      rating: 4,
      reviews: 65
    }
  ]

  return (
    <div className="container py-20">
      <div className="flex items-center gap-3 mb-20">
        <a href="/" className="text-black/60">Home</a>
        <span>/</span>
        <span>Wishlist</span>
      </div>

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl">Wishlist ({wishlistItems.length})</h1>
        <Button>Move All To Bag</Button>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {wishlistItems.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>

      <div className="mt-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl">Just For You</h2>
          <Button variant="outline">See All</Button>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <ProductCard
              key={i}
              name="Gaming Product"
              image="/placeholder.svg"
              price={160}
              originalPrice={170}
              rating={4}
              reviews={65}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

