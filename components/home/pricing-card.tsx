import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ReactNode } from 'react'

// SVG Check Icon
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

interface PricingCardProps {
  title: string
  price: string | ReactNode
  period: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
  badge?: string
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative ${
        highlighted
          ? "bg-gradient-to-b from-background/80 to-primary/5 border-primary/30 shadow-lg shadow-primary/5"
          : "bg-background/50 border-enhanced/20"
      } border rounded-xl p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1`}
    >
      {badge && (
        <div className="absolute -top-3 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center justify-center gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground text-sm">{period}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
              <CheckIcon />
            </div>
            <span className="text-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/signup">
        <Button
          className={`w-full ${
            buttonVariant === "default"
              ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
              : ""
          }`}
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  )
}
