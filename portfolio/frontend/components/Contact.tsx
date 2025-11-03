import { motion } from "framer-motion";

export default function Contact() {
    return(
        <>
            <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>

<section
   id="contact" 
  className="relative z-10 overflow-hidden py-12 sm:py-16 lg:py-24 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300"
>
  <div className="container mx-auto">
    <div className="mx-4 flex flex-wrap justify-center lg:justify-between">
      {/* <!-- Contact Form --> */}
      <div className="order-2 w-full px-4 lg:order-1 lg:w-1/2 xl:w-5/12">
        <div
          className="relative rounded-lg p-4 shadow-2xl sm:p-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <form
            className="rounded-xl bg-gray-100 dark:bg-gray-700 p-5 transition-colors duration-300"
            id="contactForm"
          >
            {/* <!-- Name --> */}
            <div className="mb-6">
              <div className="relative">
                <div
                  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <i className="fas fa-user text-gray-500 dark:text-gray-400"></i>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
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
                  <i className="fas fa-envelope text-gray-500 dark:text-gray-400"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
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
                  <i className="fas fa-tag text-gray-500 dark:text-gray-400"></i>
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Message Subject"
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
                  <i className="fas fa-pen-to-square text-gray-500 dark:text-gray-400"></i>
                </div>
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Message"
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
            </div>

            {/* <!-- Submit --> */}
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors font-semibold"
              >
                Submit
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
             <svg width="107" height="134" viewBox="0 0 107 134" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#4338ca"></circle><circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#4338ca"></circle><circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#4338ca"></circle><circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#4338ca"></circle><circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#4338ca"></circle><circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#4338ca"></circle><circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#4338ca"></circle><circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#4338ca"></circle><circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#4338ca"></circle><circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#4338ca"></circle><circle cx="90.3333" cy="132" r="1.66667" transform="rotate(180 90.3333 132)" fill="#4338ca"></circle><circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)" fill="#4338ca"></circle><circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)" fill="#4338ca"></circle><circle cx="90.3333" cy="88" r="1.66667" transform="rotate(180 90.3333 88)" fill="#4338ca"></circle><circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)" fill="#4338ca"></circle><circle cx="90.3333" cy="45" r="1.66667" transform="rotate(180 90.3333 45)" fill="#4338ca"></circle><circle cx="90.3333" cy="16" r="1.66667" transform="rotate(180 90.3333 16)" fill="#4338ca"></circle><circle cx="90.3333" cy="59" r="1.66667" transform="rotate(180 90.3333 59)" fill="#4338ca"></circle><circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)" fill="#4338ca"></circle><circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)" fill="#4338ca"></circle><circle cx="75.6654" cy="132" r="1.66667" transform="rotate(180 75.6654 132)" fill="#4338ca"></circle><circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#4338ca"></circle><circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)" fill="#4338ca"></circle><circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#4338ca"></circle><circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)" fill="#4338ca"></circle><circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#4338ca"></circle><circle cx="75.6654" cy="88" r="1.66667" transform="rotate(180 75.6654 88)" fill="#4338ca"></circle><circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#4338ca"></circle><circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)" fill="#4338ca"></circle><circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#4338ca"></circle><circle cx="75.6654" cy="45" r="1.66667" transform="rotate(180 75.6654 45)" fill="#4338ca"></circle><circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#4338ca"></circle><circle cx="75.6654" cy="16" r="1.66667" transform="rotate(180 75.6654 16)" fill="#4338ca"></circle><circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#4338ca"></circle><circle cx="75.6654" cy="59" r="1.66667" transform="rotate(180 75.6654 59)" fill="#4338ca"></circle><circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#4338ca"></circle><circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)" fill="#4338ca"></circle><circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#4338ca"></circle><circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)" fill="#4338ca"></circle><circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#4338ca"></circle><circle cx="60.9993" cy="132" r="1.66667" transform="rotate(180 60.9993 132)" fill="#4338ca"></circle><circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#4338ca"></circle><circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)" fill="#4338ca"></circle><circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#4338ca"></circle><circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)" fill="#4338ca"></circle><circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#4338ca"></circle><circle cx="60.9993" cy="88" r="1.66667" transform="rotate(180 60.9993 88)" fill="#4338ca"></circle><circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#4338ca"></circle><circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)" fill="#4338ca"></circle><circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#4338ca"></circle><circle cx="60.9993" cy="45" r="1.66667" transform="rotate(180 60.9993 45)" fill="#4338ca"></circle><circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#4338ca"></circle><circle cx="60.9993" cy="16" r="1.66667" transform="rotate(180 60.9993 16)" fill="#4338ca"></circle><circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#4338ca"></circle><circle cx="60.9993" cy="59" r="1.66667" transform="rotate(180 60.9993 59)" fill="#4338ca"></circle><circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#4338ca"></circle><circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)" fill="#4338ca"></circle><circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#4338ca"></circle><circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)" fill="#4338ca"></circle><circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#4338ca"></circle><circle cx="46.3333" cy="132" r="1.66667" transform="rotate(180 46.3333 132)" fill="#4338ca"></circle><circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#4338ca"></circle><circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)" fill="#4338ca"></circle><circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#4338ca"></circle><circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)" fill="#4338ca"></circle><circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#4338ca"></circle><circle cx="46.3333" cy="88" r="1.66667" transform="rotate(180 46.3333 88)" fill="#4338ca"></circle><circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#4338ca"></circle><circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)" fill="#4338ca"></circle><circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#4338ca"></circle><circle cx="46.3333" cy="45" r="1.66667" transform="rotate(180 46.3333 45)" fill="#4338ca"></circle><circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#4338ca"></circle><circle cx="46.3333" cy="16" r="1.66667" transform="rotate(180 46.3333 16)" fill="#4338ca"></circle><circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#4338ca"></circle><circle cx="46.3333" cy="59" r="1.66667" transform="rotate(180 46.3333 59)" fill="#4338ca"></circle><circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#4338ca"></circle><circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)" fill="#4338ca"></circle><circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#4338ca"></circle><circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)" fill="#4338ca"></circle><circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#4338ca"></circle></svg>
            </span>
            <span className="absolute -bottom-7 -left-7 z-[-1]">
             <svg width="107" height="134" viewBox="0 0 107 134" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#4338ca"></circle><circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#4338ca"></circle><circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#4338ca"></circle><circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#4338ca"></circle><circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#4338ca"></circle><circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#4338ca"></circle><circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#4338ca"></circle><circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#4338ca"></circle><circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#4338ca"></circle><circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#4338ca"></circle><circle cx="90.3333" cy="132" r="1.66667" transform="rotate(180 90.3333 132)" fill="#4338ca"></circle><circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)" fill="#4338ca"></circle><circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)" fill="#4338ca"></circle><circle cx="90.3333" cy="88" r="1.66667" transform="rotate(180 90.3333 88)" fill="#4338ca"></circle><circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)" fill="#4338ca"></circle><circle cx="90.3333" cy="45" r="1.66667" transform="rotate(180 90.3333 45)" fill="#4338ca"></circle><circle cx="90.3333" cy="16" r="1.66667" transform="rotate(180 90.3333 16)" fill="#4338ca"></circle><circle cx="90.3333" cy="59" r="1.66667" transform="rotate(180 90.3333 59)" fill="#4338ca"></circle><circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)" fill="#4338ca"></circle><circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)" fill="#4338ca"></circle><circle cx="75.6654" cy="132" r="1.66667" transform="rotate(180 75.6654 132)" fill="#4338ca"></circle><circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#4338ca"></circle><circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)" fill="#4338ca"></circle><circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#4338ca"></circle><circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)" fill="#4338ca"></circle><circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#4338ca"></circle><circle cx="75.6654" cy="88" r="1.66667" transform="rotate(180 75.6654 88)" fill="#4338ca"></circle><circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#4338ca"></circle><circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)" fill="#4338ca"></circle><circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#4338ca"></circle><circle cx="75.6654" cy="45" r="1.66667" transform="rotate(180 75.6654 45)" fill="#4338ca"></circle><circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#4338ca"></circle><circle cx="75.6654" cy="16" r="1.66667" transform="rotate(180 75.6654 16)" fill="#4338ca"></circle><circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#4338ca"></circle><circle cx="75.6654" cy="59" r="1.66667" transform="rotate(180 75.6654 59)" fill="#4338ca"></circle><circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#4338ca"></circle><circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)" fill="#4338ca"></circle><circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#4338ca"></circle><circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)" fill="#4338ca"></circle><circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#4338ca"></circle><circle cx="60.9993" cy="132" r="1.66667" transform="rotate(180 60.9993 132)" fill="#4338ca"></circle><circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#4338ca"></circle><circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)" fill="#4338ca"></circle><circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#4338ca"></circle><circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)" fill="#4338ca"></circle><circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#4338ca"></circle><circle cx="60.9993" cy="88" r="1.66667" transform="rotate(180 60.9993 88)" fill="#4338ca"></circle><circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#4338ca"></circle><circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)" fill="#4338ca"></circle><circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#4338ca"></circle><circle cx="60.9993" cy="45" r="1.66667" transform="rotate(180 60.9993 45)" fill="#4338ca"></circle><circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#4338ca"></circle><circle cx="60.9993" cy="16" r="1.66667" transform="rotate(180 60.9993 16)" fill="#4338ca"></circle><circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#4338ca"></circle><circle cx="60.9993" cy="59" r="1.66667" transform="rotate(180 60.9993 59)" fill="#4338ca"></circle><circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#4338ca"></circle><circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)" fill="#4338ca"></circle><circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#4338ca"></circle><circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)" fill="#4338ca"></circle><circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#4338ca"></circle><circle cx="46.3333" cy="132" r="1.66667" transform="rotate(180 46.3333 132)" fill="#4338ca"></circle><circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#4338ca"></circle><circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)" fill="#4338ca"></circle><circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#4338ca"></circle><circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)" fill="#4338ca"></circle><circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#4338ca"></circle><circle cx="46.3333" cy="88" r="1.66667" transform="rotate(180 46.3333 88)" fill="#4338ca"></circle><circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#4338ca"></circle><circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)" fill="#4338ca"></circle><circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#4338ca"></circle><circle cx="46.3333" cy="45" r="1.66667" transform="rotate(180 46.3333 45)" fill="#4338ca"></circle><circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#4338ca"></circle><circle cx="46.3333" cy="16" r="1.66667" transform="rotate(180 46.3333 16)" fill="#4338ca"></circle><circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#4338ca"></circle><circle cx="46.3333" cy="59" r="1.66667" transform="rotate(180 46.3333 59)" fill="#4338ca"></circle><circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#4338ca"></circle><circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)" fill="#4338ca"></circle><circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#4338ca"></circle><circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)" fill="#4338ca"></circle><circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#4338ca"></circle></svg>
            </span>
          </div>
        </div>
      </div>

      {/* <!-- Contact Information --> */}
      <div className="order-1 w-full px-4 lg:order-2 lg:w-1/2 xl:w-6/12">
        <div className="mb-12 px-5 pt-3 sm:max-w-[570px] lg:mb-0">
          <span className="mb-4 block text-base font-semibold text-indigo-500">
            Contact
        </span>
        <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
            Get in Touch
        </h2>
        <p className="text-base leading-relaxed">
            Have a question, a project idea, or just want to say hello? Feel free to reach out —
            I’d love to hear from you.
        </p>
        <p className="mb-9 text-base leading-relaxed">
            Whether you’re looking to collaborate, need more information, or simply want to share feedback,
            I’m always happy to connect and help.
        </p>

          {/* <!-- Phone --> */}
          <div className="mb-8 flex w-full max-w-[330px] gap-3">
            <div
              className="mr-6 flex h-10 w-full max-w-10 items-center justify-center overflow-hidden rounded-sm bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-500 dark:text-indigo-400 sm:h-[70px] sm:max-w-[70px]"
            >
              <i className="fas fa-phone text-xl"></i>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-base sm:text-xl font-bold">Phone Number</h4>
              <p className="text-xs sm:text-base">+225 05 06 03 74 01</p>
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
              <h4 className="mb-1 text-base sm:text-xl font-bold">Email Address</h4>
              <p className="text-xs sm:text-base">ruth.n-di@epitech.eu</p>
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