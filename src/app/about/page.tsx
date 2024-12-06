import { ShoppingBag, Clock, Shield } from 'lucide-react'
import Image from 'next/image'
import img1 from "../../assets/AboutImage (1).png"
import img2 from "../../assets/AboutImage (2).png"
import img3 from "../../assets/AboutImage (3).png"
import img4 from "../../assets/AboutImage (4).png"


export default function AboutPage() {
  const stats = [
    { number: "10.5k", label: "Sellers active our site" },
    { number: "33k", label: "Monthly Product Sale" },
    { number: "45.5k", label: "Customer active in our site" },
    { number: "25k", label: "Annual gross sale in our site" }
  ]

  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: img4
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: img3
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: img2
    }
  ]

  const services = [
    {
      icon: ShoppingBag,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140"
    },
    {
      icon: Clock,
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
    <div className="min-h-screen">
      <div className="container py-10 md:py-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-10 md:mb-20">
          <a href="/" className="text-black/60">Home</a>
          <span>/</span>
          <span>About</span>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-24 mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold">Our Story</h1>
            <p className="text-black/60">
              Launced in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
            </p>
            <p className="text-black/60">
              Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={img1.src}
              alt="Shopping Experience"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 border rounded-lg text-center"
            >
              <span className="text-2xl font-semibold mb-2">{stat.number}</span>
              <span className="text-sm text-black/60">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-black/60">{member.role}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-black/60 hover:text-black">X</a>
                  <a href="#" className="text-black/60 hover:text-black">In</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8">
              <div className="w-20 h-20 bg-[#DB4444]/10 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-10 h-10 text-[#DB4444]" />
              </div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-black/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

