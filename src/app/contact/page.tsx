import { Phone, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-[80px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[13px] mb-[80px]">
          <a href="/" className="text-[#000000]/50 text-sm font-normal hover:text-[#000000]/70 transition-colors">
            Home
          </a>
          <span className="text-[#000000]/50 text-sm">/</span>
          <span className="text-sm font-normal">Contact</span>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-[90px]">
          {/* Left Column */}
          <div className="shadow-[0_0_0_1px_rgba(0,157,255,0.25)] rounded-md p-8">
            <div className="space-y-[34px]">
              {/* Call Us Section */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#DB4444]">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-[20px] font-medium text-[#000000]">Call To Us</h2>
                <div className="space-y-4">
                  <p className="text-base text-[#000000]/60">We are available 24/7, 7 days a week.</p>
                  <p className="text-base text-[#000000]/60">Phone: +8801611112222</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#000000]/20" />

              {/* Write To Us Section */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#DB4444]">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-[20px] font-medium text-[#000000]">Write To Us</h2>
                <div className="space-y-4">
                  <p className="text-base text-[#000000]/60">Fill out our form and we will contact you within 24 hours.</p>
                  <p className="text-base text-[#000000]/60">Emails: customer@exclusive.com</p>
                  <p className="text-base text-[#000000]/60">Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-[32px]">
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
                className="h-[56px] px-12 bg-[#DB4444] hover:bg-[#DB4444]/90 text-white text-base font-medium transition-colors rounded-md"
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

