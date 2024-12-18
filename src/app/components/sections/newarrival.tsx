




// export function NewArrival() {
//   return (
//     <section className="container mx-auto px-4 py-16">
//       <div className="mb-12">
//         <div className="flex items-center gap-4 mb-3">
//           <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
//           <h3 className="text-[#DB4444] text-base font-semibold">Featured</h3>
//         </div>
//         <h2 className="text-4xl font-semibold">New Arrival</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-black rounded-md overflow-hidden">
//           <div className="p-8 h-full flex flex-col justify-between">
//             <img src={NA1.src} alt="PlayStation 5" className="w-full h-64 object-contain mb-4" />
//             <div>
//               <h3 className="text-2xl font-semibold text-white mb-2">PlayStation 5</h3>
//               <p className="text-white/70 mb-4">Black and White version of the PS5 coming out on sale.</p>
//               <a href="#" className="text-white underline">Shop Now</a>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-rows-2 gap-8">
//           <div className="bg-black rounded-md overflow-hidden">
//             <div className="p-8 h-full flex justify-between items-center">
//               <div>
//                 <h3 className="text-2xl font-semibold text-white mb-2">Women's Collections</h3>
//                 <p className="text-white/70 mb-4">Featured woman collections that give you another vibe.</p>
//                 <a href="#" className="text-white underline">Shop Now</a>
//               </div>
//               <img src={NA2.src} alt="Women's Collections" className="w-40 h-40 object-cover" />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-8">
//             <div className="bg-black rounded-md overflow-hidden">
//               <div className="p-6 h-full flex flex-col justify-between">
//                 <img src={NA4.src}alt="Speakers" className="w-full h-32 object-contain mb-4" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-2">Speakers</h3>
//                   <p className="text-white/70 mb-2">Amazon wireless speakers</p>
//                   <a href="#" className="text-white underline">Shop Now</a>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-black rounded-md overflow-hidden">
//               <div className="p-6 h-full flex flex-col justify-between">
//                 <img src={NA3.src} alt="Perfume" className="w-full h-32 object-contain mb-4" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-2">Perfume</h3>
//                   <p className="text-white/70 mb-2">GUCCI INTENSE OUD EDP</p>
//                   <a href="#" className="text-white underline">Shop Now</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import Image from 'next/image'
import { Truck, HeadphonesIcon, Shield } from 'lucide-react'
import NA1 from "../../../assets/FeaturedImage1.png"
import NA2 from "../../../assets/FeaturedImage2.png"
import NA3 from "../../../assets/FeaturedImage3.png"
import NA4 from "../../../assets/FeaturedImage4.png"

export function NewArrival() {
  const services = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: Shield,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days"
    }
  ]

  return (
    <section className="container mx-auto px-4">
      <div className="mb-[60px]">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
          <h3 className="text-[#DB4444] text-base font-semibold">Featured</h3>
        </div>
        <h2 className="text-[36px] font-semibold leading-[48px] tracking-[1.44px]">New Arrival</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-[30px] mb-[140px]">
        {/* PlayStation 5 Card */}
        <div className="bg-black rounded-[4px] overflow-hidden">
          <div className="p-[40px] h-full flex flex-col">
            <div className="flex-1 flex items-center justify-center mb-[20px]">
              <Image 
                src={NA1}
                alt="PlayStation 5"
                width={511}
                height={511}
                className="w-full max-w-[511px] h-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-white mb-[16px]">PlayStation 5</h3>
              <p className="text-[14px] leading-[21px] text-white/60 mb-[16px]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a href="#" className="text-white text-[16px] font-medium hover:text-white/90">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          {/* Women's Collections Card */}
          <div className="bg-black rounded-[4px] overflow-hidden flex-1">
            <div className="p-[40px] h-full flex justify-between items-center">
              <div className="max-w-[255px]">
                <h3 className="text-[24px] font-semibold text-white mb-[16px]">
                  Women Collection
                </h3>
                <p className="text-[14px] leading-[21px] text-white/60 mb-[16px]">
                  Featured woman collections that give you another vibe.
                </p>
                <a href="#" className="text-white text-[16px] font-medium hover:text-white/90">
                  Shop Now
                </a>
              </div>
              <Image 
                src={NA2}
                alt="Women's Collections"
                width={270}
                height={284}
                className="w-auto h-full max-h-[284px] object-cover"
              />
            </div>
          </div>

          {/* Speakers and Perfume Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            <div className="bg-black rounded-[4px] overflow-hidden">
              <div className="p-[24px] h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center mb-[16px]">
                  <Image 
                    src={NA4}
                    alt="Speakers"
                    width={190}
                    height={180}
                    className="w-full max-w-[190px] h-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold text-white mb-[8px]">Speakers</h3>
                  <p className="text-[14px] leading-[21px] text-white/60 mb-[8px]">
                    Amazon wireless speakers
                  </p>
                  <a href="#" className="text-white text-[16px] font-medium hover:text-white/90">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-[4px] overflow-hidden">
              <div className="p-[24px] h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center mb-[16px]">
                  <Image 
                    src={NA3}
                    alt="Perfume"
                    width={190}
                    height={180}
                    className="w-full max-w-[190px] h-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold text-white mb-[8px]">Perfume</h3>
                  <p className="text-[14px] leading-[21px] text-white/60 mb-[8px]">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <a href="#" className="text-white text-[16px] font-medium hover:text-white/90">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[140px]">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center mb-[24px]">
              <service.icon className="w-[40px] h-[40px] text-white" />
            </div>
            <h3 className="text-[20px] font-semibold mb-[8px]">{service.title}</h3>
            <p className="text-[14px] leading-[21px] text-[#666666]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


