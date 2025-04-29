import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import LatestBlogs from "@/components/latest-blogs"
import ContactTeaser from "@/components/contact-teaser"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 py-16">
        <div className="pastel-card">
          <h2 className="text-2xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-muted-foreground mb-6">
            I'm a creative developer with a passion for building playful, whimsical digital experiences. With a
            background in design and development, I create interfaces that are both functional and delightful.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-primary-foreground font-medium hover:underline group"
          >
            Learn more about me
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <FeaturedProjects />
      <LatestBlogs />
      <ContactTeaser />
    </>
  )
}
