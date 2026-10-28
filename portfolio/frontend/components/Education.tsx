"use client";

import { useLanguage } from "./LanguageProvider";

export default function Education() {
  const french = useLanguage() === "fr";
  const education = [
    {
      title: french ? "Licence en informatique" : "Bachelor’s Degree in Computer Science",
      school: french ? "Université Virtuelle de Côte d’Ivoire" : "Virtual University of Ivory Coast",
      year: french ? "Septembre 2023 - Aujourd’hui" : "September 2023 - Now",
      description: french ? "Spécialisation en sciences du numérique." : "Specialized in Digital Science.",
    },
    {
      title: french ? "Formation en développement frontend" : "Frontend Developer Program",
      school: "DigiFemmes Academy",
      year: french ? "Janvier 2025 - Mars 2025 (3 mois)" : "January 2025 - March 2025 (3 months)",
      description: french ? "Maîtrise de HTML5, CSS3, TailwindCSS, Vercel et GitHub." : "Mastered HTML5, CSS3, TailwindCSS, Vercel, GitHub.",
    },
    {
      title: french ? "Formation en développement fullstack" : "Fullstack Developer Program",
      school: "We.Code by Epitech",
      year: french ? "Juin 2025 - Décembre 2025 (6 mois)" : "June 2025 - December 2025 (06 months)",
      description: french ? "Maîtrise de React, Vue.js, React Native, Next.js, Node.js, Flask, Nest.js, Python, JavaScript, TypeScript, MongoDB, SQL, SQLite, Git et Render." : "Mastered React, Vue.js, React Native, Next.js, Node.js, Flask, Nest.js, Python, JavaScript, TypeScript, MongoDB, SQL, SQLite, Git, Render.",
    },
  ];

  return (
    <section id="education" className="py-13 px-8 bg-linear-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto">
        <h2 
          data-reveal="from-left"
          className="text-4xl font-bold mb-12 text-indigo-600"
        >
          {french ? "Formation" : "Education"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, i) => (
            <div
              data-reveal
              data-reveal-hover
              style={{ transitionDelay: `${i * 90}ms` }}
              key={item.title}
              className="glass-card rounded-xl p-6 hover:transform hover:scale-105 transition-all border border-gray-700 shadow-lg shadow-gray-900/20"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-neon">{item.title}</h3>
                <p className="text-sm opacity-75">{item.school}</p>
                <p className="text-sm opacity-50 italic">{item.year}</p>
              </div>
              <p className="opacity-80 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
