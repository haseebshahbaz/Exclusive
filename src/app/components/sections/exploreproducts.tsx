import { ProductCard } from '@/components/ui/product-card'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; // MdChevronLeft and MdChevronRight for the carousel navigation icons
import EOP1 from "../../../assets/EOPImage1.png"
import EOP2 from "../../../assets/EOPImage2.png"
import EOP3 from "../../../assets/EOPImage3.png"
import EOP4 from "../../../assets/EOPImage4.png"
import EOP5 from "../../../assets/EOPImage5.png"
import EOP6 from "../../../assets/EOPImage6.png"
import EOP7 from "../../../assets/EOPImage7.png"
import EOP8 from "../../../assets/EOPImage8.png"

const products = [
  {
    name: "Breed Dry Dog Food",
    image: EOP1.src,
    price: 100,
    rating: 5,
    reviews: 35,
    isNew: true
  },
  {
    name: "CANON EOS DSLR Camera",
    image: EOP2.src,
    price: 360,
    rating: 4,
    reviews: 95,
    addToCart: true
  },
  {
    name: "ASUS FHD Gaming Laptop",
    image: EOP3.src,
    price: 700,
    originalPrice: 800,
    rating: 5,
    reviews: 325,
    isNew: true
  },
  {
    name: "Curology Product Set",
    image: EOP4.src,
    price: 500,
    rating: 4,
    reviews: 145
  },
  {
    name: "Kids Electric Car",
    image: EOP5.src,
    price: 960,
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ['#FF0000', '#0000FF']
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    image: EOP6.src,
    price: 1160,
    rating: 5,
    reviews: 35,
    colors: ['#FF0000', '#FFFF00']
  },
  {
    name: "GP11 Shooter USB Gamepad",
    image: EOP7.src,
    price: 660,
    rating: 4,
    reviews: 55,
    isNew: true
  },
  {
    name: "Quilted Satin Jacket",
    image: EOP8.src,
    price: 660,
    rating: 4,
    reviews: 55,
    colors: ['#000000', '#FB5607', '#FFBE0B']
  }
]

export function ExploreProducts() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
            <h3 className="text-[#DB4444] text-base font-semibold">Our Products</h3>
          </div>
          <h2 className="text-4xl font-semibold">Explore Our Products</h2>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.name} className="relative">
            {product.isNew && (
              <div className="absolute top-3 left-3 bg-[#00FF66] text-black px-3 py-1 rounded-md">
                New
              </div>
            )}
            <ProductCard {...product} />
            {product.colors && (
              <div className="mt-2 flex gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="w-5 h-5 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            )}
            {product.addToCart && (
              <button className="mt-2 w-full py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors">
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="px-12 py-4 bg-[#DB4444] text-white rounded-md hover:bg-[#DB4444]/90 transition-colors">
          View All Products
        </button>
      </div>
    </section>
  )
}

