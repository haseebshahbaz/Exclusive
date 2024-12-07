import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Apple from "../../assets/apple.png";
import HeroImage from "../../assets/HeroImage.png";

export function SidebarAndCarousel() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-6 lg:gap-[45px] pt-6 lg:pt-10">
      <aside className="w-full lg:w-[217px] lg:flex-shrink-0">
        <nav className="flex flex-col gap-4">
          {categories.map((category, index) => (
            <a
              key={category}
              href="#"
              className="flex items-center justify-between text-sm lg:text-base text-black hover:text-black/70 transition-colors"
            >
              {category}
              {(index === 0 || index === 1) && (
                <ChevronRight className="h-5 w-5 text-black" />
              )}
            </a>
          ))}
        </nav>
      </aside>

      <div className="flex-1 bg-black rounded-[4px] overflow-hidden h-[360px]">
        <div className="px-6 lg:pl-[65px] lg:pr-[49px] py-6 lg:py-8 flex flex-col lg:flex-row items-center h-full">
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <div className="flex flex-col text-white">
              <Image
                src={Apple}
                alt="Apple"
                width={40}
                height={49}
                className="mx-auto lg:mx-0 mb-4 lg:mb-[32px]"
              />
              <h1 className="text-3xl lg:text-[48px] font-semibold leading-tight lg:leading-[60px] mb-3 lg:mb-[19px]">
                iPhone 14 Series
              </h1>
              <p className="text-sm lg:text-base font-normal mb-4 lg:mb-[32px]">
                Up to 10% off Voucher
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm lg:text-base font-medium group"
              >
                <span className="underline">Shop Now</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end h-full">
            <Image
              src={HeroImage}
              alt="iPhone 14"
              width={496}
              height={352}
              className="w-full max-w-[250px] lg:max-w-[400px] lg:w-auto h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
