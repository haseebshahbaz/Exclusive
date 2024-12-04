import { Truck, HeadphonesIcon, Shield } from 'lucide-react'

export function Services() {
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
    <section className="container py-[70px]">
      <div className="grid grid-cols-3 gap-[30px]">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-[80px] h-[80px] bg-[#DB4444] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              <service.icon className="w-10 h-10 text-[#DB4444]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-[#666]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

