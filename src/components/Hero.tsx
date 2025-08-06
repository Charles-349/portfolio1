import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profileIMG from '../assets/images/WhatsApp Image 2025-06-20 at 15.53.04.jpeg'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Charles</span> 
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-xl">
            A passionate Full Stack Developer crafting modern, responsive, and accessible web apps.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-gray-700 dark:border-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={profileIMG}
            alt="David"
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-600 dark:border-blue-400 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
