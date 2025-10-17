"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [showContent, setShowContent] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [currentNameIndex, setCurrentNameIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typedLetters, setTypedLetters] = useState<Array<{ char: string; id: string }>>([])

  const names = ["Polar", "Josh Clark"]

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500)
  }, [])

  useEffect(() => {
    const currentName = names[currentNameIndex]
    const typingSpeed = isDeleting ? 50 : 150
    const pauseTime = isDeleting ? 500 : 4000

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentName) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setCurrentNameIndex((prev) => (prev + 1) % names.length)
        setTypedLetters([])
      } else if (isDeleting) {
        const newText = currentName.substring(0, displayText.length - 1)
        setDisplayText(newText)
        setTypedLetters((prev) => prev.slice(0, -1))
      } else {
        const newText = currentName.substring(0, displayText.length + 1)
        setDisplayText(newText)
        const newChar = currentName[displayText.length]
        setTypedLetters((prev) => [
          ...prev,
          { char: newChar, id: `${currentNameIndex}-${displayText.length}-${Date.now()}` },
        ])
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, currentNameIndex, isDeleting])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-6">
          <div
            className={`transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-white/70 text-lg mb-4 animate-fade-in-up">Hi, my name is</p>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 min-h-[120px] flex items-center justify-center">
              <span className="inline-flex text-white" style={{ textShadow: "0 0 40px rgba(255, 255, 255, 0.3)" }}>
                {typedLetters.map((letter) => (
                  <span key={letter.id} className="inline-block letter-animate">
                    {letter.char === " " ? "\u00A0" : letter.char}
                  </span>
                ))}
                <span className="animate-pulse ml-1 text-white">|</span>
              </span>
            </h1>

            <p
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 animate-fade-in-up tracking-tight"
              style={{ animationDelay: "0.3s", fontFamily: "var(--font-heading)" }}
            >
              Fullstack Developer
            </p>
            <p
              className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Crafting digital experiences since March 11th, 2017. Passionate about building innovative solutions with
              modern technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  )
}
