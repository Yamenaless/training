"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail, Download } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#002677] shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://www.euro-training.net/image/logo.png"
              alt="Euro Training"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-secondary font-medium transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="text-white hover:text-secondary font-medium transition-colors">
              About Us
            </Link>
            <Link href="/courses" className="text-white hover:text-secondary font-medium transition-colors">
              Our Courses
            </Link>
            <Link href="/contact" className="text-white hover:text-secondary font-medium transition-colors">
              Contact Us
            </Link>
            <Link href="/our-trainers" className="text-white hover:text-secondary font-medium transition-colors">
              Our Trainers
            </Link>
            <Link href="/venues" className="text-white hover:text-secondary font-medium transition-colors">
              Venues
            </Link>
          </nav>

          {/* Contact & Search */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link href="tel:+447492882996" className="flex items-center text-white hover:text-secondary">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+447492882996</span>
              </Link>
              <Link href="mailto:info@euro-training.net" className="flex items-center text-white hover:text-secondary">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@euro-training.net</span>
              </Link>
            </div>
            <Button variant="outline" className="bg-white text-primary hover:bg-secondary hover:text-white">
              <Download className="h-4 w-4 mr-2" />
              Download Brochures
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#002677] text-white">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <Image
                      src="https://www.euro-training.net/image/logo.png"
                      alt="Euro Training"
                      width={150}
                      height={50}
                      className="h-10 w-auto"
                    />
                  </div>
                  <nav className="flex flex-col space-y-6">
                    <Link href="/" className="text-white hover:text-secondary font-medium transition-colors">
                      Home
                    </Link>
                    <Link href="/about-us" className="text-white hover:text-secondary font-medium transition-colors">
                      About Us
                    </Link>
                    <Link href="/courses" className="text-white hover:text-secondary font-medium transition-colors">
                      Our Courses
                    </Link>
                    <Link href="/contact" className="text-white hover:text-secondary font-medium transition-colors">
                      Contact Us
                    </Link>
                    <Link href="/our-trainers" className="text-white hover:text-secondary font-medium transition-colors">
                      Our Trainers
                    </Link>
                    <Link href="/venues" className="text-white hover:text-secondary font-medium transition-colors">
                      Venues
                    </Link>
                  </nav>
                  <div className="mt-auto space-y-4">
                    <Link href="tel:+447492882996" className="flex items-center text-white hover:text-secondary">
                      <Phone className="h-4 w-4 mr-2" />
                      <span className="text-sm">+447492882996</span>
                    </Link>
                    <Link
                      href="mailto:info@euro-training.net"
                      className="flex items-center text-white hover:text-secondary"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      <span className="text-sm">info@euro-training.net</span>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full bg-white text-primary hover:bg-secondary hover:text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochures
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
