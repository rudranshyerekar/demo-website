"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 bg-[#1a1d29] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 animate-pulse">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 20px, currentColor 20px, currentColor 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)",
          }}
        />
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-sm animate-in slide-in-from-left duration-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-700 delay-100">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 transition-all duration-300 focus:scale-[1.02] focus:bg-white/15"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 transition-all duration-300 focus:scale-[1.02] focus:bg-white/15"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-700 delay-200">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 transition-all duration-300 focus:scale-[1.02] focus:bg-white/15"
                />
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 transition-all duration-300 focus:scale-[1.02] focus:bg-white/15"
                />
              </div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none animate-in fade-in duration-700 delay-300 transition-all focus:scale-[1.02] focus:bg-white/15"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white w-full animate-in fade-in duration-700 delay-500 transition-all hover:scale-105 active:scale-95"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="animate-in slide-in-from-right duration-700">
            <div className="mb-4 animate-in fade-in duration-500 delay-100">
              <span className="text-primary font-semibold tracking-wide">GET IN TOUCH</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-in fade-in zoom-in-50 duration-700 delay-200"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Connect With Our <span className="text-primary">Expertise</span> Anytime Today
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed animate-in fade-in duration-700 delay-300">
              Have a question or need a consultation? Our team of experts is ready to help you find the perfect solution
              for your industrial needs.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 animate-in slide-in-from-right duration-500 delay-300 hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <span className="text-primary font-bold">📍</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-white/70">258 Main Street, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-in slide-in-from-right duration-500 delay-500 hover:translate-x-2 transition-transform">
                <div
                  className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-primary font-bold">📞</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-white/70">+123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-in slide-in-from-right duration-500 delay-700 hover:translate-x-2 transition-transform">
                <div
                  className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-primary font-bold">✉️</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-white/70">info@indro.com</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-l-4 border-primary pl-4 animate-in fade-in zoom-in-95 duration-700 delay-1000 hover:scale-105 transition-transform">
              <img
                src="/business-person-portrait.png"
                alt="Testimonial"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-white/70 italic mb-1">"Exceptional service and expertise!"</p>
                <p className="font-bold">Sarah Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
