import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ProjectAnimatedCard } from "./animated-card"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  index?: number
}

export default function ProjectCard({ id, title, description, image, tags, index = 0 }: ProjectCardProps) {
  return (
    <ProjectAnimatedCard delay={index}>
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-2xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>

      <Link
        href={`/projects/${id}`}
        className="inline-flex items-center text-primary-foreground font-medium hover:underline"
      >
        View Project
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </ProjectAnimatedCard>
  )
}
