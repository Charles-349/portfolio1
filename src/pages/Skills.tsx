
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiDrizzle,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFlask,
  SiRender,
  SiVercel,
  
} from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <SiReact className="text-primary" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-base-content" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-secondary" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-primary" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-accent" /> },
      { name: "Redux", icon: <SiRedux className="text-primary" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-secondary" /> },
      { name: "CSS3", icon: <SiCss3 className="text-accent" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-primary" /> },
      { name: "Express.js", icon: <SiExpress className="text-base-content" /> },
      { name: "Flask", icon: <SiFlask className="text-secondary" /> },
      { name: "PHP", icon: <SiPhp className="text-primary" /> },
    ],
  },
  {
    category: "Databases & ORM",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-primary" /> },
      { name: "MySQL", icon: <SiMysql className="text-secondary" /> },
      { name: "Drizzle ORM", icon: <SiDrizzle className="text-accent" /> },
    ],
  },
  {
    category: "Deployment & Tools",
    items: [
      { name: "Git & GitHub", icon: <SiGit className="text-secondary" /> },
      { name: "Render", icon: <SiRender className="text-accent" /> },
      { name: "Vercel", icon: <SiVercel className="text-base-content" /> },
      
    
    ],
  },
];
const Skills = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-base-100 text-base-content transition-all duration-300">
      <div className="max-w-7xl mx-auto text-center">
      
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <span className="text-primary">
            <Typewriter
              words={["My Tech Stack", "Tools I Master", "Technologies I Love"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h2>

        <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
          I specialize in building modern, scalable, and interactive web
          applications. Here’s a showcase of the technologies I use to bring
          ideas to life:
        </p>

      
        <div className="space-y-12">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-6 bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="text-5xl mb-4">{skill.icon}</div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
