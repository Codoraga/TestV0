import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="page-container">
      <h1 className="section-title text-center">Get In Touch</h1>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Have a project in mind or just want to say hello? I'd love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="pastel-card flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Mail className="text-primary-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-foreground">Email</h3>
          <p className="text-muted-foreground">hello@example.com</p>
        </div>

        <div className="pastel-card flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
            <Phone className="text-secondary-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-foreground">Phone</h3>
          <p className="text-muted-foreground">+1 (555) 123-4567</p>
        </div>

        <div className="pastel-card flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
            <MapPin className="text-accent-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-foreground">Location</h3>
          <p className="text-muted-foreground">San Francisco, CA</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="pastel-card">
          <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Send Me a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
