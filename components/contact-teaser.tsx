import Link from "next/link"
import { Mail } from "lucide-react"

export default function ContactTeaser() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-r from-pastel-pink/50 to-pastel-blue/50 rounded-3xl p-8 md:p-12 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail size={48} className="mx-auto mb-6 text-primary-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Let's Work Together!</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
          <Link href="/contact" className="primary-button inline-block">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
