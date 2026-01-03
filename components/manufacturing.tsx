"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Manufacturing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-[#1a1d29] text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Lubrication Equipment Manufacturers & Supplier
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              We solve worldwide industrial every problem, the heart of global landscape the industry stands
              multidimensional access to a wealth. We solve worldwide industrial every problem, the heart of global
              landscape the industry stands multidimensional access to a wealth.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm mb-8 flex items-center gap-4">
              <img src="https://www.cenlub.com/images/awards.jpg" alt="Award" className="w-20 h-20 object-contain" />
              <div>
                <p className="text-primary font-semibold">MSME Award Winner 2023</p>
                <p className="text-white/90">Manifacturing of Centeralized Lubricantion Systems, Oil Lube Systems and Lube Oil Consoles</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Read More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 80, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/factory-worker-in-orange-safety-gear-working-with-.jpg"
              alt="Manufacturing Professional"
              className="w-full h-[500px] object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
