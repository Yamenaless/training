"use client"

import Link from "next/link"
import { Phone, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopNavbar() {
  return (
    <div className="sticky top-0 z-50 bg-[#ebb207] text-white py-2 px-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Phone */}
          <div className="flex items-center">
            <Link 
              href="tel:+447492882996" 
              className="flex items-center text-white hover:text-gray-100 transition-colors duration-200"
              aria-label="Call us at +447492882996"
            >
              <Phone className="h-3 w-3 mr-2" />
              <span className="text-xs font-medium">+447492882996</span>
            </Link>
          </div>

          {/* Right side - Email and Download */}
          <div className="flex items-center space-x-4">
            <Link 
              href="mailto:info@euro-training.net" 
              className="flex items-center text-white hover:text-gray-100 transition-colors duration-200"
              aria-label="Email us at info@euro-training.net"
            >
              <Mail className="h-3 w-3 mr-2" />
              <span className="text-xs font-medium">info@euro-training.net</span>
            </Link>
            
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white text-[#ebb207] hover:bg-gray-100 hover:text-[#d4a006] border-white hover:border-gray-200 transition-all duration-200 h-7 px-3 text-xs font-medium"
            >
              <Download className="h-3 w-3 mr-1" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
