"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

interface ThemeLogoProps {
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function ThemeLogo({ width, height, className = "", priority = false }: ThemeLogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Após a montagem do componente, podemos renderizar com segurança
  // Isso evita erros de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        style={{
          width,
          height,
        }}
        className={`flex items-center justify-center ${className}`}
      />
    )
  }

  // Escolhe a logo com base no tema atual
  const logoSrc = resolvedTheme === "dark" ? "/liveturb-logo-escuro.png" : "/liveturb-logo-claro.png"

  return (
    <Image
      src={logoSrc || "/placeholder.svg"}
      alt="LiveTurb Logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}
