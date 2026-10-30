
"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Projects() {
  const french = useLanguage() === "fr";

  const projects = [
    {
      title: "Model Integration",
      img: "/integration.png",
      description: french
        ? "Intégration d’une maquette de site e-commerce."
        : "Integration of an e-commerce website mockup.",
      tags: ["HTML", "TailwindCSS"],
      link: "https://integration-self-seven.vercel.app/",
    },
    {
      title: "Sticky-notes (Post-it)",
      img: "/postit.png",
      description: french
        ? "Un site pour créer et gérer vos pense-bêtes."
        : "A website which allows you to manage all your different sticky notes.",
      tags: ["Vue.js", "TailwindCSS", "JavaScript", "External API"],
      link: "https://my-postit.vercel.app/",
    },
    {
      title: "Microservice",
      img: "/flaskAuthentif.png",
      description: french
        ? "Une application web fullstack avec un système d’authentification."
        : "A full-stack web application for authentication system.",
      tags: ["Flask", "Vue.js", "TailwindCSS", "SQLite"],
      link: "#",
    },
    {
      title: "Rotten-Tomatoes",
      img: "/rotten_tomatoes.png",
      description: french
        ? "Une application web fullstack de présentation de films."
        : "A full-stack web application for movie presentation.",
      tags: ["Next.js", "TailwindCSS", "MongoDB", "TMDB API"],
      link: "https://rotten-tomatoes-1.onrender.com/",
    },
    {
      title: "TrellTech",
      img: "/trello app.png",
      description: french
        ? "Une application mobile reproduisant l’interface de Trello, outil de gestion de projets."
        : "Mobile application frontend clone of Trello (project management tool).",
      tags: ["React Native", "TailwindCSS", "Trello API"],
      link: "#",
    },
    {
      title: "Portfolio",
      img: "/portfolio.png",
      description: french
        ? "Mon portfolio pour me présenter et présenter mes différents projets."
        : "My portfolio, which allows me to introduce myself and my various projects.",
      tags: ["Flask", "Next.js", "TailwindCSS"],
      link: "https://wyrndev.vercel.app/",
    },
  ];

  // Animation du conteneur
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Animation des cartes
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation du titre
  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-10 px-8 bg-[#0a0a0a]">
      <div className="container mx-auto">

        {/* Titre */}
        <motion.h2
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl font-bold mb-12 text-indigo-600 px-7"
        >
          {french ? (
            <>
              Projets <span className="text-indigo-600">à la une</span>
            </>
          ) : (
            <>
              Featured <span className="text-indigo-600">Projects</span>
            </>
          )}
        </motion.h2>

        {/* Grille des projets */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                borderColor: "rgba(99, 102, 241, 0.7)",
                boxShadow: "0px 15px 35px rgba(99, 102, 241, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative backdrop-blur-md border border-white/10 rounded-xl overflow-hidden h-full flex flex-col transform-gpu"
            >
              {/* Image du projet */}
              <div className="relative w-full h-48 shrink-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Informations du projet */}
              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>

                {/* Description avec hauteur minimale fixe */}
                <p className="opacity-80 mb-4 h-12 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-900/30 rounded-full text-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Lien toujours positionné en bas */}
                <a
                  href={project.link}
                  className="mt-auto inline-block text-cyan-400 hover:text-indigo-400 transition-colors duration-300 hover:underline"
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                >
                  {french ? "Voir le projet →" : "View Project →"}
                </a>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
