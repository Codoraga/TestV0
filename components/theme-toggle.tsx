"use client"

import { useTheme } from "@/components/theme-provider"
import { Moon, Sun, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("fun")
    else setTheme("light")
  }

  return (
    <motion.button
      onClick={cycleTheme}
      className="relative w-10 h-10 rounded-full bg-muted flex items-center justify-center overflow-hidden"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute"
        animate={{
          opacity: theme === "light" ? 1 : 0,
          y: theme === "light" ? 0 : 20,
        }}
        transition={{ duration: 0.2 }}
      >
        <Sun className="h-5 w-5 text-foreground" />
      </motion.div>

      <motion.div
        className="absolute"
        animate={{
          opacity: theme === "dark" ? 1 : 0,
          y: theme === "dark" ? 0 : 20,
        }}
        transition={{ duration: 0.2 }}
      >
        <Moon className="h-5 w-5 text-foreground" />
      </motion.div>

      <motion.div
        className="absolute"
        animate={{
          opacity: theme === "fun" ? 1 : 0,
          y: theme === "fun" ? 0 : 20,
        }}
        transition={{ duration: 0.2 }}
      >
        <Sparkles className="h-5 w-5 text-foreground" />
      </motion.div>
    </motion.button>
  )
}
