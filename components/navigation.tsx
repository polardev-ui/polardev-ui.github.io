"use client"

import { useState, useEffect } from "react"
import { Github, Youtube, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RedirectModal } from "@/components/redirect-modal"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState("")
  const [showRedirect, setShowRedirect] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleExternalLink = (url: string) => {
    setRedirectUrl(url)
    setShowRedirect(true)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="gradient-text">Polar</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("github")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              onClick={() => handleExternalLink("https://github.com/polardev-ui")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              onClick={() => handleExternalLink("https://youtube.com/@wsghaunt")}
            >
              <Youtube className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors"
              onClick={() => handleExternalLink("https://discord.com/users/wsghaunt")}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <RedirectModal open={showRedirect} onOpenChange={setShowRedirect} url={redirectUrl} />
    </>
  )
}
