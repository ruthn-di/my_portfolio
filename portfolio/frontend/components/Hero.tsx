"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export default function Hero() {
  const french = useLanguage() === "fr";
  return (
    <section
      id="about"
      className="h-1/2 flex items-center pt-6 px-5 relative bg-[#0a0a0a] text-gray-200"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-8">
          <h1
            data-reveal="from-left"
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            {french ? "Bonjour, je suis Ruth" : "Hi, I&apos;m Ruth"} <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#3e19fa] via-[#c609faf3] to-[#4004f5] animate-[gradient-text_5s_ease_infinite]">
              {french ? "Développeuse Web & Mobile" : "Web & Mobile Developer"}
            </span>
          </h1>
          <p
            data-reveal="from-left"
            data-reveal-hover
            className="text-lg opacity-80 max-w-lg"
          >
            {french
              ? "Je crée des expériences numériques intuitives et captivantes. Spécialisée en développement web et mobile, j’allie design soigné et performances optimales dans chaque projet."
              : "Crafting captivating and intuitive digital experiences. Specialized in web and mobile development, I combine sleek design with optimal performance for every project."}
          </p>
          {/* Buttons */}
          <div
            data-reveal="from-left"
            data-reveal-hover
            className="flex space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="px-6 py-3 bg-linear-to-r from-neon to-cyber border border-indigo-400/60 rounded-lg font-medium hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
            >
              <a href="#projects">
                {french ? "Voir les projets" : "View Projects"}
              </a>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="px-6 py-3 border border-indigo-700 rounded-lg hover:bg-indigo-800 transition-all"
            >
              <a href="#contact">{french ? "Me contacter" : "Contact Me"}</a>
            </motion.button>
          </div>
        </div>

        {/* Image */}
        <div
          data-reveal="from-right"
          data-reveal-hover
          className="backdrop-blur-md border border-white/10 rounded-2xl p-1"
        >
          <Image
            src="/assets/hero-developer.jpg"
            alt="Web and Mobile Developer"
            className="rounded-xl w-full h-auto"
            width={800}
            height={600}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
      {/* Background Circles */}
      {/* <>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-500/20 rounded-full animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full animate-[pulse_6s_ease-in-out_infinite]"></div>
      </> */}
    </section>
  );
}
