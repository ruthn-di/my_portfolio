"use client";

import Image from 'next/image';
import { useLanguage } from "./LanguageProvider";

const categoryNamesInFrench: Record<string, string> = {
  Frontend: "Frontend",
  Style: "Style",
  Mobile: "Mobile",
  Backend: "Backend",
  Language: "Langage",
  Database: "Base de données",
  Tools: "Outils",
  Versioning: "Versionnement",
  Deployment: "Déploiement",
};

export default function Stacks() {
  const french = useLanguage() === "fr";
  const stacks = [
    // Frontend
    { name: "React.js", icon: "/assets/tech-icons/react.svg", type: "Frontend" },
    { name: "Vue.js", icon: "/assets/tech-icons/vue.svg", type: "Frontend" },
    { name: "Next.js", icon: "/assets/tech-icons/nextjs.svg", type: "Frontend" },
    { name: "HTML5", icon: "/assets/tech-icons/html5.svg", type: "Frontend" },
    { name: "CSS3", icon: "/assets/tech-icons/css3.svg", type: "Style" },
    { name: "Tailwind", icon: "/assets/tech-icons/tailwind.svg", type: "Style" },
    { name: "React Native", icon: "/assets/tech-icons/react.svg", type: "Mobile" },

    // Backend
    { name: "Flask", icon: "/assets/tech-icons/flask.svg", type: "Backend" },


    // Languages
    { name: "JavaScript", icon: "/assets/tech-icons/javascript.svg", type: "Language" },
    { name: "Python", icon: "/assets/tech-icons/python.svg", type: "Language" },
    { name: "TypeScript", icon: "/assets/tech-icons/typescript.svg", type: "Language" },

    // Databases
    { name: "MongoDB", icon: "/assets/tech-icons/mongodb.svg", type: "Database" },
    { name: "SQL", icon: "/assets/tech-icons/mysql.svg", type: "Database" },
    { name: "SQLite", icon: "/assets/tech-icons/sqlite.svg", type: "Database" },

    // Tools & Deployment
    { name: "Git", icon: "/assets/tech-icons/git.svg", type: "Tools" },
    { name: "GitHub", icon: "/assets/tech-icons/github.svg", type: "Versioning" },
    { name: "Vercel", icon: "/assets/tech-icons/vercel.svg", type: "Deployment" },

  ];

  return (
    <section id="stacks" className="py-10 pb-13 px-8 bg-linear-to-br from-[#0a0a0a] to-gray-900">
      <div className="container mx-auto">
        <h2 
          data-reveal="from-left"
          className="text-4xl font-bold mb-12 text-white"

        >
          {french ? <>Technologies <span className="text-indigo-600">maîtrisées</span></> : <>Tech <span className="text-indigo-600">Stacks</span></>}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {stacks.map((stack, i) => (
            <div
              data-reveal
              data-reveal-hover
              style={{ transitionDelay: `${i * 60}ms` }}
              key={stack.name}
              className="backdrop-blur-md border border-white/10 rounded-xl p-6 text-center bg-gray-600/50 hover:scale-105 transition-transform"

            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-900/30">
                <Image src={stack.icon} alt={stack.name} width={40} height={40} sizes="40px" className="w-10 h-10" unoptimized />
              </div>
              <h3 className="font-bold text-white">{stack.name}</h3>
              <p className="text-sm opacity-70">
                {french ? categoryNamesInFrench[stack.type] || stack.type : stack.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
