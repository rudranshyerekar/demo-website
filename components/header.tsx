"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      {/* <div className="bg-[#1a1d29] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-3 w-3" />
                <span>+123 456 7890</span>
              </a>
              <a href="mailto:info@indro.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-3 w-3" />
                <span>info@indro.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>258 Main Street, New York</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-5xl font-bold" style={{ fontFamily: "var(--font-oswald)" }}>
            <span className="text-foreground">Ans</span>
            <span className="text-primary">wrs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors font-medium">
              Team
            </a>
            <a href="#news" className="text-foreground hover:text-primary transition-colors font-medium">
              News
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">Get A Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#team"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Team
              </a>
              <a
                href="#news"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                News
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">Get A Quote</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
