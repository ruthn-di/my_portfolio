import { headers } from "next/headers";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageProvider";

function getLanguageFromHeader(acceptLanguage: string) {
  // L’en-tête peut contenir plusieurs langues, par exemple : "fr-FR,en-US".
  const firstLanguage = acceptLanguage.split(",")[0] || "en";
  const languageCode = firstLanguage.split("-")[0].toLowerCase();

  // Le site propose le français et l’anglais. L’anglais sert de langue par défaut.
  return languageCode === "fr" ? "fr" : "en";
}

export default async function Home() {
  const requestHeaders = await headers();
  const acceptedLanguages = requestHeaders.get("accept-language") || "en";
  const initialLanguage = getLanguageFromHeader(acceptedLanguages);

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
