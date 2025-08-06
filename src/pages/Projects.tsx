import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Appointment Booking System",
    description: "Full-stack booking platform with authentication, payments, and admin dashboard.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    github: "https://github.com/Charles-349/appointment-system",
    live: "",
  },
  {
    title: "Butchery ERP",
    description: "Inventory and sales management for butcheries, with reporting and expense tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "Redux Toolkit"],
    github: "https://github.com/Charles-349/butchery-erp",
    live: "",
  },
  {
    title: "Hospital Frontend",
    description: "Beautiful responsive frontend with animated hero and appointment form.",
    tech: ["React", "Tailwind", "DaisyUI"],
    github: "https://github.com/Charles-349/HospitalFrontend",
    live: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Real-world projects that show my skills and growth as a developer.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-blue-600 text-xl">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
