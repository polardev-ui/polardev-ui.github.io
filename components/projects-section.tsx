"use client"

// import { useState } from "react"
import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ExternalLink } from 'lucide-react'
// import { RedirectModal } from "@/components/redirect-modal"

/*
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, animated portfolio website built with Next.js, featuring smooth transitions and Halloween-themed design.",
    url: "https://wsgpolar.me",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  // ... other projects
]
*/

export function ProjectsSection() {
  // const [modalOpen, setModalOpen] = useState(false)
  // const [selectedUrl, setSelectedUrl] = useState("")

  // const handleVisit = (url: string) => {
  //   setSelectedUrl(url)
  //   setModalOpen(true)
  // }

  return (
    <section id="projects" className="py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of projects I've built, showcasing my skills across different technologies and domains.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass glass-hover p-12 border-primary/20 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">No Projects Yet</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                I'm currently working on some exciting projects. Check back soon to see what I've been building!
              </p>
            </div>
          </Card>
        </div>

        {/* Commented out project cards for later use */}
        {/*
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="scroll-reveal glass glass-hover p-6 border-primary/20 group flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                className="w-full glossy-button bg-transparent"
                variant="outline"
                onClick={() => handleVisit(project.url)}
              >
                Visit Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
        */}
      </div>

      {/* <RedirectModal open={modalOpen} onOpenChange={setModalOpen} url={selectedUrl} /> */}
    </section>
  )
}
