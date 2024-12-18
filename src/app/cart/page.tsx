import { X, ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FS3 from "../../assets/FSImage3.png";
import FS1 from "../../assets/FSImage1.png";
import Link from "next/link";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      quantity: 1,
      name: "IPS LCD Gaming Monitor",
      image: FS3.src,
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      discount: 30,
    },
    {
      id: 2,
      quantity: 2,
      name: "HAVIT HV-G92 Gamepad",
      image: FS1.src,
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      discount: 40,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-[80px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[13px] mb-[80px] text-sm">
          <Link
            href="/"
            className="text-[#000000]/50 hover:text-[#000000]/70 transition-colors"
          >
            Home
          </Link>
          <span className="text-[#000000]/50">/</span>
          <span>Cart</span>
        </div>

        {/* Product Table */}
        <div className="w-full overflow-x-auto mb-8">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-[#000000]/10">
                <th className="text-left pb-5 font-medium">Product</th>
                <th className="text-left pb-5 font-medium">Price</th>
                <th className="text-left pb-5 font-medium">Quantity</th>
                <th className="text-left pb-5 font-medium">Subtotal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#000000]/10">
              {cartItems.map((item) => (
                <tr key={item.id} className="relative">
                  <td className="py-[30px] pr-4">
                    <div className="flex items-center gap-[23px]">
                      <button className="absolute left-[-20px] top-[50%] -translate-y-1/2 hover:text-[#DB4444] transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                      <div className="relative w-[54px] h-[54px] bg-[#F5F5F5] rounded-[4px] overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <span className="text-base">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-[30px] pr-4">
                    <span className="text-base">${item.price}</span>
                  </td>
                  <td className="py-[30px] pr-4">
                    <div className="inline-flex flex-row items-center border border-[#000000]/20 rounded-[4px]">
                      <button className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-colors border-r border-[#000000]/20">
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="w-[50px] h-[40px] flex items-center justify-center text-base">
                        {item.quantity}
                      </div>
                      <button className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-colors border-l border-[#000000]/20">
                        <ChevronUp className="w-4 h-4" />
                      </button>
                    </div>
                  </td>

                  <td className="py-[30px]">
                    <span className="text-base">
                      ${item.price * item.quantity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Return to Shop and Update Cart buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <Button
            variant="outline"
            className="h-[56px] px-12 border-[#000000]/20 text-base hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors"
          >
            Return To Shop
          </Button>
          <Button
            variant="outline"
            className="h-[56px] px-12 border-[#000000]/20 text-base hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444] transition-colors"
          >
            Update Cart
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Coupon Code */}
          <div className="lg:w-1/2">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Coupon Code"
                className="flex-1 h-[56px] border-[#000000]/20 text-base placeholder:text-[#000000]/60"
              />
              <Button
                variant="outline"
                className="h-[56px] px-12 bg-[#DB4444] text-white border-[#DB4444] "
              >
                Apply Coupon
              </Button>
            </div>
          </div>

          {/* Cart Total */}
          <div className="lg:w-1/2">
            <div className="border border-[#000000]/20 rounded-[4px] p-8">
              <h2 className="text-xl font-medium mb-6">Cart Total</h2>
              <div className="space-y-4 pb-4 mb-4 border-b border-[#000000]/20">
                <div className="flex justify-between">
                  <span className="text-base">Subtotal:</span>
                  <span className="text-base">$1750</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base">Shipping:</span>
                  <span className="text-base">Free</span>
                </div>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-base">Total:</span>
                <span className="text-xl font-medium">$1750</span>
              </div>
              <Button className="w-full h-[56px] bg-[#DB4444] hover:bg-[#DB4444]/90 text-white text-base font-medium transition-colors">
                Procees to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
