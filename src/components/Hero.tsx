
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileIMG from "../assets/images/pic1.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100 text-base-content transition-all duration-500">
      
    
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-primary drop-shadow-lg">Charles</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-primary">
            <Typewriter
              words={[
                "Full Stack Developer ",
                "Frontend Enthusiast ",
                "CyberSecurity Enthusiast",
                "QA/QE Specialist ",
                "MERN Stack Developer ",  
                "Backend Engineer ",
                "Problem Solver ",
                "Dream Builder ",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-lg sm:text-xl mb-8 max-w-xl text-base-content/80 leading-relaxed">
            Crafting <span className="text-primary font-semibold">beautiful, scalable, and high-performing</span> 
            applications with a balance of elegant design and powerful functionality.  
          </p>

         
          <div className="flex gap-5 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-content rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
               View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-base-content/40 rounded-xl shadow-md hover:bg-base-200 hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

       
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative">
           
            <motion.div
              className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-40 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <img
              src={profileIMG}
              alt="Charles"
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


