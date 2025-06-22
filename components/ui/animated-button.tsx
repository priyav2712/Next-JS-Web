"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  glowColor?: "blue" | "purple" | "pink" | "green"
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className = "", glowColor = "blue", ...props }, ref) => {
    const glowStyles = {
      blue: { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
      purple: { boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" },
      pink: { boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)" },
      green: { boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" },
    }

    return (
      <motion.div
        whileHover={{ scale: 1.05, ...glowStyles[glowColor] }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button ref={ref} className={`relative overflow-hidden transition-all duration-300 ${className}`} {...props}>
          {children}
        </Button>
      </motion.div>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"
