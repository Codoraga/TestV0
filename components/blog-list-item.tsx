import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { AnimatedCard } from "./animated-card"

interface BlogListItemProps {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  index?: number
}

export default function BlogListItem({ id, title, excerpt, image, date, index = 0 }: BlogListItemProps) {
  return (
    <Link href={`/blog/${id}`} className="block group">
      <AnimatedCard className="list-item-card h-full" delay={index}>
        <div className="list-item-image">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="list-item-content">
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>

          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary-foreground transition-colors duration-300">
            {title}
          </h3>

          <p className="text-muted-foreground flex-grow mb-4">{excerpt}</p>

          <span className="text-primary-foreground font-medium">Read more</span>
        </div>
      </AnimatedCard>
    </Link>
  )
}
