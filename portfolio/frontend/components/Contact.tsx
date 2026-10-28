"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, PenLine, Phone, Tag, UserRound } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
    const french = useLanguage() === "fr";
    const [isSending, setIsSending] = useState(false);
    const [formMessage, setFormMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsSending(true);
      setFormMessage("");

      const form = event.currentTarget;
      const formData = new FormData(form);

      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const response = await fetch(`${apiUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(formData.entries())),
        });

        if (!response.ok) {
          if (response.status === 503) {
            setFormMessage(french
              ? "Le service e-mail n’est pas configuré sur le serveur."
              : "The email service is not configured on the server.");
          } else if (response.status === 502) {
            setFormMessage(french
              ? "Gmail n’a pas accepté l’envoi. Vérifiez le mot de passe d’application et la connexion SMTP."
              : "Gmail could not send the message. Check the app password and SMTP connection.");
          } else {
            setFormMessage(french
              ? "Le serveur de contact a rencontré une erreur. Réessayez plus tard."
              : "The contact server encountered an error. Please try again later.");
          }
          return;
        }

        form.reset();
        setFormMessage(french ? "Votre message a bien été envoyé. Nous vous répondrons sous peu." : "Your message has been sent successfully. We will respond shortly.");
      } catch {
        setFormMessage(french
          ? "Impossible de joindre le serveur Flask. Vérifiez qu’il est démarré et que l’adresse API est correcte."
          : "Could not reach the Flask server. Check that it is running and that the API address is correct.");
      } finally {
        setIsSending(false);
      }
    }

    return(
        <>

<section
   id="contact" 
  className="relative z-10 overflow-hidden py-12 sm:py-16 lg:py-24 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300"
>
  <div className="container mx-auto">
    <h2 
          data-reveal="from-left"
          className="text-4xl font-bold mb-12 text-indigo-600 px-7"
        >
          Contact
    </h2>
    <div className="mx-4 flex flex-wrap justify-center lg:justify-between">
      {/* <!-- Contact Form --> */}
      <div className="order-2 w-full px-4 lg:order-1 lg:w-1/2 xl:w-5/12">
        <div
          data-reveal
          data-reveal-hover
          className="relative rounded-lg p-4 shadow-2xl sm:p-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <form
            className="rounded-xl bg-gray-100 dark:bg-gray-700 p-5 transition-colors duration-300"
            id="contactForm"
            onSubmit={handleSubmit}
          >
            <div className="absolute -left-[10000px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            {formMessage && (
              <p role="status" className="mb-5 text-sm" aria-live="polite">
                {formMessage}
              </p>
            )}
            {/* <!-- Name --> */}
            <div className="mb-6">
              <div className="relative">
                <div
                  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <UserRound aria-hidden="true" size={18} className="text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  maxLength={100}
                  placeholder={french ? "Nom" : "Name"}
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* <!-- Email --> */}
            <div className="mb-6">
              <div className="relative">
                <div
                  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <Mail aria-hidden="true" size={18} className="text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  maxLength={254}
                  placeholder={french ? "Adresse e-mail" : "Email Address"}
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            {/* <!-- Message Subject --> */}
            <div className="mb-6">
              <div className="relative">
                <div
                  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <Tag aria-hidden="true" size={18} className="text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  name="subject"
                  maxLength={150}
                  placeholder={french ? "Objet du message" : "Message Subject"}
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* <!-- Message --> */}
            <div className="mb-6">
              <div className="relative">
                <div
                  className="absolute top-3 left-3 pointer-events-none"
                >
                  <PenLine aria-hidden="true" size={18} className="text-gray-500 dark:text-gray-400" />
                </div>
                <textarea
                  rows={6}
                  name="message"
                  maxLength={5000}
                  placeholder={french ? "Votre message" : "Message"}
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
            </div>

            {/* <!-- Submit --> */}
            <div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors font-semibold"
              >
                {isSending ? (french ? "Envoi…" : "Sending…") : (french ? "Envoyer" : "Submit")}
              </button>
            </div>
          </form>

          {/* <!-- Decorative elements --> */}
          <div>
            <span className="absolute -right-9 -top-10 z-[-1]">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                  className="fill-indigo-500 dark:fill-indigo-700"
                />
              </svg>
            </span>
            <span className="absolute -right-10 top-[90px] z-[-1]">
             <span aria-hidden="true" className="contact-dot-pattern block" />
            </span>
            <span className="absolute -bottom-7 -left-7 z-[-1]">
             <svg width="107" height="134" viewBox="0 0 107 134" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#4338ca"></circle><circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#4338ca"></circle><circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#4338ca"></circle><circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#4338ca"></circle><circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#4338ca"></circle><circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#4338ca"></circle><circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#4338ca"></circle><circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#4338ca"></circle><circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#4338ca"></circle><circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#4338ca"></circle><circle cx="90.3333" cy="132" r="1.66667" transform="rotate(180 90.3333 132)" fill="#4338ca"></circle><circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)" fill="#4338ca"></circle><circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)" fill="#4338ca"></circle><circle cx="90.3333" cy="88" r="1.66667" transform="rotate(180 90.3333 88)" fill="#4338ca"></circle><circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)" fill="#4338ca"></circle><circle cx="90.3333" cy="45" r="1.66667" transform="rotate(180 90.3333 45)" fill="#4338ca"></circle><circle cx="90.3333" cy="16" r="1.66667" transform="rotate(180 90.3333 16)" fill="#4338ca"></circle><circle cx="90.3333" cy="59" r="1.66667" transform="rotate(180 90.3333 59)" fill="#4338ca"></circle><circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)" fill="#4338ca"></circle><circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)" fill="#4338ca"></circle><circle cx="75.6654" cy="132" r="1.66667" transform="rotate(180 75.6654 132)" fill="#4338ca"></circle><circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#4338ca"></circle><circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)" fill="#4338ca"></circle><circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#4338ca"></circle><circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)" fill="#4338ca"></circle><circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#4338ca"></circle><circle cx="75.6654" cy="88" r="1.66667" transform="rotate(180 75.6654 88)" fill="#4338ca"></circle><circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#4338ca"></circle><circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)" fill="#4338ca"></circle><circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#4338ca"></circle><circle cx="75.6654" cy="45" r="1.66667" transform="rotate(180 75.6654 45)" fill="#4338ca"></circle><circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#4338ca"></circle><circle cx="75.6654" cy="16" r="1.66667" transform="rotate(180 75.6654 16)" fill="#4338ca"></circle><circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#4338ca"></circle><circle cx="75.6654" cy="59" r="1.66667" transform="rotate(180 75.6654 59)" fill="#4338ca"></circle><circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#4338ca"></circle><circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)" fill="#4338ca"></circle><circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#4338ca"></circle><circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)" fill="#4338ca"></circle><circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#4338ca"></circle><circle cx="60.9993" cy="132" r="1.66667" transform="rotate(180 60.9993 132)" fill="#4338ca"></circle><circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#4338ca"></circle><circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)" fill="#4338ca"></circle><circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#4338ca"></circle><circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)" fill="#4338ca"></circle><circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#4338ca"></circle><circle cx="60.9993" cy="88" r="1.66667" transform="rotate(180 60.9993 88)" fill="#4338ca"></circle><circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#4338ca"></circle><circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)" fill="#4338ca"></circle><circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#4338ca"></circle><circle cx="60.9993" cy="45" r="1.66667" transform="rotate(180 60.9993 45)" fill="#4338ca"></circle><circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#4338ca"></circle><circle cx="60.9993" cy="16" r="1.66667" transform="rotate(180 60.9993 16)" fill="#4338ca"></circle><circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#4338ca"></circle><circle cx="60.9993" cy="59" r="1.66667" transform="rotate(180 60.9993 59)" fill="#4338ca"></circle><circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#4338ca"></circle><circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)" fill="#4338ca"></circle><circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#4338ca"></circle><circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)" fill="#4338ca"></circle><circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#4338ca"></circle><circle cx="46.3333" cy="132" r="1.66667" transform="rotate(180 46.3333 132)" fill="#4338ca"></circle><circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#4338ca"></circle><circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)" fill="#4338ca"></circle><circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#4338ca"></circle><circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)" fill="#4338ca"></circle><circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#4338ca"></circle><circle cx="46.3333" cy="88" r="1.66667" transform="rotate(180 46.3333 88)" fill="#4338ca"></circle><circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#4338ca"></circle><circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)" fill="#4338ca"></circle><circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#4338ca"></circle><circle cx="46.3333" cy="45" r="1.66667" transform="rotate(180 46.3333 45)" fill="#4338ca"></circle><circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#4338ca"></circle><circle cx="46.3333" cy="16" r="1.66667" transform="rotate(180 46.3333 16)" fill="#4338ca"></circle><circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#4338ca"></circle><circle cx="46.3333" cy="59" r="1.66667" transform="rotate(180 46.3333 59)" fill="#4338ca"></circle><circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#4338ca"></circle><circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)" fill="#4338ca"></circle><circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#4338ca"></circle><circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)" fill="#4338ca"></circle><circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#4338ca"></circle></svg>
            </span>
          </div>
        </div>
      </div>

      {/* <!-- Contact Information --> */}
      <div className="order-1 w-full px-4 lg:order-2 lg:w-1/2 xl:w-6/12">
        <div data-reveal="from-right" className="mb-12 px-5 pt-3 sm:max-w-[570px] lg:mb-0">
          <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              {french ? "Me contacter" : "Get in Touch"}
          </h2>
          <div className="mb-8">
            <p className="text-base leading-relaxed">
              {french ? "Une question, une idée de projet ou simplement envie de dire bonjour ? Écrivez-moi, je serai ravie de vous lire. Que vous souhaitiez collaborer, obtenir des informations ou partager un retour, je serai heureuse d’échanger avec vous." : "Have a question, a project idea, or just want to say hello? Feel free to reach out — I’d love to hear from you. Whether you’re looking to collaborate, need more information, or simply want to share feedback, I’m always happy to connect and help."}
            </p>
          </div>

          {/* <!-- Phone --> */}
          <div className="mb-8 flex w-full max-w-[330px] gap-3">
            <div
              className="mr-6 flex h-10 w-full max-w-10 items-center justify-center overflow-hidden rounded-sm bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-500 dark:text-indigo-400 sm:h-[70px] sm:max-w-[70px]"
            >
              <Phone aria-hidden="true" size={20} />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-base sm:text-xl font-bold">{french ? "Téléphone" : "Phone Number"}</h4>
              <p className="text-xs sm:text-base"><a href="tel:+2250506037401">+225 05 06 03 74 01</a></p>
            </div>
          </div>

          {/* <!-- Email --> */}
          <div className="mb-8 flex w-full max-w-[330px] gap-3">
            <div
              className="mr-6 flex h-10 w-full max-w-10 items-center justify-center overflow-hidden rounded-sm bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-500 dark:text-indigo-400 sm:h-[70px] sm:max-w-[70px]"
            >
              <i className="fas fa-envelope text-xl"></i>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-base sm:text-xl font-bold">{french ? "Adresse e-mail" : "Email Address"}</h4>
              <p className="text-xs sm:text-base"><a target="_blank" href="mailto:ruth.n-di@epitech.eu">ruth.n-di@epitech.eu</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
