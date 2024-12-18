import { SidebarAndCarousel } from "@/app/components/sidebar-and-carousel"
import { Categories } from "@/app/components/sections/categories"
import { FlashSales } from "@/app/components/sections/flashsales"
import { MusicBanner } from "@/app/components/sections/musicbanner"
import { ExploreProducts } from "@/app/components/sections/exploreproducts"
import { NewArrival } from "@/app/components/sections/newarrival"
import { BestSelling } from "@/app/components/sections/bestselling"



export default function Home() {
  return (
      <main>
      <SidebarAndCarousel />
        <FlashSales />
        <Categories />
        <BestSelling />
        <MusicBanner />
        <ExploreProducts />
        <NewArrival />
      </main>

  )
  
}

