import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedCard } from "./animated-card"

interface ProjectListItemProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  index?: number
}

export default function ProjectListItem({ id, title, description, image, tags, index = 0 }: ProjectListItemProps) {
  return (
    <AnimatedCard className="list-item-card group" delay={index}>
      <div className="list-item-image">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="list-item-content">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center text-primary-foreground font-medium hover:underline mt-auto"
        >
          View Project
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </AnimatedCard>
  )
}
