import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function SidebarAndCarousel() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
  ]

  return (
    <div className="container flex gap-[45px] pt-10">
      <aside className="w-[217px]">
        <nav className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <a
              key={category}
              href="#"
              className="flex items-center justify-between text-base font-normal text-black hover:text-black/80"
            >
              {category}
              {(index === 0 || index === 1) && (
                <ChevronRight className="h-5 w-5 text-black" />
              )}
            </a>
          ))}
        </nav>
      </aside>

      <div className="flex-1 bg-black rounded-[4px] overflow-hidden">
        <div className="pl-[65px] pr-[49px] py-[58px] flex items-center">
          <div className="flex-1">
            <div className="flex flex-col text-white">
              <Image 
                src="/apple.svg" 
                alt="Apple" 
                width={40} 
                height={49} 
                className="mb-[32px]"
              />
              <h1 className="text-[48px] font-semibold leading-[60px] mb-[19px]">
                iPhone 14 Series
              </h1>
              <p className="text-base font-normal mb-[32px]">
                Up to 10% off Voucher
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-base font-medium"
              >
                <span className="underline">Shop Now</span>
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <Image 
              src="/iphone-14.png" 
              alt="iPhone 14" 
              width={496} 
              height={352} 
              className="ml-auto"
            />
          </div>
        </div>
        <div className="flex justify-center gap-[10px] pb-[40px]">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <button
              key={i}
              className={`w-[12px] h-[12px] rounded-full ${
                i === 2 ? 'bg-[#DB4444]' : 'bg-[#666666]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

