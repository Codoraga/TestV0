"use client"

import { Button } from "@/components/ui/button"
import { Grid2X2, List } from "lucide-react"

interface ViewToggleProps {
  view: "grid" | "list"
  setView: (view: "grid" | "list") => void
}

export function ViewToggle({ view, setView }: ViewToggleProps) {
  return (
    <div className="flex items-center space-x-2 bg-muted rounded-full p-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setView("grid")}
        className={`rounded-full w-8 h-8 ${
          view === "grid" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
        }`}
      >
        <Grid2X2 className="h-4 w-4" />
        <span className="sr-only">Grid view</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setView("list")}
        className={`rounded-full w-8 h-8 ${
          view === "list" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
        }`}
      >
        <List className="h-4 w-4" />
        <span className="sr-only">List view</span>
      </Button>
    </div>
  )
}
