"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Projects() {
  const french = useLanguage() === "fr";
  const projects = [
    {
      title: "Model Integration",
      img: "/integration.png",
      description: french ? "Intégration d’une maquette de site e-commerce." : "Integration of an e-commerce website mockup.",
      tags: ["HTML", "TailwindCSS"],
      link: "https://integration-self-seven.vercel.app/",
      shadow: "hover:shadow-lg hover:shadow-neon/20",
    },
    {
      title: "Sticky-notes (Post-it)",
      img: "/postit.png",
      description: french ? "Un site pour créer et gérer vos pense-bêtes." : "A website which allows you to manage all your different sticky notes.",
      tags: ["Vue.js", "TailwindCSS", "JavaScript", "External API"],
      link: "https://my-postit.vercel.app/",
      shadow: "hover:shadow-lg hover:shadow-cyber/20",
    },
    {
      title: "Microservice",
      img: "/flaskAuthentif.png",
      description: french ? "Une application web fullstack avec un système d’authentification." : "A full-stack web application for authentication system.",
      tags: ["Flask", "Vue.js", "TailwindCSS", "SQLite"],
      link: "#",
      shadow: "hover:shadow-lg hover:shadow-matrix/20",
    },
    {
      title: "Rotten-Tomatoes",
      img: "/rotten_tomatoes.png",
      description: french ? "Une application web fullstack de présentation de films." : "A full-stack web application for movie presentation.",
      tags: ["Next.js", "TailwindCSS", "MongoDB", "TMDB API", ],
      link: "https://rotten-tomatoes-1.onrender.com/",
      shadow: "hover:shadow-lg hover:shadow-matrix/20",
    },
    {
      title: "TrellTech",
      img: "/trello app.png",
      description: french ? "Une application mobile reproduisant l’interface de Trello, outil de gestion de projets." : "Mobile application frontend clone of Trello (project management tool).",
      tags: ["React Native", "TailwindCSS", "Trello API"],
      link: "#",
      shadow: "hover:shadow-lg hover:shadow-matrix/20",
    },
    {
      title: "Portfolio",
      img: "/portfolio.png",
      description: french ? "Mon portfolio pour me présenter et présenter mes différents projets." : "My portfolio, which allows me to introduce myself and my various projects.",
      tags: ["Flask", "Next.js", "TailwindCSS"],
      link: "https://devfolio-jet-five.vercel.app/",
      shadow: "hover:shadow-lg hover:shadow-matrix/20",
    },
  ];

  return (
    <section id="projects" className="py-10 px-8 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <h2 
            data-reveal="from-left"
            className="text-4xl font-bold mb-12 text-white"
        >
            {french ? <>Projets <span className="text-indigo-600">à la une</span></> : <>Featured <span className="text-indigo-600">Projects</span></>}
        </h2>

        <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <div
              data-reveal
              data-reveal-hover
              style={{ transitionDelay: `${i * 80}ms` }}
              key={project.title}
              className={`backdrop-blur-md border border-white/10 rounded-xl overflow-hidden ${project.shadow} transition-all h-full`
                }
  
            >
              <div className="relative w-full h-48">
                <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="opacity-80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-900/30 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-cyan-400 hover:underline">
                  {french ? "Voir le projet →" : "View Project →"}
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
