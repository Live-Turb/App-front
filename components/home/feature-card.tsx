import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  image: string
  alt: string
  imagePosition?: "right" | "left"
}

export function FeatureCard({
  title,
  description,
  icon,
  features,
  image,
  alt,
  imagePosition = "right",
}: FeatureCardProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-md backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className={`${imagePosition === "left" ? "order-1 md:order-2" : "order-1"}`}>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="rounded-full p-1 bg-green-500/10 text-green-500 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${imagePosition === "left" ? "order-2 md:order-1" : "order-2"}`}>
          <div className="rounded-lg overflow-hidden border border-enhanced/20 shadow-md" ref={imgRef}>
            {isIntersecting || image.endsWith('.gif') ? (
              <Image 
                src={image} 
                alt={alt} 
                width={800} 
                height={600} 
                className="w-full h-auto"
                unoptimized={image.endsWith('.gif')}
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
