// import { motion } from "framer-motion";
// import profilePic from '../assets/images/WhatsApp Image 2025-06-20 at 15.53.04.jpeg'

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//       {/* Image Section */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-12"
//       >
//         <img
//           src={profilePic}
//           alt="About Me"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Text Section */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-xl text-center md:text-left space-y-4"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
//           About Me
//         </h2>
//         <p className="text-lg">
//           I'm Charles, a passionate full-stack developer with a love for clean,
//           functional design and seamless user experiences. I specialize in React,
//           Node.js, TypeScript, and modern tools like Tailwind CSS and Framer Motion.
//         </p>
//         <p>
//           Whether it's building interactive UI, scalable APIs, or full-blown
//           applications, I enjoy turning ideas into reality through code.
//         </p>

//         {/* Skills */}
//         <div className="pt-4">
//           <h3 className="text-xl font-semibold mb-2">Skills</h3>
//           <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
//             {[
//               "React",
//               "Next.js",
//               "TypeScript",
//               "Tailwind CSS",
//               "Node.js",
//               "Express",
//               "MongoDB",
//               "PostgreSQL",
//               "Framer Motion",
//               "DaisyUI",
//             ].map((skill, idx) => (
//               <li
//                 key={idx}
//                 className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white rounded-full text-sm"
//               >
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Buttons */}
//         <div className="pt-6 space-x-4">
//           <a
//             href="/cv.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn btn-primary"
//           >
//             Download CV
//           </a>
//           <a href="/contact" className="btn btn-outline">
//             Hire Me
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;

import { motion } from "framer-motion";
import profilePic from '../assets/images/WhatsApp Image 2025-06-20 at 15.53.04.jpeg';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-base-100 text-base-content transition-all duration-300">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-12"
      >
        <img
          src={profilePic}
          alt="About Me"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-center md:text-left space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          About Me
        </h2>
        <p className="text-lg">
          I'm Charles, a passionate full-stack developer with a love for clean,
          functional design and seamless user experiences. I specialize in React,
          Node.js, TypeScript, and modern tools like Tailwind CSS and Framer Motion.
        </p>
        <p>
          Whether it's building interactive UI, scalable APIs, or full-blown
          applications, I enjoy turning ideas into reality through code.
        </p>

        {/* Skills */}
        <div className="pt-4">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Framer Motion",
              "DaisyUI",
            ].map((skill, idx) => (
              <li
                key={idx}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="pt-6 space-x-4">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download CV
          </a>
          <a href="/contact" className="btn btn-outline">
            Hire Me
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

