import Image from "next/image";
import { motion} from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "PostIt",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Vue.js + Tailwind + JavaScript",
      tags: ["Vue.js", "Tailwind", "JavaScript"],
      link: "#",
      shadow: "hover:shadow-lg hover:shadow-neon/20",
    },
    {
      title: "E-Commerce Platform",
      img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "React + GraphQL + Stripe",
      tags: ["React", "GraphQL", "MongoDB"],
      link: "#",
      shadow: "hover:shadow-lg hover:shadow-cyber/20",
    },
    {
      title: "Blockchain Explorer",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Solidity + Web3.js + Ethers",
      tags: ["Blockchain", "Web3", "React"],
      link: "#",
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