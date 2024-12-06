import { Facebook, Twitter, Instagram, LinkedinIcon as LinkedIn } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import QRImage from "../../assets/Qrcode 1.png"
import AppleImage from "../../assets/download-appstore.png"
import GoogleImgae from "../../assets/GooglePlay.png"

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-16">
          {/* Exclusive Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Exclusive</h3>
            <h4 className="text-xl mb-4">Subscribe</h4>
            <p className="text-base mb-4">Get 10% off your first order</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-white text-white placeholder:text-white/60"
              />
              <Button variant="ghost" className="border-white ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-xl font-medium mb-6">Support</h3>
            <address className="not-italic mb-4">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.
            </address>
            <p className="mb-2">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="text-xl font-medium mb-6">Account</h3>
            <ul className="space-y-4">
              <li><a href="/account">My Account</a></li>
              <li><a href="/login">Login / Register</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/wishlist">Wishlist</a></li>
              <li><a href="/shop">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link Column */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Link</h3>
            <ul className="space-y-4">
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms Of Use</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Download App Column */}
          <div>
            <h3 className="text-xl font-medium mb-6">Download App</h3>
            <p className="text-xs text-white/60 mb-4">Save $3 with App New User Only</p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="bg-black p-2 border border-white rounded">
                <img src={QRImage.src} alt="QR Code" className="w-24 h-24" />
              </div>
              <div className="flex flex-row sm:flex-col lg:flex-row gap-2">
                <a href="#" className="block">
                <img src={GoogleImgae.src}alt="Get it on Google Play" className="h-10" />
                </a>
                <a href="#" className="block">
                  <img src={AppleImage.src} alt="Download on the App Store" className="h-10" />
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#"><Facebook className="w-6 h-6" /></a>
              <a href="#"><Twitter className="w-6 h-6" /></a>
              <a href="#"><Instagram className="w-6 h-6" /></a>
              <a href="#"><LinkedIn className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 text-center text-white/60">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

