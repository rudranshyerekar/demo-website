"use client"

import { Droplet, Gauge, Wrench, Activity, Plug, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Droplet,
    title: "Lubrication Distributors",
    description: "Ensure delivery of metered quantity of lubricant to lube points irrespective of backpressure.",
  },
  {
    icon: Gauge,
    title: "Pumps",
    description: "Heart of any centralized lubrication system - delivers lubricant at desired flow rate and pressure.",
  },
  {
    icon: Wrench,
    title: "Special Lubricators",
    description: "Custom lubricators designed for special applications like sheet metal and toffee machines.",
  },
  {
    icon: Activity,
    title: "Timers & Controllers",
    description: "Mind of automatic systems - define frequency, capture feedback, and indicate system health.",
  },
  {
    icon: Plug,
    title: "Tubes & Fittings",
    description: "Arteries and veins carrying lubricant under pressure to distributors and lube points.",
  },
  {
    icon: Truck,
    title: "Mobile Service Van",
    description: "Fully equipped service vans with generators, compressors, pumps and tools for field support.",
  },
]

export function Automation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-4">
            <span className="text-primary font-semibold tracking-wide">OUR PRODUCTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ fontFamily: "var(--font-oswald)" }}>
            <span className="text-primary">Centralized Lubrication</span> Systems & Components
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-oswald)" }}>
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <Button variant="link" className="text-primary p-0 h-auto">
                Learn More →
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white p-8 rounded-sm shadow-sm flex flex-col md:flex-row items-center gap-6"
        >
          <img src="/professional-person-portrait.png" alt="Client" className="w-20 h-20 rounded-full object-cover" />
          <div className="flex-1 text-center md:text-left">
            <p className="text-muted-foreground italic mb-2">
              "Outstanding quality and exceptional service. Their lubrication systems have significantly improved our
              machine reliability and reduced downtime. Highly recommended!"
            </p>
            <p className="font-bold text-foreground">Manufacturing Director</p>
            <p className="text-sm text-muted-foreground">Leading Machine Tools Company</p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
