import Image from 'next/image';
import { motion } from "framer-motion";
import { Typewriter } from "motion-plus-react"


export default function Hero() {
  return (
    <section id="about" className="h-1/2 flex items-center pt-6 px-5 relative bg-[#0a0a0a] text-gray-200">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-8">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            >
            Hi, I&apos;m Ruth<br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#3e19fa] via-[#c609faf3] to-[#4004f5] animate-[gradient-text_5s_ease_infinite]">
              <Typewriter backspace="word">Web & Mobile Developer</Typewriter>
            </span>
          </motion.h1>
          
          <Typewriter 
          className="text-xl font-medium">Crafting captivating and intuitive digital experiences. Specialized in web and mobile development, I combine sleek design with optimal performance for every project.</Typewriter>
          <div/>

          {/* Buttons */}
          <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 100,
              }}
          >
            <button className="px-6 py-3 bg-linear-to-r from-neon to-cyber rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
              <a href="#projects">View Projects</a>
            </button>
            <button className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-all">
              <a href="#contact">Contact Me</a>
            </button>
          </motion.div>
        </div>

          {/* Image */}
          <motion.div 
          className="backdrop-blur-md border border-white/10 rounded-2xl p-1"
          initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 100,
              }}
          >
            <Image
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Web and Mobile Developer"
              className="rounded-xl w-full h-auto"
              width={800}
              height={600}
              priority
              unoptimized
            />
          </motion.div>
        </div>
      {/* Background Circles */}
      <>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-500/20 rounded-full animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full animate-[pulse_6s_ease-in-out_infinite]"></div>
      </>
    </section>
  );
}