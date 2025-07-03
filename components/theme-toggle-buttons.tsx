"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggleButtons() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex rounded-full bg-secondary/40 p-1 backdrop-blur-sm border border-enhanced/20 shadow-sm">
        <div className="w-9 h-9"></div>
        <div className="w-9 h-9"></div>
      </div>
    )
  }

  return (
    <div className="flex rounded-full bg-secondary/40 p-1 backdrop-blur-sm border border-enhanced/20 shadow-sm">
      <button
        onClick={() => setTheme("light")}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 ${
          theme === "light"
            ? "bg-primary text-white shadow-md"
            : "text-foreground/70 hover:text-foreground hover:bg-secondary/60"
        }`}
        aria-label="Tema claro"
      >
        <Sun className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 ${
          theme === "dark"
            ? "bg-primary text-white shadow-md"
            : "text-foreground/70 hover:text-foreground hover:bg-secondary/60"
        }`}
        aria-label="Tema escuro"
      >
        <Moon className="h-5 w-5" />
      </button>
    </div>
  )
}
