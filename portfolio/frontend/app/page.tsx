import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
