import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold text-primary-foreground hover:text-primary transition-colors duration-300"
            >
              Portfolio
            </Link>
            <p className="text-muted-foreground mt-2">Crafting playful digital experiences</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="text-foreground" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} className="text-foreground" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-foreground" />
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} className="text-foreground" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
