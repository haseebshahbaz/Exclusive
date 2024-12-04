import { Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  return (
    <div className="container py-20">
      <div className="flex items-center gap-3 mb-20">
        <a href="/" className="text-black/60">Home</a>
        <span>/</span>
        <span>Cart</span>
      </div>

      <div className="flex gap-8">
        <div className="flex-1">
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 pb-6 border-b">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          <div className="divide-y">
            {[
              {
                name: "LCD Monitor",
                image: "/placeholder.svg",
                price: 650,
                quantity: 1
              },
              {
                name: "H1 Gamepad",
                image: "/placeholder.svg",
                price: 550,
                quantity: 2
              }
            ].map((item) => (
              <div key={item.name} className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 py-6">
                <div className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="font-medium">{item.name}</span>
                </div>
                <div>${item.price}</div>
                <div>
                  <div className="inline-flex items-center border rounded">
                    <button className="p-2"><Minus className="w-4 h-4" /></button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button className="p-2"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
                <div>${item.price * item.quantity}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline">Return To Shop</Button>
            <Button variant="outline">Update Cart</Button>
          </div>
        </div>

        <div className="w-[470px]">
          <div className="border rounded-md p-8">
            <h2 className="text-xl font-medium mb-6">Cart Total</h2>
            <div className="space-y-4 pb-4 mb-4 border-b">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <span>Total:</span>
              <span className="text-xl font-medium">$1750</span>
            </div>
            <Button className="w-full bg-[#DB4444] hover:bg-[#DB4444]/90">
              Procees to checkout
            </Button>
          </div>

          <div className="mt-8">
            <div className="flex gap-4">
              <Input placeholder="Coupon Code" className="flex-1" />
              <Button variant="outline">Apply Coupon</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

