import Image from "next/image"
import Star from "lucide-react/dist/esm/icons/star"

interface AvatarProps {
  src: string
  alt?: string
  width?: number
  height?: number
  className?: string
  loading?: 'eager' | 'lazy'
}

interface TestimonialProps {
  quote: string
  author: string
  role: string
  avatar: string | AvatarProps
  stars: number
}

export function Testimonial({ quote, author, role, avatar, stars }: TestimonialProps) {
  return (
    <div className="bg-background/50 border border-enhanced/20 rounded-xl p-6 shadow-sm backdrop-blur-sm">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < stars ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <Image
          src={typeof avatar === 'string' ? avatar : avatar.src}
          alt={typeof avatar === 'string' ? author : avatar.alt || author}
          width={typeof avatar === 'string' ? 40 : avatar.width || 40}
          height={typeof avatar === 'string' ? 40 : avatar.height || 40}
          className={`w-10 h-10 rounded-full object-cover ${typeof avatar === 'object' ? avatar.className || '' : ''}`}
          loading={typeof avatar === 'object' ? avatar.loading || 'lazy' : 'lazy'}
          decoding="async"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
