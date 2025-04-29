"use client"

import { useState, useEffect } from "react"
import BlogCard from "@/components/blog-card"
import BlogListItem from "@/components/blog-list-item"
import { ViewToggle } from "@/components/view-toggle"
import { motion, AnimatePresence } from "framer-motion"

// Sample blog data
const blogPosts = [
  {
    id: "blog-1",
    title: "Creating Playful UI Animations",
    excerpt: "Learn how to add whimsical animations to your UI that delight users without sacrificing performance.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 15, 2023",
  },
  {
    id: "blog-2",
    title: "Color Theory for Pastel Designs",
    excerpt: "Explore the psychology and application of pastel color palettes in modern web design.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 22, 2023",
  },
  {
    id: "blog-3",
    title: "Building Accessible Whimsical UIs",
    excerpt: "How to create playful interfaces that are still fully accessible to all users.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 10, 2023",
  },
  {
    id: "blog-4",
    title: "The Art of Micro-Interactions",
    excerpt: "Small details that make a big difference in user experience and engagement.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 5, 2023",
  },
  {
    id: "blog-5",
    title: "From Sketch to Code: My Design Process",
    excerpt: "A behind-the-scenes look at how I transform ideas into fully-functional websites.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 12, 2022",
  },
  {
    id: "blog-6",
    title: "Responsive Design with a Playful Touch",
    excerpt: "Techniques for maintaining whimsy across all device sizes without compromising usability.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 8, 2022",
  },
]

export default function BlogPage() {
  const [view, setView] = useState<"grid" | "list">("grid")

  // Load view preference from localStorage on component mount
  useEffect(() => {
    const savedView = localStorage.getItem("blogView") as "grid" | "list" | null
    if (savedView) {
      setView(savedView)
    }
  }, [])

  // Save view preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("blogView", view)
  }, [view])

  return (
    <div className="page-container">
      <h1 className="section-title text-center">Blog</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
        Thoughts, tutorials, and insights on design, development, and creating playful digital experiences
      </p>

      <div className="flex justify-end mb-8">
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
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} {...post} index={index} />
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
            {blogPosts.map((post, index) => (
              <BlogListItem key={post.id} {...post} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
