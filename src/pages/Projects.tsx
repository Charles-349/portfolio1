
import { motion } from "framer-motion";
import hospitalIMG from '../assets/images/Screenshot from 2025-08-06 19-51-36.png';
import carIMG from '../assets/images/Screenshot from 2025-08-06 20-20-55.png';
import attachmentIMG from '../assets/images/Screenshot from 2025-08-06 20-36-49.png';
import eccomerceIMG from '../assets/images/Screenshot from 2026-01-29 08-30-53.png';
import hrmsIMG from '../assets/images/Screenshot from 2026-01-29 08-28-52.png';

const projects = [
    {
    title: "Eccommerce Platform",
    description:
      "A full-stack multi-vendor eccomerce platform with user authentication, product management, shopping cart, and order processing features.",
    image: eccomerceIMG,
    tech: ["Next.js", "Express.js", "TypeScript", "Tailwind CSS","DrizzleORM","PostgreSQL"],
    demoLink: "https://soko-timam.vercel.app/",
    githubLink: "https://github.com/Charles-349/Soko-Timam",
  },

   {
    title: "HR LMS Platform",
    description:
      "A full-stack SaaS HR Leave Management System with RBAC, user authentication, leave requests, approvals, and admin dashboard features.",
    image: hrmsIMG,
    tech: ["Next.js", "Express.js", "TypeScript", "Tailwind CSS","DrizzleORM", "PostgreSQL"],
    demoLink: "https://hrms-v2-teal.vercel.app/",
    githubLink: "https://github.com/Charles-349/mag_bcdhr",
  }, 
  
  {
    title: "Medical Appointment System",
    description:
      "A full-stack app for booking appointments, managing doctors, and handling payments. Includes admin, doctor and patient dashboards.",
    image: hospitalIMG,
    tech: ["React", "Express.js", "TypeScript", "Tailwind CSS","DrizzleORM","Redux", "PostgreSQL"],
    demoLink: "https://hospital-management-system-pz93.vercel.app/",
    githubLink: "https://github.com/Charles-349/hospital-management-system",
  },

 {
  title: "Student Attachment System",
  description:
    "A web-based system developed using PHP and HTML to streamline the student industrial attachment process. It allows students to apply for attachments, supervisors to track progress, and administrators to manage company placements and evaluations efficiently.",
  image: attachmentIMG,
  tech: ["PHP", "HTML", "MySQL", "CSS"],
//   demoLink: "https://attachment-system.onrender.com",
  githubLink: "https://github.com/Charles-349/Attachment_system",
},

 {
  title: "Car Rental Management System",
  description:
    "A full-stack web application for managing car rentals with features for vehicle listings, customer bookings, payment handling, and admin oversight. Includes separate dashboards for admins and customers, built with TypeScript, Drizzle ORM, and Redux for robust state management.",
  image: carIMG,
  tech: ["React", "Express.js", "TypeScript", "Tailwind CSS", "DrizzleORM", "Redux", "PostgreSQL"],
  demoLink: "https://car-frontend-umber.vercel.app/",
  githubLink: "https://github.com/Charles-349/car-frontend",
},

];

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-base-200 text-base-content rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-base-300 text-base-content px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-3 flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
