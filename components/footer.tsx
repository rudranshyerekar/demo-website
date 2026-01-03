import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#0f1117] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
              <span className="text-white">Answ</span>
              <span className="text-primary">rs</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Established in 1990, specializing in design, engineering and manufacturing of Centralized Lubrication
              Systems. The only Indian company with such diverse product range.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
              Industries Served
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Machine Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Plastic Processing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Material Handling
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-primary transition-colors">
                  Mining & Steel
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/70 hover:text-primary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-white/70">India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@answrs.com" className="text-white/70 hover:text-primary transition-colors">
                  info@answrs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-oswald)" }}>
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/60 text-sm">Stay updated with our latest news and offers</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 md:w-80"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© 2026 Answrs. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
