import { Search, Heart, ShoppingCart } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="py-6 border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold">
          Exclusive
        </a>
        
        <nav className="hidden md:flex items-center space-x-12">
          <a href="/" className="text-base font-medium">Home</a>
          <a href="/contact" className="text-base">Contact</a>
          <a href="/about" className="text-base">About</a>
          <a href="/sign-up" className="text-base">Sign Up</a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="relative w-[243px]">
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="w-full bg-[#F5F5F5] border-none text-sm pl-4 pr-10 py-2 rounded"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
          </div>
          
          <button className="p-2">
           <a href='./wishlist'><Heart className="h-6 w-6" /></a>
          </button>
          
          <button className="p-2">
          <a href='./cart'><ShoppingCart className="h-6 w-6" /></a>
          </button>
        </div>
      </div>
    </header>
  )
}

