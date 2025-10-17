"use client"

interface PageTransitionProps {
  isLoaded: boolean
}

export function PageTransition({ isLoaded }: PageTransitionProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-background transition-opacity duration-1000 pointer-events-none ${
        isLoaded ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold gradient-text mb-4 animate-pulse">Polar</div>
          <div className="flex gap-2 justify-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
