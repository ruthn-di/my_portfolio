"use client";
import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false); 
  const [openShare, setOpenShare] = useState(false);
 

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

      <ul className="flex justify-center mt-3 space-x-5">
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
      </ul>
      {showButton && (
        <div className="fixed bottom-0 right-0 p-4">
            <button className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg animate-bounce">
                <a href="#top">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                  </svg>
                </a>
            </button>
        </div>
      )}

      {/* Floating Share Button */}
      <div className="fixed bottom-20 right-5 z-50">
        {/* Bouton principal Share */}
        <button
          onClick={() => setOpenShare(!openShare)}
          className="bg-indigo-600 text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-indigo-700 transition-all duration-300 animate-pulse"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 10l5-5m0 0l5 5m-5-5v14"
            />
          </svg> */}

         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" className="w-6 h-6"><path fill="#ffffff" d="M371.8 82.4C359.8 87.4 352 99 352 112L352 192L240 192C142.8 192 64 270.8 64 368C64 481.3 145.5 531.9 164.2 542.1C166.7 543.5 169.5 544 172.3 544C183.2 544 192 535.1 192 524.3C192 516.8 187.7 509.9 182.2 504.8C172.8 496 160 478.4 160 448.1C160 395.1 203 352.1 256 352.1L352 352.1L352 432.1C352 445 359.8 456.7 371.8 461.7C383.8 466.7 397.5 463.9 406.7 454.8L566.7 294.8C579.2 282.3 579.2 262 566.7 249.5L406.7 89.5C397.5 80.3 383.8 77.6 371.8 82.6z"/></svg>
        </button>

        {/* Menu des réseaux (animé) */}
        {openShare && (
          <div className="flex flex-col items-end space-y-3 mt-3 animate-pulse">
            
            {/* Facebook */}
            <a
              href="https://facebook.com/sharer/sharer.php?u=https://devfolio-jet-five.vercel.app/"
              target="_blank"
              className="bg-white shadow-lg w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition animate-spin"
            >
              <svg
                className="w-7 h-7 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
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

            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?text=Découvre%20mon%20portfolio%20:%20https://devfolio-jet-five.vercel.app/"
              target="_blank"
              className="bg-white shadow-lg w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition animate-spin"
            >
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 512 512"
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

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://devfolio-jet-five.vercel.app/"
              target="_blank"
              className="bg-white shadow-lg w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition animate-spin"
            >
              <svg
                className="w-5 h-5 text-blue-700"
                viewBox="0 0 512 512"
                fill="currentColor"
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

            {/* Telegram */}
            <a
              href="https://t.me/share/url?url=https://devfolio-jet-five.vercel.app/&text=Découvre%20mon%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition animate-spin"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21.53 2.47a1.97 1.97 0 0 0-2.07-.36L2.72 8.14c-.88.33-.87 1.69.01 1.98l5.36 1.71 
                  1.94 6.13c.17.53.75.74 1.17.43l1.66-1.3 3.55 2.63c.63.46 1.46.04 1.57-.76l2.4-15.87c.1-.63-.43-1.18-1.07-1.07z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:?subject=Découvre%20mon%20portfolio&body=Hello,%0AClique%20ici%20pour voir mon portfolio : https://devfolio-jet-five.vercel.app/"
              className="bg-white text-red-600 p-3 rounded-full shadow-lg hover:scale-110 transition animate-spin"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 
                1.1.9 2 2 2h16c1.1 0 2-.9 
                2-2V6c0-1.1-.9-2-2-2zm0 
                4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}