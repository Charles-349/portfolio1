import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_v84rf8e",     
          "template_nxrr68g",    
          form.current,
          "-RVGDRM0gdBuSNulu"      
        )
        .then(
          () => {
            setSuccess("Message sent successfully!");
            setLoading(false);
            form.current?.reset();
          },
          () => {
            setSuccess("Failed to send. Please try again.");
            setLoading(false);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400"
        >
          Get In Touch
        </motion.h2>
        <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
          I'd love to hear from you! Whether it's a project, job opportunity, or just a chat,
          feel free to reach out.
        </p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-base-100 p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiUser className="text-xl mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FiMail className="text-xl mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-start border rounded-lg px-3 py-2">
            <FiMessageSquare className="text-xl mt-2 mr-3" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full outline-none bg-transparent resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full shadow-md"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

      
        {success && (
          <p className="mt-4 text-lg font-medium text-primary">{success}</p>
        )}

      
        <p className="mt-10 text-lg">
          Or email me directly at:{" "}
          <a
            href="mailto:wamahiucharles123@gmail.com"
            className="text-primary font-semibold underline"
          >
            wamahiucharles123@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
