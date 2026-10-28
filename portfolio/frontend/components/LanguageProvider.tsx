"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

export type Language = "en" | "fr";

// Cette valeur est utilisée avant que la langue du navigateur soit connue.
const LanguageContext = createContext<Language>("en");

type LanguageProviderProps = {
  children: ReactNode;
};

function subscribeToLanguage(onChange: () => void) {
  window.addEventListener("languagechange", onChange);
  return () => window.removeEventListener("languagechange", onChange);
}

function getBrowserLanguage(): Language {
  return navigator.language.split("-")[0].toLowerCase() === "fr" ? "fr" : "en";
}

function getServerLanguage(): Language {
  return "en";
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getBrowserLanguage,
    getServerLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
