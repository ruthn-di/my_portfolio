
"use client";

import { motion, type Variants } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Education() {
  const french = useLanguage() === "fr";

  const education = [
    {
      title: french ? "Licence en informatique" : "Bachelor’s Degree in Computer Science",
      school: french ? "Université Virtuelle de Côte d’Ivoire" : "Virtual University of Ivory Coast",
      year: french ? "Septembre 2023 - Juin 2026" : "September 2023 - June 2026",
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
      year: french ? "Juin 2025 - Décembre 2025 (6 mois)" : "June 2025 - December 2025 (6 months)",
      description: french ? "Maîtrise de React, Vue.js, React Native, Next.js, Node.js, Flask, Nest.js, Python, JavaScript, TypeScript, MongoDB, SQL, SQLite, Git et Render." : "Mastered React, Vue.js, React Native, Next.js, Node.js, Flask, Nest.js, Python, JavaScript, TypeScript, MongoDB, SQL, SQLite, Git, Render.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="py-13 px-8 bg-linear-to-br from-gray-900 via-black to-gray-800 text-white"
    >
      <div className="container mx-auto">

        <motion.h2
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-4xl font-bold mb-12 text-indigo-600 px-7"
                >{french ? "Formation" : "Education"}
                </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {education.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                borderColor: "rgba(99, 102, 241, 0.6)",
                boxShadow: "0px 15px 30px rgba(99, 102, 241, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-card rounded-xl p-6 border border-gray-700 shadow-lg shadow-gray-900/20 transform-gpu"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-neon h-16 line-clamp-2 opacity-80">
                  {item.title}
                </h3>

                <p className="text-sm opacity-75">{item.school}</p>

                <p className="text-sm opacity-50 italic">{item.year}</p>
              </div>

              <p className="opacity-80 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
