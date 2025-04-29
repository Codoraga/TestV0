import ProjectCard from "./project-card"

const featuredProjects = [
  {
    id: "project-1",
    title: "Pastel Dashboard",
    description: "A whimsical dashboard interface with playful animations and intuitive data visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Tailwind CSS", "Chart.js"],
  },
  {
    id: "project-2",
    title: "Gudetama Task App",
    description: "A lazy egg-inspired task management application with cute interactions and reminders.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    id: "project-3",
    title: "Domo Weather",
    description: "A weather application featuring Domo-inspired illustrations that change with the forecast.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "API Integration", "CSS Animation"],
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-muted/30 rounded-3xl my-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my favorite projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
