import Image, { StaticImageData } from 'next/image'
import { Heart, Eye } from 'lucide-react'
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  image: StaticImageData | string  ;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  discount?: number;
  showDeleteIcon?: boolean;
}

export function ProductCard({ name, image, price, originalPrice, rating, reviews, discount }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative aspect-[270/250] bg-[#F5F5F5] rounded-[4px] overflow-hidden">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-contain p-5"
        />
        {discount && (
          <div className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-normal px-3 py-1 rounded-[4px]">
            -{discount}%
          </div>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-[34px] h-[34px] flex items-center justify-center bg-white rounded-full hover:bg-[#DB4444] hover:text-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-[34px] h-[34px] flex items-center justify-center bg-white rounded-full hover:bg-[#DB4444] hover:text-white transition-colors">
          <Link href='/product/1'><Eye className="w-5 h-5" /></Link>
          </button>
        </div>
        <button className="absolute bottom-0 left-0 right-0 h-[41px] bg-black text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Add To Cart
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-base font-medium text-[#000000]">{name}</h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-base font-medium text-[#DB4444]">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-base font-medium text-[#000000]/50 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-[16px] h-[16px] ${
                  i < rating ? 'text-[#FFAD33]' : 'text-[#000000]/25'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-[#000000]/50">({reviews})</span>
        </div>
      </div>
    </div>
  )
}

