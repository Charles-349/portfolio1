import { motion } from "framer-motion";
import profilePic from "../assets/images/WhatsApp Image 2026-02-26 at 16.43.29.jpeg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center md:items-stretch justify-center px-6 py-16 bg-base-100 text-base-content transition-all duration-300">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-64 h-auto md:h-auto overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-12 flex"
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
          My name is <span className="font-semibold">Charles David</span>. I am a detail-oriented professional with a strong foundation in
          <span className="text-primary font-semibold"> Quality Assurance (QA)</span> and
          <span className="text-primary font-semibold"> Quality Engineering (QE)</span>.
          I have hands-on experience designing and executing both manual and automated test strategies to ensure software reliability, performance, and scalability.
        </p>

        <p className="text-lg leading-relaxed">
          I have worked extensively with automated testing tools such as <strong>Jest</strong>, <strong>Cypress</strong>, and <strong>K6</strong>,
          building end-to-end, unit, and performance test suites. My approach focuses on early defect detection, continuous integration, and maintaining high-quality standards throughout the development lifecycle.
        </p>

        <p className="text-lg leading-relaxed">
          Beyond testing, I actively collaborate with development teams to improve code quality, streamline testing pipelines, and enhance overall product stability. I am passionate about integrating QA processes into agile workflows and ensuring seamless user experiences.
        </p>

        <p className="text-lg leading-relaxed">
          In addition, I am a
          <span className="text-primary font-semibold"> Software Developer</span>
          with experience in both frontend and backend development. I specialize in building scalable, efficient, and user-focused applications, combining clean code practices with strong problem-solving skills.
        </p>

        <p className="text-lg leading-relaxed">
          My dual expertise in QA and development allows me to approach projects holistically—writing reliable code while ensuring it meets the highest quality standards from the ground up.
        </p>

        <p className="text-lg leading-relaxed">
          I'm <span className="font-semibold">certified in Cyber Security, Quality Assurance, and Quality Engineering</span>.
          I take pride in being detail-oriented, eager to learn new technologies, and dedicated to solving problems efficiently.
        </p>
        <p className="text-lg leading-relaxed">
          Additionally, I am an experienced
          <span className="text-primary font-semibold"> IT Support Specialist</span> with strong skills in troubleshooting, system administration, and technical support, and a proven track record of delivering exceptional customer service and resolving complex technical issues efficiently.
          I have a solid background in providing technical support, managing IT infrastructure, and ensuring smooth operations for end-users.
          With a commitment to continuous learning and a proactive approach to problem-solving, I am dedicated to delivering high-quality IT solutions that meet the needs of both clients and organizations.
        </p>
        <div className="pt-8 space-x-4">
          <a
            href="/Charles Wamahiu CV (5).pdf"
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
