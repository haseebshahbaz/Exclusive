import { Volume2, Mic2, Music, Settings } from 'lucide-react'
import Image from "../../../assets/MusicBannerImage.png"

export function MusicBanner() {
  return (
    <section className="container py-[70px]">
      <div className="relative bg-black rounded-[4px] overflow-hidden">
        <div className="flex px-[56px] py-[68px]">
          <div className="flex-1">
            <h2 className="text-white text-[48px] font-semibold leading-[60px] mb-8">
              Enhance Your<br />Music Experience
            </h2>
            <div className="flex gap-4 mb-10">
              {[
                { icon: Volume2, time: "23:11:12" },
                { icon: Mic2, time: "12:11:12" },
                { icon: Music, time: "03:11:12" },
                { icon: Settings, time: "18:11:12" }
              ].map((item, i) => (
                <div key={i} className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center">
                  <item.icon className="w-5 h-5 mb-1" />
                  <span className="text-[11px] font-medium">{item.time}</span>
                </div>
              ))}
            </div>
            <button className="bg-[#00FF66] text-black px-12 py-4 rounded-[4px] text-base font-medium">
              Buy Now!
            </button>
          </div>
          <div className="flex-1">
            <img 
              src={Image.src} 
              alt="JBL Speaker" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

