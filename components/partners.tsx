"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const partners = [
  { name: "Reliable Partner", logo: "/industrial-partner-logo.jpg" },
  { name: "Quality Systems", logo: "/manufacturing-company-logo.png" },
  { name: "Global Solutions", logo: "/engineering-firm-logo.png" },
  { name: "Tech Industries", logo: "/industrial-tech-logo.jpg" },
  { name: "Innovation Corp", logo: "/innovation-company-logo.png" },
  { name: "Prime Equipment", logo: "/equipment-supplier-logo.jpg" },
]

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(6)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(6)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length)
  }

  const getVisiblePartners = () => {
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(partners[(currentIndex + i) % partners.length])
    }
    return visible
  }

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-oswald)" }}>
            We Have <span className="text-primary">120+ Global</span> Premium Clients
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 items-center"
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {getVisiblePartners().map((partner, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 flex items-center justify-center h-20 border border-border rounded-sm hover:border-primary transition-colors group"
                  style={{ width: `calc((100% - ${(itemsPerView - 1) * 2}rem) / ${itemsPerView})` }}
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-w-[120px] max-h-[40px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors shadow-lg z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors shadow-lg z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button> */}

          <div className="flex justify-center gap-2 mt-6">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
