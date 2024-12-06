import { Heart, Minus, Plus, Star, Truck, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/product-card"
import img1 from "../../../assets/ProductImage (1).png"
import img2 from "../../../assets/ProductImage (2).png"
import img3 from "../../../assets/ProductImage (3).png"
import img4 from "../../../assets/ProductImage (4).png"
import img5 from "../../../assets/ProductImage (5).png"
import FS1 from "../../../assets/FSImage1.png"
import FS2 from "../../../assets/FSImage2.png"
import FS3 from "../../../assets/FSImage3.png"
import FS4 from "../../../assets/FSImage4.png"

export default function ProductPage() {
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

  return (
    <div className="container py-20">
      <div className="flex items-center gap-3 mb-20">
        <a href="/" className="text-black/60">Account</a>
        <span>/</span>
        <a href="/gaming" className="text-black/60">Gaming</a>
        <span>/</span>
        <span>Havic HV G-92 Gamepad</span>
      </div>

      <div className="grid grid-cols-2 gap-16 mb-20">
        <div className="flex gap-8">
          <div className="space-y-4">
            {[img2, img3, img4, img5].map((i) => (
              <img
                key={i}
                src={i.src}
                alt={`Product view ${i}`}
                className="w-24 h-24 object-cover rounded cursor-pointer"
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={img1.src}
              alt="Product main view"
              className="w-full aspect-square object-cover rounded"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-medium mb-4">Havic HV G-92 Gamepad</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFAD33] stroke-[#FFAD33]" />
              ))}
            </div>
            <span className="text-sm text-black/60">(150 Reviews)</span>
            <span className="text-sm text-[#0F6]">In Stock</span>
          </div>
          <div className="text-2xl mb-6">$192.00</div>
          <p className="text-sm text-black/60 mb-6">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive...
          </p>

          <div className="space-y-6 pb-6 border-b">
            <div>
              <div className="text-base mb-2">Colours:</div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-black" />
                <button className="w-8 h-8 rounded-full bg-red-500" />
              </div>
            </div>

            <div>
              <div className="text-base mb-2">Size:</div>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="w-8 h-8 border rounded flex items-center justify-center text-sm"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="inline-flex items-center border rounded">
                <button className="p-2"><Minus className="w-4 h-4" /></button>
                <span className="w-12 text-center">2</span>
                <button className="p-2"><Plus className="w-4 h-4" /></button>
              </div>
              <Button className="bg-[#DB4444] hover:bg-[#DB4444]/90">Buy Now</Button>
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="border rounded p-4">
              <div className="flex items-center gap-4">
                <Truck className="w-8 h-8" />
                <div>
                  <div className="font-medium">Free Delivery</div>
                  <div className="text-sm text-black/60">Enter your postal code for Delivery Availability</div>
                </div>
              </div>
            </div>
            <div className="border rounded p-4">
              <div className="flex items-center gap-4">
                <ArrowLeft className="w-8 h-8" />
                <div>
                  <div className="font-medium">Return Delivery</div>
                  <div className="text-sm text-black/60">Free 30 Days Delivery Returns. Details</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-medium mb-10">Related Items</h2>
        <div className="grid grid-cols-4 gap-8">
        {wishlistItems.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
        </div>
      </div>
    </div>
  )
}

