import type React from "react"
interface SkillProps {
  name: string
  icon: React.ReactNode
  color: string
}

function Skill({ name, icon, color }: SkillProps) {
  return (
    <div className={`pastel-card flex flex-col items-center text-center ${color}`}>
      <div className="mb-3 text-foreground">{icon}</div>
      <h3 className="font-medium text-foreground">{name}</h3>
    </div>
  )
}

export default function SkillGrid() {
  // This would normally use actual icons from lucide-react
  // For simplicity, we're using placeholders
  const skills = [
    { name: "React", icon: "⚛️", color: "bg-pastel-blue/30" },
    { name: "Next.js", icon: "▲", color: "bg-pastel-purple/30" },
    { name: "TypeScript", icon: "TS", color: "bg-pastel-blue/30" },
    { name: "Tailwind CSS", icon: "🎨", color: "bg-pastel-green/30" },
    { name: "UI/UX Design", icon: "🎯", color: "bg-pastel-pink/30" },
    { name: "Animation", icon: "✨", color: "bg-pastel-yellow/30" },
    { name: "Responsive Design", icon: "📱", color: "bg-pastel-blue/30" },
    { name: "Accessibility", icon: "♿", color: "bg-pastel-green/30" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
  )
}
