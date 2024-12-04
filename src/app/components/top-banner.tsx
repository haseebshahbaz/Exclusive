export function TopBanner() {
  return (
    <div className="w-full bg-black text-white h-12 flex items-center">
      <div className="container flex items-center justify-between">
        <div className="flex-1" />
        <p className="text-sm font-normal text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a href="#" className="font-semibold underline">
            ShopNow
          </a>
        </p>
        <div className="flex-1 flex justify-end">
          <select className="bg-black text-white border-none outline-none text-sm font-normal">
            <option>English</option>
          </select>
        </div>
      </div>
    </div>
  )
}

