import { Search, Heart, ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <header className="py-4 md:h-[86px] flex items-center border-b border-[#E5E5E5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <a href="/" className="text-2xl font-bold mb-4 md:mb-0">
            Exclusive
          </a>
          
          <nav className="flex items-center space-x-4 md:space-x-12 mb-4 md:mb-0">
            <a href="/" className="text-sm md:text-base font-medium">Home</a>
            <a href="/contact" className="text-sm md:text-base hover:text-black/70">Contact</a>
            <a href="/about" className="text-sm md:text-base hover:text-black/70">About</a>
            <a href="/sign-up" className="text-sm md:text-base hover:text-black/70">Sign Up</a>
          </nav>

          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none md:w-[243px]">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="w-full h-[38px] bg-[#F5F5F5] rounded-[4px] pl-4 md:pl-5 pr-10 text-xs placeholder:text-[#666666]"
              />
              <Search className="absolute right-3 md:right-[14px] top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-[#666666]" />
            </div>
            
            <button className="w-8 h-8 flex items-center justify-center hover:text-black/70">
            <a href="/wishlist"><Heart className="h-6 w-6" /></a>
            </button>
            
            <button className="w-8 h-8 flex items-center justify-center hover:text-black/70">
            <a href="/cart"><ShoppingCart className="h-6 w-6" /></a>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

