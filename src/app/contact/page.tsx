import { Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-[80px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[13px] mb-[80px] text-sm">
          <Link href="/" className="text-[#000000]/60 hover:text-[#000000]/80 transition-colors">
            Home
          </Link>
          <span className="text-[#000000]/60">/</span>
          <span>Contact</span>
        </div>

        <div className="grid lg:grid-cols-[400px,1fr] gap-[90px]">
          {/* Left Column */}
          <div className="bg-white rounded-md shadow-[0_0_20px_5px_rgba(0,0,0,0.05)] p-[32px] h-fit">
            <div className="space-y-[34px]">
              {/* Call To Us Section */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#DB4444]">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-[20px] font-medium">Call To Us</h2>
                  <div className="space-y-2">
                    <p className="text-base text-[#000000]/60">We are available 24/7, 7 days a week.</p>
                    <p className="text-base text-[#000000]/60">Phone: +8801611112222</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#000000]/10" />

              {/* Write To Us Section */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#DB4444]">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-[20px] font-medium">Write To Us</h2>
                  <div className="space-y-2">
                    <p className="text-base text-[#000000]/60">Fill out our form and we will contact you within 24 hours.</p>
                    <p className="text-base text-[#000000]/60">Emails: customer@exclusive.com</p>
                    <p className="text-base text-[#000000]/60">Emails: support@exclusive.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-[32px] bg-white rounded-md shadow-[0_0_20px_5px_rgba(0,0,0,0.05)] p-[32px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Input 
                type="text" 
                placeholder="Your Name *" 
                className="h-[50px] bg-[#F5F5F5] border-none text-base placeholder:text-[#000000]/40 focus-visible:ring-[#DB4444]"
              />
              <Input 
                type="email" 
                placeholder="Your Email *" 
                className="h-[50px] bg-[#F5F5F5] border-none text-base placeholder:text-[#000000]/40 focus-visible:ring-[#DB4444]"
              />
              <Input 
                type="tel" 
                placeholder="Your Phone *" 
                className="h-[50px] bg-[#F5F5F5] border-none text-base placeholder:text-[#000000]/40 focus-visible:ring-[#DB4444]"
              />
            </div>
            <Textarea 
              placeholder="Your Message" 
              className="min-h-[218px] bg-[#F5F5F5] border-none text-base placeholder:text-[#000000]/40 focus-visible:ring-[#DB4444] resize-none"
            />
            <div className="flex justify-end">
              <Button 
                type="submit"
                className="h-[56px] px-12 bg-[#DB4444] hover:bg-[#DB4444]/90 text-white text-base font-medium transition-colors rounded-[4px]"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

