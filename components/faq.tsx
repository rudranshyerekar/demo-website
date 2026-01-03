"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const faqs = [
  {
    question: "What is commercial management in construction?",
    answer:
      "Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. These are often for specific projects such as building or renovation projects that are sold or leased.",
  },
  {
    question: "Start a construction management?",
    answer:
      "Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. These are often for specific projects such as building or renovation projects that are sold or leased.",
  },
  {
    question: "Measure quality in construction projects?",
    answer:
      "Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. These are often for specific projects such as building or renovation projects that are sold or leased.",
  },
  {
    question: "Prepare a construction project schedule?",
    answer:
      "Commercial management in construction ensures the planning, execution, and coordination of a construction project from the start to finish. These are often for specific projects such as building or renovation projects that are sold or leased.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/industrial-worker-in-orange-safety-gear-looking-co.jpg"
              alt="Professional Worker"
              className="w-full h-[600px] object-cover rounded-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 hover:scale-110 transition-all">
                <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4">
              <span className="text-primary font-semibold tracking-wide">POPULAR QUESTIONS</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-balance"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-sm shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-bold text-foreground pr-4">{faq.question}</span>
                    <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-muted-foreground">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
