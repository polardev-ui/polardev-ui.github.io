"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Youtube, Mail } from "lucide-react"
import { RedirectModal } from "@/components/redirect-modal"

export function ContactSection() {
  const [redirectUrl, setRedirectUrl] = useState("")
  const [showRedirect, setShowRedirect] = useState(false)

  const handleExternalLink = (url: string) => {
    setRedirectUrl(url)
    setShowRedirect(true)
  }

  return (
    <>
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass glass-hover p-12 border-primary/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="scroll-reveal space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

                  <button
                    onClick={() => handleExternalLink("https://github.com/polardev-ui")}
                    className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all group glass-hover w-full text-left"
                  >
                    <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm text-muted-foreground">@polardev-ui</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleExternalLink("https://youtube.com/@wsghaunt")}
                    className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all group glass-hover w-full text-left"
                  >
                    <Youtube className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold">YouTube</p>
                      <p className="text-sm text-muted-foreground">@wsghaunt</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleExternalLink("https://tiktok.com/@wsghaunt")}
                    className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all group glass-hover w-full text-left"
                  >
                    <svg
                      className="h-6 w-6 text-primary group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <div>
                      <p className="font-semibold">TikTok</p>
                      <p className="text-sm text-muted-foreground">@wsghaunt</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleExternalLink("https://discord.com/users/wsghaunt")}
                    className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all group glass-hover w-full text-left"
                  >
                    <svg
                      className="h-6 w-6 text-primary group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Discord</p>
                      <p className="text-sm text-muted-foreground">@wsghaunt</p>
                    </div>
                  </button>
                </div>

                <div className="scroll-reveal flex flex-col justify-center">
                  <div className="text-center p-8 rounded-lg border border-primary/20 bg-primary/5 glass">
                    <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Let's Work Together</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Have a project in mind? I'd love to hear about it and see how we can collaborate.
                    </p>
                    <Button
                      size="lg"
                      className="glossy-button"
                      onClick={() => handleExternalLink("mailto:beluga7133@gmail.com")}
                    >
                      Send a Message
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <p className="text-muted-foreground">
              © 2025 Polar (Josh Clark). Built with Next.js & deployed on GitHub Pages.
            </p>
          </div>
        </div>
      </section>

      <RedirectModal open={showRedirect} onOpenChange={setShowRedirect} url={redirectUrl} />
    </>
  )
}
