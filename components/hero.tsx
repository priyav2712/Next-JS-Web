"use client"

import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            rotate: -360,
            y: [0, -30, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-600 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-30"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">Available for new projects</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient inline-block">Priyav</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto font-light"
            >
              Full Stack Developer & Creative Problem Solver
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              I craft digital experiences that blend beautiful design with powerful functionality. Passionate about
              creating solutions that make a difference in people's lives.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AnimatedButton size="lg" glowColor="blue" asChild>
              <a href="/projects" className="group">
                <span className="flex items-center gap-2">
                  View My Work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.span>
                </span>
              </a>
            </AnimatedButton>

            <AnimatedButton variant="outline" size="lg" glowColor="purple" asChild>
              <a href="/contact">Get In Touch</a>
            </AnimatedButton>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:priyav@example.com", label: "Email" },
            ].map((social) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8">
            <motion.a
              href="/about"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <ArrowDown className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
              <span className="sr-only">Scroll down</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
