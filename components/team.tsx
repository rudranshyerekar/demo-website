"use client"

import { Linkedin, Facebook } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const team = [
  {
    name: "Richard Jackson",
    role: "Industrial Engineer",
    image: "/industrial-engineer-in-orange-safety-gear.jpg",
    description: "We successfully cope with of varying complexity, provide long-term guarantees",
    quality: 80,
  },
  {
    name: "Emily Chen",
    role: "Senior Process Analyst",
    image: "/quality-control-officer-in-safety-equipment.jpg",
    description: "Process Analyst with expertise in optimizing industrial operations to enhance efficiency",
    quality: 85,
  },
]

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="team" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-4">
            <span className="text-primary font-semibold tracking-wide">Expertise at Your Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ fontFamily: "var(--font-oswald)" }}>
            Meet Our <span className="text-primary">Professionals</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-primary font-semibold mb-1">{member.role}</p>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-oswald)" }}>
                    {member.name}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{member.description}</p>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">Quality Services</span>
                  {/* <span className="text-sm font-bold text-primary">{member.quality}%</span> */}
                </div>
                {/* <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: isInView ? `${member.quality}%` : "0%" }}
                  />
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
