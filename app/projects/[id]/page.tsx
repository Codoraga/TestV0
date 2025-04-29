import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

// Sample project data - in a real app, this would come from a database or API
const projects = {
  "project-1": {
    title: "Pastel Dashboard",
    description: "A whimsical dashboard interface with playful animations and intuitive data visualization.",
    fullDescription: `
      This dashboard was designed with a focus on creating a joyful user experience while maintaining functionality and clarity. The pastel color scheme and rounded elements create a friendly atmosphere, while the carefully crafted animations add delight without distracting from the data.
      
      The project features real-time data visualization with interactive charts, customizable widgets, and a responsive layout that works beautifully on all devices. Special attention was paid to accessibility, ensuring that all users can navigate and understand the data regardless of their abilities.
      
      Technologies used include React for the frontend, Chart.js for data visualization, and a custom animation system built with Framer Motion. The dashboard connects to a REST API to fetch and display real-time data.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Tailwind CSS", "Chart.js"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Interactive data visualizations",
      "Customizable widgets",
      "Real-time data updates",
      "Responsive design",
      "Accessibility features",
      "Playful animations",
    ],
  },
  "project-2": {
    title: "Gudetama Task App",
    description: "A lazy egg-inspired task management application with cute interactions and reminders.",
    fullDescription: `
      Inspired by Sanrio's lazy egg character Gudetama, this task management app brings a touch of humor and whimsy to productivity. The app features Gudetama-themed UI elements and animations that react to user actions and task completion.
      
      The app includes features like task categorization, due dates, reminders, and progress tracking. What sets it apart is the playful feedback system - completing tasks earns you "lazy points" that unlock new Gudetama animations and themes.
      
      Built with Next.js and TypeScript, the app uses local storage for data persistence and features smooth transitions powered by Framer Motion. The design prioritizes both aesthetics and usability, creating a task manager that users actually enjoy using.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Task creation and management",
      "Due dates and reminders",
      "Progress tracking",
      "Character-themed UI elements",
      "Reward system for completed tasks",
      "Customizable themes",
    ],
  },
  // Add more projects as needed
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    return (
      <div className="page-container text-center py-16">
        <h1 className="section-title">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, the project you're looking for doesn't exist.</p>
        <Link href="/projects" className="primary-button">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="page-container">
      <Link
        href="/projects"
        className="inline-flex items-center text-primary-foreground font-medium hover:underline mb-8 group"
      >
        <ArrowLeft size={16} className="mr-1 transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-3xl">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-sm font-medium rounded-full bg-muted text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{project.title}</h1>

      <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

      <div className="flex flex-wrap gap-4 mb-12">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button inline-flex items-center"
          >
            <ExternalLink size={16} className="mr-2" />
            Live Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button inline-flex items-center"
          >
            <Github size={16} className="mr-2" />
            View Code
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-foreground">About This Project</h2>
          <div className="prose text-muted-foreground">
            {project.fullDescription.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div>
          <div className="pastel-card h-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-primary/20 text-primary-foreground flex-shrink-0 flex items-center justify-center mr-2">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-8 border-t border-border">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Interested in working together?</h2>
        <p className="text-muted-foreground mb-6">I'm always open to discussing new projects and creative ideas.</p>
        <Link href="/contact" className="primary-button inline-block">
          Get In Touch
        </Link>
      </div>
    </div>
  )
}
