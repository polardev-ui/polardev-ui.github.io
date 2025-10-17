"use client"

import { Code2, Palette, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const skills = [
  { name: "Python", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Zap },
  { name: "HTML", icon: Palette },
  { name: "CSS", icon: Palette },
  { name: "C#", icon: Code2 },
  { name: "XAML", icon: Palette },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="scroll-reveal">
          <h2 className="text-5xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="scroll-reveal">
            <Card className="glass p-8 border-primary/20 hover:border-primary/40 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My coding journey began on <span className="text-primary font-semibold">March 11th, 2017</span>, when I
                received my first computer. Since that day, I've been passionate about creating innovative solutions and
                pushing the boundaries of what's possible with code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a fullstack developer, I love working across the entire stack - from crafting beautiful, responsive
                user interfaces to building robust backend systems. Every project is an opportunity to learn something
                new and create something amazing.
              </p>
            </Card>
          </div>

          <div className="scroll-reveal">
            <h3 className="text-2xl font-bold mb-6">Technologies I Work With</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <Card
                    key={skill.name}
                    className="glass p-6 border-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 cursor-pointer group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
