"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown, MapPin } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-8 z-40 w-full ${isScrolled ? "bg-[#16335c] shadow-lg py-2" : "bg-[#16335c] py-4"
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
            <Link
              href="/"
              className="text-white hover:text-secondary font-medium text-lg tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-white hover:text-secondary font-medium"
            >
              Categories
            </Link>

            {/* Venues Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link href="/venues">
                  <Button
                    variant="ghost"
                    className="text-white hover:text-secondary hover:bg-transparent font-medium p-0 h-auto"
                  >
                    Venues
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 bg-white border border-gray-200 shadow-lg rounded-lg mt-2 max-h-96 overflow-y-auto"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer font-medium border-b border-gray-100"
                  >
                    <MapPin className="h-4 w-4 mr-3 text-secondary" />
                    View All Venues
                  </Link>
                </DropdownMenuItem>
                <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wide font-medium">
                  Popular Locations
                </div>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/london"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">London, UK</div>
                      <div className="text-xs text-gray-500">United Kingdom</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/dubai"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">Dubai, UAE</div>
                      <div className="text-xs text-gray-500">United Arab Emirates</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/paris"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">Paris, France</div>
                      <div className="text-xs text-gray-500">France</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/new-york"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">New York, USA</div>
                      <div className="text-xs text-gray-500">United States</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/singapore"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">Singapore</div>
                      <div className="text-xs text-gray-500">Singapore</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/tokyo"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">Tokyo, Japan</div>
                      <div className="text-xs text-gray-500">Japan</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/sydney"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">Sydney, Australia</div>
                      <div className="text-xs text-gray-500">Australia</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/toronto"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">Toronto, Canada</div>
                      <div className="text-xs text-gray-500">Canada</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/berlin"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">Berlin, Germany</div>
                      <div className="text-xs text-gray-500">Germany</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/venues/amsterdam"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">Amsterdam, Netherlands</div>
                      <div className="text-xs text-gray-500">Netherlands</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-secondary hover:bg-transparent font-medium p-0 h-auto"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-white border border-gray-200 shadow-lg rounded-lg mt-2"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/workshops"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    Workshops
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/in-house-training"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    In-House Training
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/customize-course"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    Customize Your Course
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/consulting"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    Consulting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/services/self-learning"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 cursor-pointer"
                  >
                    Self Learning
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#16335c] text-white">
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
                    <Link
                      href="/"
                      className="text-white hover:text-secondary font-bold text-lg tracking-wider"
                    >
                      HOME
                    </Link>
                    <Link
                      href="/categories"
                      className="text-white hover:text-secondary font-medium"
                    >
                      Categories
                    </Link>
                    <div className="space-y-3">
                      <div className="text-white font-medium">Venues</div>
                      <div className="ml-4 space-y-3">
                        <Link
                          href="/venues"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          View All Venues
                        </Link>
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                          Popular Locations
                        </div>
                        <Link
                          href="/venues/london"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          London, UK
                        </Link>
                        <Link
                          href="/venues/dubai"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Dubai, UAE
                        </Link>
                        <Link
                          href="/venues/paris"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Paris, France
                        </Link>
                        <Link
                          href="/venues/new-york"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          New York, USA
                        </Link>
                        <Link
                          href="/venues/singapore"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Singapore
                        </Link>
                        <Link
                          href="/venues/tokyo"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Tokyo, Japan
                        </Link>
                        <Link
                          href="/venues/sydney"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Sydney, Australia
                        </Link>
                        <Link
                          href="/venues/toronto"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Toronto, Canada
                        </Link>
                        <Link
                          href="/venues/berlin"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Berlin, Germany
                        </Link>
                        <Link
                          href="/venues/amsterdam"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Amsterdam, Netherlands
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-white font-medium">Services</div>
                      <div className="ml-4 space-y-3">
                        <Link
                          href="/services/workshops"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Workshops
                        </Link>
                        <Link
                          href="/services/in-house-training"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          In-House Training
                        </Link>
                        <Link
                          href="/services/customize-course"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Customize Your Course
                        </Link>
                        <Link
                          href="/services/consulting"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Consulting
                        </Link>
                        <Link
                          href="/services/self-learning"
                          className="block text-gray-300 hover:text-secondary"
                        >
                          Self Learning
                        </Link>
                      </div>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
