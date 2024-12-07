'use client'

import Image from 'next/image'
import img from "../../../assets/MusicBannerImage.png"

export function MusicBanner() {
  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center bg-white rounded-full w-[62px] h-[62px] text-black">
      <span className="text-xl font-semibold">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs mt-0.5">{label}</span>
    </div>
  )

  return (
    <section className="container mx-auto px-4 py-[70px]">
      <div className="relative bg-black rounded-[4px] overflow-hidden">
        <div className="flex flex-col lg:flex-row px-8 lg:px-14 py-12 lg:py-16">
          <div className="flex-1 z-10">
            <span className="text-[#00FF66] text-base font-semibold mb-8 block">
              Categories
            </span>
            <h2 className="text-4xl lg:text-[48px] font-semibold text-white leading-tight mb-12">
              Enhance Your<br />Music Experience
            </h2>
            <div className="flex gap-6 mb-12">
            <TimeUnit value={23} label="Hours" />
              <TimeUnit value={5} label="Days" />
              <TimeUnit value={59} label="Minutes" />
              <TimeUnit value={35} label="Seconds" />
            </div>
            <button className="bg-[#00FF66] text-black px-12 py-4 rounded-[4px] text-base font-medium hover:bg-[#00FF66]/90 transition-colors">
              Buy Now!
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[500px] aspect-[5/3]">
              <Image
                src={img.src}
                alt="JBL Speaker"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
