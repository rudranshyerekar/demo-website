"use client"

import { Wrench, Package, Cog } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Package,
    title: "Product Quality",
    description:
      "Premium quality lubrication systems designed and manufactured with precision engineering and the highest standards.",
  },
  {
    icon: Cog,
    title: "On Time Delivery",
    description: "Reliable and punctual delivery of products ensuring your operations stay on schedule without delays.",
  },
  {
    icon: Wrench,
    title: "After Sales Support",
    description: "Comprehensive after-sales service and technical support to keep your systems running efficiently.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-primary"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: "var(--font-oswald)" }}>
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
