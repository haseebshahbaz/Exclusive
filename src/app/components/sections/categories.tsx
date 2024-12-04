import { ChevronLeft, ChevronRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react'

export function Categories() {
  const categories = [
    { name: 'Phones', icon: Smartphone },
    { name: 'Computers', icon: Monitor },
    { name: 'SmartWatch', icon: Watch },
    { name: 'Camera', icon: Camera },
    { name: 'HeadPhones', icon: Headphones },
    { name: 'Gaming', icon: Gamepad },
  ]

  return (
    <section className="container py-[70px]">
      <div className="flex items-center gap-[87px] mb-[60px]">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
          <h2 className="text-base font-semibold text-[#DB4444]">Categories</h2>
        </div>
        <div className="flex items-end gap-[85px]">
          <h3 className="text-4xl font-semibold">Browse By Category</h3>
          <div className="flex gap-2">
            <button className="w-[46px] h-[46px] flex items-center justify-center border border-black rounded-full">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-[46px] h-[46px] flex items-center justify-center border border-black rounded-full">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-[30px]">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <button
              key={category.name}
              className={`aspect-square rounded-[4px] flex flex-col items-center justify-center gap-4 border border-black/5 hover:bg-[#DB4444] hover:text-white transition-colors ${
                index === 3 ? 'bg-[#DB4444] text-white' : 'bg-white text-black'
              }`}
            >
              <Icon className="w-14 h-14" />
              <span className="text-base font-normal">{category.name}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

