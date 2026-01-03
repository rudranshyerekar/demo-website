"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const news = [
  {
    title: "Technological Solutions For Factories",
    excerpt:
      "We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.",
    image: "/modern-manufacturing-robots.png",
    date: "May 26, 2024",
    category: "Industrial",
  },
  {
    title: "Improving Energy Efficiency In Metal",
    excerpt:
      "We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.",
    image: "/green-sustainable-factory-with-solar-panels.jpg",
    date: "May 26, 2024",
    category: "Metal",
  },
  {
    title: "Novel Metal Casting Techniques For Complex",
    excerpt:
      "We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.",
    image: "/automated-assembly-line.png",
    date: "May 26, 2024",
    category: "Casting",
  },
  {
    title: "Robotic Automation In Metal Forming",
    excerpt:
      "We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.",
    image: "/robotic-automation-factory.jpg",
    date: "May 26, 2024",
    category: "Automation",
  },
]

export function News() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="news" className="py-20 bg-[#1a1d29] text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-4">
            <span className="text-primary font-semibold tracking-wide">latest blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ fontFamily: "var(--font-oswald)" }}>
            Read Our Construction New <span className="text-primary">Blog &amp; Articles</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new
            technologies. Our portfolio includes do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 rounded-sm overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 text-sm font-semibold rounded">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <h3
                  className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
