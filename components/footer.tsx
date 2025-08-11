import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#001a4f] text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://www.euro-training.net/image/logo.png"
                alt="Euro Training"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/70 mb-6">
              Euro Training provides professional development courses and seminars for individuals and organizations
              worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-secondary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-secondary">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/70 hover:text-secondary">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-white/70 hover:text-secondary">
                  Our Trainers
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/70 hover:text-secondary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-secondary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-white/70">123 Training Street, London, UK</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <Link href="tel:+447492882996" className="text-white/70 hover:text-secondary">
                  +44 7492 882996
                </Link>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <Link href="mailto:info@euro-training.net" className="text-white/70 hover:text-secondary">
                  info@euro-training.net
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive updates on new courses and special offers.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-secondary text-black hover:bg-white w-full">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Euro Training. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-white/50 hover:text-secondary text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-white/50 hover:text-secondary text-sm">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="text-white/50 hover:text-secondary text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
