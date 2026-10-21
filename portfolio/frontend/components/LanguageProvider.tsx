"use client";

import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";

export type Language = "en" | "fr";

// Cette valeur est utilisée avant que la langue du navigateur soit connue.
const LanguageContext = createContext<Language>("en");

type LanguageProviderProps = {
  children: ReactNode;
  initialLanguage: Language;
};

export function LanguageProvider({
  children,
  initialLanguage,
}: LanguageProviderProps) {
  useEffect(() => {
    // Indique la langue de la page aux navigateurs et lecteurs d’écran.
    document.documentElement.lang = initialLanguage;
  }, [initialLanguage]);

  return <LanguageContext.Provider value={initialLanguage}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
