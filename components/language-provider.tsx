"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { type Language, translations } from "@/lib/i18n"

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = "portfolio-language"

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt"
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored && stored in translations) return stored
  const browser = window.navigator.language.slice(0, 2).toLowerCase()
  if (browser === "en") return "en"
  if (browser === "es") return "es"
  return "pt"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")

  useEffect(() => {
    setLanguageState(detectInitialLanguage())
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
