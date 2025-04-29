"use client"

import { useState, useEffect } from "react"
import ProjectCard from "@/components/project-card"
import ProjectListItem from "@/components/project-list-item"
import { ViewToggle } from "@/components/view-toggle"
import { motion, AnimatePresence } from "framer-motion"

// Sample project data
const allProjects = [
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
  {
    id: "project-4",
    title: "Pastel Portfolio",
    description: "A soft, playful portfolio template for creative professionals with whimsical interactions.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "project-5",
    title: "Cute E-Commerce",
    description: "An e-commerce platform with a kawaii aesthetic, featuring animated product cards and checkout flow.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Redux", "Node.js"],
  },
  {
    id: "project-6",
    title: "Whimsical Blog",
    description: "A blog platform with playful typography, soft animations, and an intuitive reading experience.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
  },
]

// Get unique tags from all projects
const allTags = Array.from(new Set(allProjects.flatMap((project) => project.tags))).sort()

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [view, setView] = useState<"grid" | "list">("grid")

  // Load view preference from localStorage on component mount
  useEffect(() => {
    const savedView = localStorage.getItem("projectsView") as "grid" | "list" | null
    if (savedView) {
      setView(savedView)
    }
  }, [])

  // Save view preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("projectsView", view)
  }, [view])

  const filteredProjects = selectedTag
    ? allProjects.filter((project) => project.tags.includes(selectedTag))
    : allProjects

  return (
    <div className="page-container">
      <h1 className="section-title text-center">My Projects</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
        Explore my collection of playful, whimsical projects that showcase my skills in design and development
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedTag === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <ViewToggle view={view} setView={setView} />
      </div>

      <AnimatePresence mode="wait">
        {view === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectListItem key={project.id} {...project} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No projects found with the selected tag.</p>
        </div>
      )}
    </div>
  )
}
