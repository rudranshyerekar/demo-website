"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="/industrial-machinery-close-up-with-gears.jpg"
                alt="Industrial Equipment"
                className="w-full h-64 object-cover rounded-sm"
              />
              <img
                src="/factory-worker-operating-machine.jpg"
                alt="Worker Operating Machine"
                className="w-full h-48 object-cover rounded-sm"
              />
            </div>
            <div className="pt-8">
              <img
                src="/industrial-plant-manufacturing-floor.jpg"
                alt="Manufacturing Floor"
                className="w-full h-80 object-cover rounded-sm"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4">
              <span className="text-primary font-semibold tracking-wide">ABOUT OUR COMPANY</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Only <span className="text-primary">Indian Company</span> With Such Diverse Range
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Established in 1990, Answrs (formerly Cenlub Systems) specializes in the design, engineering and
              manufacturing of Centralized Lubrication Systems, Oil Lube Systems and Lube Oil Consoles. We are the only
              Indian company offering such a comprehensive and diverse range of products in this industry.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our commitment to product quality, on-time delivery, and exceptional after-sales support has made us the
              trusted partner for industries including Machine Tools, Plastic Processing, Material Handling, Printing,
              Sugar, Mining, Construction, and Steel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "ISO 9001:2008 Certified",
                "ISO 14001:2004 Certified",
                "Established Since 1990",
                "Diverse Product Range",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Learn More
              </Button>
              <div className="border-l-2 border-primary pl-6">
                <p className="text-sm text-muted-foreground">CEO & Founder</p>
                <p className="font-bold text-foreground">Answrs Leadership</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
