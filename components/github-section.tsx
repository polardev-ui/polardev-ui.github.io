"use client"

import { useEffect, useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, GraduationCap, ExternalLink } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
}

export function GitHubSection() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    console.log("[v0] Fetching GitHub repos for polardev-ui...")

    fetch("https://api.github.com/users/polardev-ui/repos?sort=updated&per_page=6", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((res) => {
        console.log("[v0] GitHub API response status:", res.status)
        if (!res.ok) {
          throw new Error(`GitHub API returned ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        console.log("[v0] GitHub repos fetched:", data.length, "repos")
        console.log("[v0] First repo:", data[0])
        setRepos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("[v0] Error fetching repos:", err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section id="github" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className={`scroll-reveal ${revealed ? "revealed" : ""} text-center mb-16`}>
          <h2 className="text-5xl font-bold mb-4 text-white">
            GitHub <span className="text-white/80">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>

          <Card className="glass glass-hover inline-flex items-center gap-3 px-6 py-4 border-white/40 animate-pulse-glow">
            <GraduationCap className="h-6 w-6 text-white" />
            <div className="text-left">
              <p className="font-semibold text-white">GitHub Education Student</p>
              <p className="text-sm text-white/70">Certified with Education Perks Enabled</p>
            </div>
          </Card>
        </div>

        {error && (
          <div className="text-center mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-red-400">Failed to load repositories: {error}</p>
            <p className="text-sm text-white/60 mt-2">Please check the console for more details.</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="glass p-6 border-white/20">
                  <Skeleton className="h-6 w-3/4 mb-4 bg-white/10" />
                  <Skeleton className="h-4 w-full mb-2 bg-white/10" />
                  <Skeleton className="h-4 w-5/6 mb-4 bg-white/10" />
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-16 bg-white/10" />
                    <Skeleton className="h-6 w-16 bg-white/10" />
                  </div>
                  <Skeleton className="h-10 w-full bg-white/10" />
                </Card>
              ))
            : repos.length > 0
              ? repos.map((repo, index) => (
                  <Card
                    key={repo.id}
                    className={`scroll-reveal ${revealed ? "revealed" : ""} glass glass-hover p-6 border-white/20 group`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Github className="h-6 w-6 text-white" />
                      <div className="flex items-center gap-4 text-sm text-white/70">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/80 transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {repo.description || "No description available"}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.language && (
                        <Badge variant="secondary" className="text-xs bg-white/10 text-white border-white/20">
                          {repo.language}
                        </Badge>
                      )}
                      {repo.topics?.slice(0, 2).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs border-white/30 text-white">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full glossy-button text-white bg-transparent" variant="outline" asChild>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        View Repository
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </Card>
                ))
              : !loading && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-white/70">No repositories found.</p>
                  </div>
                )}
        </div>

        <div className={`text-center mt-12 scroll-reveal ${revealed ? "revealed" : ""}`}>
          <Button size="lg" className="glossy-button text-white" asChild>
            <a href="https://github.com/polardev-ui" target="_blank" rel="noopener noreferrer">
              View All Repositories
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
