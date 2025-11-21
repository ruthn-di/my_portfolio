"use client";
import { useEffect, useRef } from "react";
import {
  Code2,
  User,
  Laptop,
  Mail,
  FileDown,
  GraduationCap,
  Layers
} from "lucide-react";

export default function Header() {
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLElement | null>(null);

  // --- Toggle Mobile Menu ---
  useEffect(() => {
    const menuToggle = menuToggleRef.current;
    const mobileMenu = mobileMenuRef.current;

    if (menuToggle && mobileMenu) {
      const handleMenuToggle = () => {
        mobileMenu.classList.toggle("hidden");
      };
      menuToggle.addEventListener("click", handleMenuToggle);
      return () => menuToggle.removeEventListener("click", handleMenuToggle);
    }
  }, []);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center space-x-2 transition-colors duration-300"
        >
          <Code2 className="text-indigo-600 w-7 h-7" />
          <span className="text-white  text-2xl font-extrabold">
            Dev
            <span className="text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
              Folio
            </span>
          </span>
        </a>

        {/* Bouton Mobile */}
        <button
          ref={menuToggleRef}
          className="md:hidden text-indigo-600 hover:text-indigo-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 text-indigo-600 font-medium">
            

            <li>
              <a
                href="#about"
                className="hover:text-indigo-700 transition flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>About</span>
              </a>
            </li>

            <li>
              <a
                href="#education"
                className="hover:text-indigo-700 transition flex items-center space-x-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </a>
            </li>


            <li>
              <a
                href="#projects"
                className="hover:text-indigo-700 transition flex items-center space-x-2"
              >
                <Laptop className="w-4 h-4" />
                <span>Projects</span>
              </a>
            </li>

             <li>
              <a
                href="#stacks"
                className="hover:text-indigo-700 transition flex items-center space-x-2"
              >
                <Layers className="w-4 h-4" />
                <span>Stacks</span>
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-indigo-700 transition flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </li>

            <li>
              <a
                href="/CV_RUTH_NDI.pdf"
                download={"CV_RUTH_NDI.pdf"}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition font-bold flex items-center space-x-2"
              >
                <FileDown className="w-4 h-4" />
                <span>Download my CV</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu Mobile */}
      <nav
        ref={mobileMenuRef}
        className="hidden md:hidden bg-gray-800/50 w-full transition-all duration-300"
      >
        <div className="px-6 py-4 space-y-2 text-indigo-600">
          <a
            href="#about"
            className="py-2 hover:text-indigo-700 flex items-center space-x-2"
          >
            <User className="w-4 h-4" />
            <span>About</span>
          </a>

            <a
                href="#education"
                className="py-2 hover:text-indigo-700 transition flex items-center space-x-2"
            >
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
            </a>
            
          <a
            href="#projects"
            className="py-2 hover:text-indigo-700 flex items-center space-x-2"
          >
            <Laptop className="w-4 h-4" />
            <span>Projects</span>
          </a>
          
           <a
                href="#stacks"
                className="hover:text-indigo-700 transition flex items-center space-x-2"
              >
                <Layers className="w-4 h-4" />
                <span>Stacks</span>
              </a> 

          <a
            href="#contact"
            className="py-2 hover:text-indigo-700 flex items-center space-x-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>

          <a
            href="/CV_RUTH_NDI.pdf"
            download={"CV_RUTH_NDI.pdf"}
            className="py-2 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700 font-bold flex justify-center items-center space-x-2"
          >
            <FileDown className="w-4 h-4" />
            <span>Download my CV</span>
          </a>
        </div>
      </nav>
    </header>
  );
}