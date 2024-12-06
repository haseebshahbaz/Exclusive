"use client"

import { 
  FaMobileAlt,  // Phones icon
  FaDesktop,    // Computers icon
  FaApple,      // SmartWatch icon
  FaCamera,     // Camera icon
  FaHeadphones, // Headphones icon
  FaGamepad     // GameController icon
} from 'react-icons/fa'; // Fa prefix represents FontAwesome icons

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; // MdChevronLeft and MdChevronRight for the carousel navigation icons

const categories = [
  { name: 'Phones', icon: FaMobileAlt },
  { name: 'Computers', icon: FaDesktop },
  { name: 'SmartWatch', icon: FaApple },
  { name: 'Camera', icon: FaCamera },
  { name: 'HeadPhones', icon: FaHeadphones },
  { name: 'Gaming', icon: FaGamepad },
]

export function Categories() {
  return (
    <section className="container mx-auto px-4 py-[70px]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-[60px]">
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
            <h3 className="text-[#DB4444] text-base font-semibold">Categories</h3>
          </div>
          <h2 className="text-[36px] font-medium">Browse By Category</h2>
        </div>
        <div className="flex gap-2 mt-4 lg:mt-0">
          <button 
            className="w-[46px] h-[46px] flex items-center justify-center border border-black/5 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors group"
            aria-label="Previous category"
          >
            <MdChevronLeft 
              className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" 
            />
          </button>
          <button 
            className="w-[46px] h-[46px] flex items-center justify-center border border-black/5 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors group"
            aria-label="Next category"
          >
            <MdChevronRight 
              className="w-6 h-6 transition-transform group-hover:translate-x-0.5" 
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[30px]">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <button
              key={category.name}
              className={`
                group aspect-square rounded-[4px] flex flex-col items-center justify-center gap-4
                border border-black/5 transition-all duration-200
                ${index === 3 
                  ? 'bg-[#DB4444] text-white' 
                  : 'bg-white text-black hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]'
                }
              `}>
              <Icon 
                className={`
                  w-14 h-14 transition-transform duration-200
                  group-hover:scale-110 group-hover:transform
                  ${index === 3 ? 'scale-110' : ''}
                `} 
              />
              <span className="text-base font-normal">{category.name}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
