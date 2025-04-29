import Image from "next/image"
import TimelineItem from "@/components/timeline-item"
import SkillGrid from "@/components/skill-grid"
import { Briefcase, GraduationCap, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title text-center">About Me</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Profile picture"
                width={256}
                height={256}
                className="rounded-full border-4 border-primary shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center animate-bounce-slow shadow-md">
                <span className="text-secondary-foreground font-bold">👋</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hello there!</h2>
            <p className="text-muted-foreground mb-4">
              I'm a creative developer with a passion for building playful, whimsical digital experiences. With a
              background in both design and development, I create interfaces that are both functional and delightful.
            </p>
            <p className="text-muted-foreground mb-4">
              My approach combines technical expertise with a keen eye for aesthetics, resulting in projects that not
              only work flawlessly but also bring joy to users through thoughtful animations, intuitive interactions,
              and charming visual elements.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me sketching character designs, exploring new cafés, or playing with my
              collection of cute plushies.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground text-center">My Journey</h2>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              year="2023"
              title="Senior Frontend Developer"
              description="Leading the development of playful, accessible web applications with a focus on delightful user experiences."
              icon={<Briefcase className="text-white" size={20} />}
            />

            <TimelineItem
              year="2021"
              title="UI/UX Designer & Developer"
              description="Created whimsical interfaces and implemented them with clean, efficient code for various clients."
              icon={<Heart className="text-white" size={20} />}
            />

            <TimelineItem
              year="2019"
              title="Frontend Developer"
              description="Specialized in creating engaging, interactive web experiences with modern JavaScript frameworks."
              icon={<Briefcase className="text-white" size={20} />}
            />

            <TimelineItem
              year="2017"
              title="Computer Science Degree"
              description="Graduated with honors, focusing on web technologies and interactive design."
              icon={<GraduationCap className="text-white" size={20} />}
              isLast={true}
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-foreground text-center">Skills & Tools</h2>
          <SkillGrid />
        </div>

        <div className="pastel-card text-center">
          <Award size={48} className="mx-auto mb-4 text-primary-foreground" />
          <h2 className="text-2xl font-bold mb-4 text-foreground">Fun Facts</h2>
          <ul className="text-muted-foreground space-y-2 max-w-lg mx-auto text-left list-disc pl-6">
            <li>I've collected over 50 Gudetama and Domo plushies</li>
            <li>I can code with a cat on my lap (a special skill)</li>
            <li>I once designed an entire website using only pastel colors</li>
            <li>My workspace is decorated with cute character figurines</li>
            <li>I believe every button deserves a satisfying hover state</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
