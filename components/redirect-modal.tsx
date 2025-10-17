"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Loader2 } from "lucide-react"

interface RedirectModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  url: string
}

export function RedirectModal({ open, onOpenChange, url }: RedirectModalProps) {
  const [loading, setLoading] = useState(false)

  const handleContinue = () => {
    setLoading(true)
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer")
      setLoading(false)
      onOpenChange(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-primary/40 max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            <DialogTitle className="text-2xl">You're about to be redirected.</DialogTitle>
          </div>
          <DialogDescription className="text-base leading-relaxed pt-4">
            You are trying to access <span className="text-primary font-semibold break-all">{url}</span> from{" "}
            <span className="font-bold text-foreground">https://wsgpolar.me</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-3 mt-6">
          <Button
            variant="outline"
            className="flex-1 bg-transparent"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handleContinue}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Redirecting...
              </>
            ) : (
              "Continue anyways"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
