import BlogCard from "./blog-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const latestPosts = [
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
]

export default function LatestBlogs() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="section-title mb-0">Latest Articles</h2>
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-foreground font-medium hover:underline group"
        >
          View All
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {latestPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  )
}
