import type React from "react"
interface TimelineItemProps {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  isLast?: boolean
}

export default function TimelineItem({ year, title, description, icon, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">{icon}</div>
        {!isLast && <div className="h-full w-0.5 bg-primary/30 mt-2"></div>}
      </div>

      <div className={`pb-12 ${isLast ? "" : "mb-2"}`}>
        <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary-foreground mb-3">
            {year}
          </span>
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
