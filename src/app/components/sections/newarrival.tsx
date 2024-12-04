export function NewArrival() {
    return (
      <section className="container py-[70px]">
        <div className="flex items-center gap-[87px] mb-[60px]">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
            <h2 className="text-base font-semibold text-[#DB4444]">Featured</h2>
          </div>
          <h3 className="text-4xl font-semibold">New Arrival</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="bg-black rounded-[4px] overflow-hidden">
            <div className="p-8 h-full">
              <img 
                src="/ps5.png" 
                alt="PlayStation 5" 
                className="w-full h-full object-contain"
              />
              <div className="mt-4">
                <h4 className="text-white text-2xl font-semibold mb-2">
                  PlayStation 5
                </h4>
                <p className="text-white text-sm opacity-80">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <a href="#" className="text-white text-base font-medium mt-4 inline-block">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-rows-2 gap-[30px]">
            <div className="bg-black rounded-[4px] overflow-hidden">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h4 className="text-white text-2xl font-semibold mb-2">
                      Women's Collections
                    </h4>
                    <p className="text-white text-sm opacity-80 mb-4">
                      Featured woman collections that give you another vibe.
                    </p>
                    <a href="#" className="text-white text-base font-medium">
                      Shop Now
                    </a>
                  </div>
                  <img 
                    src="/women.png" 
                    alt="Women's Collections" 
                    className="w-[190px] h-[180px] object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-[30px]">
              <div className="bg-black rounded-[4px] overflow-hidden p-6">
                <img 
                  src="/speakers.png" 
                  alt="Speakers" 
                  className="w-full h-[180px] object-contain mb-4"
                />
                <h4 className="text-white text-xl font-semibold mb-2">
                  Speakers
                </h4>
                <p className="text-white text-sm opacity-80">
                  Amazon wireless speakers
                </p>
                <a href="#" className="text-white text-base font-medium mt-2 inline-block">
                  Shop Now
                </a>
              </div>
              
              <div className="bg-black rounded-[4px] overflow-hidden p-6">
                <img 
                  src="/perfume.png" 
                  alt="Perfume" 
                  className="w-full h-[180px] object-contain mb-4"
                />
                <h4 className="text-white text-xl font-semibold mb-2">
                  Perfume
                </h4>
                <p className="text-white text-sm opacity-80">
                  GUCCI INTENSE OUD EDP
                </p>
                <a href="#" className="text-white text-base font-medium mt-2 inline-block">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  