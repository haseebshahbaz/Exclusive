import { Heart } from 'lucide-react'
import { Star } from 'lucide-react'

interface ProductCardProps {
  name: string
  image: string
  price: number
  originalPrice: number
  rating: number
  reviews: number
  discount?: number
}

export function ProductCard({
  name,
  image,
  price,
  originalPrice,
  rating,
  reviews,
  discount
}: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative aspect-square bg-[#F5F5F5] rounded-[4px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {discount && (
          <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-normal py-1 px-2 rounded">
            -{discount}%
          </span>
        )}
        <button className="absolute top-3 right-3 w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-base font-medium">{name}</h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-base font-medium text-[#DB4444]">${price}</span>
          <span className="text-base font-medium text-[#666] line-through">${originalPrice}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'fill-[#FFAD33] stroke-[#FFAD33]' : 'fill-none stroke-[#666]'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[#666]">({reviews})</span>
        </div>
      </div>
    </div>
  )
}

