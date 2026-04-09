"use client"

import * as React from "react"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type ConsentCategory = "necessary" | "analytics" | "marketing" | "functional"

interface ConsentState {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

interface ConsentContextType {
  consent: ConsentState
  hasConsented: boolean
  acceptAll: () => void
  rejectAll: () => void
  savePreferences: (consent: ConsentState) => void
}

const ConsentContext = React.createContext<ConsentContextType | undefined>(undefined)

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = React.useState<ConsentState>(defaultConsent)
  const [hasConsented, setHasConsented] = React.useState(false)
  const [showBanner, setShowBanner] = React.useState(false)

  React.useEffect(() => {
    const stored = localStorage.getItem("cookie_consent")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setConsent(parsed)
        setHasConsented(true)
      } catch {
        setShowBanner(true)
      }
    } else {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const fullConsent: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setConsent(fullConsent)
    localStorage.setItem("cookie_consent", JSON.stringify(fullConsent))
    setHasConsented(true)
    setShowBanner(false)
  }

  const rejectAll = () => {
    setConsent(defaultConsent)
    localStorage.setItem("cookie_consent", JSON.stringify(defaultConsent))
    setHasConsented(true)
    setShowBanner(false)
  }

  const savePreferences = (prefs: ConsentState) => {
    setConsent(prefs)
    localStorage.setItem("cookie_consent", JSON.stringify(prefs))
    setHasConsented(true)
    setShowBanner(false)
  }

  return (
    <ConsentContext.Provider value={{ consent, hasConsented, acceptAll, rejectAll, savePreferences }}>
      {children}
      {showBanner && <CookieBanner onAccept={acceptAll} onReject={rejectAll} />}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  const context = React.useContext(ConsentContext)
  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider")
  }
  return context
}

function CookieBanner({ onAccept, onReject }: { onAccept: () => void; onReject: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg">
      <Card className="max-w-4xl mx-auto border-0 shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Cookie className="w-5 h-5" />
            Cookie Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-muted-foreground mb-4">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or reject non-essential cookies.
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Necessary - Always active</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Analytics</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">Marketing</span>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded">Functional</span>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button variant="outline" size="sm" onClick={onReject}>
            Reject All
          </Button>
          <Button size="sm" onClick={onAccept}>
            Accept All
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
