import { motion } from "framer-motion";
import profilePic from "../assets/images/pic.jpeg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-base-100 text-base-content transition-all duration-300">
     
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-12 border-4 border-primary"
      >
        <img
          src={profilePic}
          alt="Charles David"
          className="w-full h-full object-cover"
        />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center md:text-left space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          About Me
        </h2>

        <p className="text-lg leading-relaxed">
          My name is <span className="font-semibold">Charles David</span>. 
          I'm a passionate and results-driven 
          <span className="text-primary font-semibold"> Software Developer</span> 
          with experience across both frontend and backend development. 
          I specialize in building robust, scalable, and user-friendly applications.
        </p>

        <p className="text-lg leading-relaxed">
          I also bring solid experience in 
          <span className="font-semibold"> Quality Assurance (QA) </span> and 
          <span className="font-semibold"> Quality Engineering (QE)</span>, 
          leveraging automated testing tools like 
          <strong> Jest</strong>, <strong>K6</strong>, <strong>Selenium</strong>, 
          and <strong>Cypress</strong> to ensure high software quality.
        </p>

        <p className="text-lg leading-relaxed">
          I'm <span className="font-semibold">certified in Cyber Security, Quality Assurance, and Quality Engineering</span>. 
          I take pride in being detail-oriented, eager to learn new technologies, and dedicated to solving problems efficiently.
        </p>

        <div className="pt-8 space-x-4">
          <a
            href="/CharlesDavid Wachira2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shadow-md"
          >
            Download CV
          </a>
          <a
            href="/skills"
            className="btn btn-outline hover:btn-primary transition"
          >
            View My Skills
          </a>
          <a
            href="/contact"
            className="btn btn-outline hover:btn-primary transition"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
