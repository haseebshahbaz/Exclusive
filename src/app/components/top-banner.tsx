export function TopBanner() {
  return (
    <div className="w-full bg-black text-white py-3 md:h-12 flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="hidden md:block" />
        <p className="text-xs md:text-sm font-normal text-center mb-2 md:mb-0">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a href="#" className="font-medium hover:underline">
            ShopNow
          </a>
        </p>
        <div className="mt-2 md:mt-0">
          <select className="bg-black text-white border-none outline-none text-xs md:text-sm font-normal cursor-pointer">
            <option>English</option>
          </select>
        </div>
      </div>
    </div>
  )
}

