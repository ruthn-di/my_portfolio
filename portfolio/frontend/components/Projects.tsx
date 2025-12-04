import Image from "next/image";
import { motion} from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Model Integration",
      img: "/integration.png",
      description: "Integration of an e-commerce website mockup.",
      tags: ["HTML", "TailwindCSS"],
      link: "#",
      shadow: "hover:shadow-lg hover:shadow-neon/20",
    },
    {
      title: "Sticky-notes (Post-it)",
      img: "/postit.png",
      description: "A website which allows you to manage all your differents sticky notes. ",
      tags: ["Vue.js", "TailwindCSS", "JavaScript", "External API"],
      link: "https://my-postit.vercel.app/",
      shadow: "hover:shadow-lg hover:shadow-cyber/20",
    },
    {
      title: "Microservice",
      img: "/flaskAuthentif.png",
      description: "A full-stack web application for authentication system.",
      tags: ["Flask", "Vue.js", "TailwindCSS", "SQLite"],
      link: "#",
      shadow: "hover:shadow-lg hover:shadow-matrix/20",
    },
    {
      title: "Rotten-Tomatoes",
      img: "/rotten_tomatoes.png",
      description: "A full-stack web application for movies presentation.",
      tags: ["Next.js", "TailwindCSS", "MongoDB", "TMDB API", ],
      link: "https://rotten-tomatoes-1.onrender.com/",
      shadow: "hover:shadow-lg hover:shadow-matrix/20",
    },
    {
      title: "TrellTech",
      img: "/trello app.png",
      description: "Mobile application frontend clone of Trello (project management tool).",
      tags: ["React Native", "TailwindCSS", "Trello API"],
      link: "#",
      shadow: "hover:shadow-lg hover:shadow-matrix/20",
    },
    {
      title: "Portfolio",
      img: "/portfolio.png",
      description: "My portfolio, which allows me to introduce myself and my various projects.",
      tags: ["Flask", "Next.js", "TailwindCSS"],
      link: "https://devfolio-jet-five.vercel.app/",
      shadow: "hover:shadow-lg hover:shadow-matrix/20",
    },
  ];

  return (
    <section id="projects" className="py-10 px-8 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <motion.h2 
            className="text-4xl font-bold mb-12 text-white"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            Featured <span className="text-indigo-600">Projects</span>
        </motion.h2>

        <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`backdrop-blur-md border border-white/10 rounded-xl overflow-hidden ${project.shadow} transition-all h-full`
                }
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
              <div className="relative w-full h-48">
                <Image src={project.img} alt={project.title} fill className="object-cover" />
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
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}