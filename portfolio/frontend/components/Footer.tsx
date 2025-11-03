"use client";
import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 600) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => 
    window.removeEventListener("scroll", handleScroll);

  }, [])  

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="z-50 text-center bg-black sticky bottom-0 left-0 right-0 p-3 shadow-inner">
      <a
          href="#"
          className="flex items-center justify-center space-x-2 transition-colors duration-300 p-3"
        >
          <Code2 className="text-indigo-600 w-7 h-7" />
          <span className="text-white  text-2xl font-extrabold">
            Dev
            <span className="text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
              Folio
            </span>
          </span>
        </a>

      <span className="block text-sm text-center text-gray-500">
        © 2025 DevFolio. All Rights Reserved.
      </span>

      <ul className="flex justify-center mt-5 space-x-5">
        {/* Facebook */}
        <li>
          <a
            href="https://facebook.com/sarah.esther.7393"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 
                8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 
                3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 
                0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 
                21.128 22 16.991 22 12z"
              ></path>
            </svg>
          </a>
        </li>

        {/* WhatsApp */}
        <li>
          <a
            href="https://wa.me/2250506037401"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-600 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 
                0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 
                117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 
                0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 
                341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 
                18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 
                0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 
                130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 
                184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 
                2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 
                5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 
                1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 
                57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 
                16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 
                3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"
              ></path>
            </svg>
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/wodjari-yepab-ruth-n-di/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 
                64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 
                32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 
                38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 
                0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 
                .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 
                44.3 79.7 101.9l0 117.2-66.4 0z"
              ></path>
            </svg>
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="https://github.com/ruthn-di"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 
                8.18 6.839 9.504.5.092.682-.217.682-.483 
                0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 
                1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 
                1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 
                0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 
                0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 
                6.844c.85.004 1.705.115 2.504.337 1.909-1.296 
                2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 
                2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 
                4.695-4.566 4.943.359.309.678.92.678 1.855 
                0 1.338-.012 2.419-.012 2.747 0 
                .268.18.58.688.482A10.019 10.019 0 0022 
                12.017C22 6.484 17.522 2 12 2z"
              ></path>
            </svg>
          </a>
        </li>

        {/* Gmail */}
        <li>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-500 transition-colors duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg"  
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 50 50"
              aria-hidden="true"

              >
              <path 
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"
              ></path>

              
            </svg>
          </a>
        </li>
      </ul>
      {showButton && (
        <div className="fixed bottom-0 right-0 p-4">
            <button className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg animate-bounce" onClick={backToTop}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
            </button>
        </div>
      )}
    </div>
  );
}