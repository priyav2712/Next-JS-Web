"use client"

import { motion } from "framer-motion"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navigation />
      <main>
        <Hero />
      </main>
    </motion.div>
  )
}
