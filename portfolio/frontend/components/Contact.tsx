
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, PenLine, Phone, Tag, UserRound } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

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
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        if (response.status === 503) {
          setFormMessage(
            french
              ? "Le service e-mail n’est pas configuré sur le serveur."
              : "The email service is not configured on the server."
          );
        } else if (response.status === 502) {
          setFormMessage(
            french
              ? "Gmail n’a pas accepté l’envoi. Vérifiez le mot de passe d’application et la connexion SMTP."
              : "Gmail could not send the message. Check the app password and SMTP connection."
          );
        } else {
          setFormMessage(
            french
              ? "Le serveur de contact a rencontré une erreur. Réessayez plus tard."
              : "The contact server encountered an error. Please try again later."
          );
        }
        return;
      }

      form.reset();

      setFormMessage(
        french
          ? "Votre message a bien été envoyé. Nous vous répondrons sous peu."
          : "Your message has been sent successfully. We will respond shortly."
      );
    } catch {
      setFormMessage(
        french
          ? "Impossible de joindre le serveur Flask. Vérifiez qu’il est démarré et que l’adresse API est correcte."
          : "Could not reach the Flask server. Check that it is running and that the API address is correct."
      );
    } finally {
      setIsSending(false);
    }
  }

  const inputClass =
    "w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300";

  const iconClass = "text-gray-500 dark:text-gray-400";

  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden py-12 sm:py-16 lg:py-24 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="container mx-auto">

        {/* Section Title */}
        <motion.h2
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl font-bold mb-12 text-indigo-600 px-7"
        >
          Contact
        </motion.h2>

        <div className="mx-4 flex flex-wrap justify-center lg:justify-between">

          {/* Contact Form */}
          <div className="order-2 w-full px-4 lg:order-1 lg:w-1/2 xl:w-5/12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="relative rounded-lg p-4 shadow-2xl sm:p-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
            >
              <motion.form
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl bg-gray-100 dark:bg-gray-700 p-5 transition-colors duration-300"
                id="contactForm"
                onSubmit={handleSubmit}
              >

                {/* Honeypot */}
                <div className="absolute -left-[10000px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Feedback Message */}
                <AnimatePresence mode="wait">
                  {formMessage && (
                    <motion.p
                      key={formMessage}
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.3 }}
                      role="status"
                      aria-live="polite"
                      className="mb-5 text-sm overflow-hidden"
                    >
                      {formMessage}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Name */}
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <UserRound
                        aria-hidden="true"
                        size={18}
                        className={iconClass}
                      />
                    </div>

                    <input
                      type="text"
                      name="name"
                      maxLength={100}
                      placeholder={french ? "Nom" : "Name"}
                      className={inputClass}
                      required
                    />
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail
                        aria-hidden="true"
                        size={18}
                        className={iconClass}
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      maxLength={254}
                      placeholder={french ? "Adresse e-mail" : "Email Address"}
                      className={inputClass}
                      required
                    />
                  </div>
                </motion.div>

                {/* Subject */}
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Tag
                        aria-hidden="true"
                        size={18}
                        className={iconClass}
                      />
                    </div>

                    <input
                      type="text"
                      name="subject"
                      maxLength={150}
                      placeholder={french ? "Objet du message" : "Message Subject"}
                      className={inputClass}
                      required
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <PenLine
                        aria-hidden="true"
                        size={18}
                        className={iconClass}
                      />
                    </div>

                    <textarea
                      rows={6}
                      name="message"
                      maxLength={5000}
                      placeholder={french ? "Votre message" : "Message"}
                      className={inputClass}
                      required
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={!isSending ? { scale: 1.02 } : undefined}
                    whileTap={!isSending ? { scale: 0.97 } : undefined}
                    transition={{ duration: 0.2 }}
                    className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending
                      ? french
                        ? "Envoi…"
                        : "Sending…"
                      : french
                        ? "Envoyer"
                        : "Submit"}
                  </motion.button>
                </motion.div>
              </motion.form>

              {/* Decorative Elements */}
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
                  <span
                    aria-hidden="true"
                    className="contact-dot-pattern block"
                  />
                </span>

                <span className="absolute -bottom-7 -left-7 z-[-1]">
                  <svg
                    width="107"
                    height="134"
                    viewBox="0 0 107 134"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {Array.from({ length: 10 }, (_, row) =>
                      Array.from({ length: 8 }, (_, col) => (
                        <circle
                          key={`${row}-${col}`}
                          cx={104.999 - col * 14.6666}
                          cy={132 - row * 14.6666}
                          r="1.66667"
                          fill="#4338ca"
                        />
                      ))
                    )}
                  </svg>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="order-1 w-full px-4 lg:order-2 lg:w-1/2 xl:w-6/12">
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-12 px-5 pt-3 sm:max-w-[570px] lg:mb-0"
            >
              <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                {french ? "Me contacter" : "Get in Touch"}
              </h2>

              <div className="mb-8">
                <p className="text-base leading-relaxed">
                  {french
                    ? "Une question, une idée de projet ou simplement envie de dire bonjour ? Écrivez-moi, je serai ravie de vous lire. Que vous souhaitiez collaborer, obtenir des informations ou partager un retour, je serai heureuse d’échanger avec vous."
                    : "Have a question, a project idea, or just want to say hello? Feel free to reach out — I’d love to hear from you. Whether you’re looking to collaborate, need more information, or simply want to share feedback, I’m always happy to connect and help."}
                </p>
              </div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="mb-8 flex w-full max-w-[330px] gap-3"
              >
                <div className="mr-6 flex h-10 w-full max-w-10 items-center justify-center overflow-hidden rounded-sm bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-500 dark:text-indigo-400 sm:h-[70px] sm:max-w-[70px]">
                  <Phone aria-hidden="true" size={20} />
                </div>

                <div className="w-full">
                  <h4 className="mb-1 text-base sm:text-xl font-bold">
                    {french ? "Téléphone" : "Phone Number"}
                  </h4>
                  <p className="text-xs sm:text-base">
                    <a href="tel:+2250506037401">
                      +225 05 06 03 74 01
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="mb-8 flex w-full max-w-[330px] gap-3"
              >
                <div className="mr-6 flex h-10 w-full max-w-10 items-center justify-center overflow-hidden rounded-sm bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-500 dark:text-indigo-400 sm:h-[70px] sm:max-w-[70px]">
                  <Mail aria-hidden="true" size={20} />
                </div>

                <div className="w-full">
                  <h4 className="mb-1 text-base sm:text-xl font-bold">
                    {french ? "Adresse e-mail" : "Email Address"}
                  </h4>
                  <p className="text-xs sm:text-base">
                    <a href="mailto:ruth.n-di@epitech.eu">
                      ruth.n-di@epitech.eu
                    </a>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
