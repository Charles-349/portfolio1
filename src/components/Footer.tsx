
import { FaGithub, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/Charles-349" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/charles-wamahiu-1a6b06389/" },
  { icon: <FaTwitter />, href: "https://x.com/Ch84036/" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 border-t border-gray-700">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white">Charles David</h2>
          <p className="mt-4 text-sm leading-6">
            Building interactive, scalable, and modern web applications.  
            Passionate about full-stack development and delivering real value through technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-gray-400" />  
              <a href="mailto:wamahiucharles123@gmail.com" className="hover:text-amber-200 transition text-green-400">
                wamahiucharles123@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-gray-400" />  
              <a href="tel:+254 701656349" className="hover:text-amber-200 transition text-green-400">
                +254 701656349
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-400" />  
              <span>Nyeri, Kenya</span>
            </li>
          </ul>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white">Connect</h3>
          <div className="flex gap-5 mt-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-white transition"
                whileHover={{ scale: 1.2, rotate: 6 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

    
      <motion.div
        className="text-center mt-10 pt-6 border-t border-gray-700 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p>© {new Date().getFullYear()} Charles David. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;

