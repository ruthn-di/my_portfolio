import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      title: "Bachelor’s Degree in Computer Science",
      school: "Virtual University of Ivory Coast",
      year: "September 2023 - Now",
      description: "Specialized in Digital Science.",
    },
    {
      title: "Frontend Developer Program",
      school: "DigiFemmes Academy",
      year: "January 2025 - March 2025 (03 months)",
      description: "Mastered HTML5, CSS3, TailwindCSS, Vercel, GitHub.",
    },
    {
      title: "Fullstack Developer Program",
      school: "We.Code by Epitech",
      year: "July 2025 - December 2025 (06 months)",
      description: "Mastered React, Vue.js, React Native, Next.js, Node.js, Flask, Nest.js, Python, JavaScript, TypeScript, MongoDB, SQL, SQLite, Git, Render.",
    },
  ];

  return (
    <section id="education" className="py-13 px-8 bg-linear-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-indigo-600"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-xl p-6 hover:transform hover:scale-105 transition-all border border-gray-700 shadow-lg shadow-gray-900/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-neon">{item.title}</h3>
                <p className="text-sm opacity-75">{item.school}</p>
                <p className="text-sm opacity-50 italic">{item.year}</p>
              </div>
              <p className="opacity-80 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}