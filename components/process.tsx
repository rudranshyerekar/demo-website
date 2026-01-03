"use client"

import { Factory, Zap, ShieldCheck, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    icon: Factory,
    number: "01",
    title: "Factory",
    description: "State-of-the-art manufacturing facilities",
  },
  {
    icon: Zap,
    number: "02",
    title: "Innovation",
    description: "Cutting-edge technology and processes",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality",
    description: "Rigorous quality control standards",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Excellence",
    description: "Award-winning service delivery",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <step.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-oswald)" }}>
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
