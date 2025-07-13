import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.1, color: "#4ade80", transition: { duration: 0.3 } }, // light green on hover
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  hover: { scale: 1.2, color: "#22c55e", transition: { duration: 0.3 } },
};

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white pt-20 pb-10 px-6 md:px-16 mt-32 relative overflow-hidden z-10">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* About Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.h3
            className="text-3xl font-extrabold mb-4"
            whileHover={{ scale: 1.05, color: "#22c55e" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Shamim Ahmad Ahanaf
          </motion.h3>
          <motion.p className="leading-relaxed text-white/90">
            Web Developer passionate about clean UI, fast performance, and smooth
            user experience. Let's work together and create something awesome!
          </motion.p>
          <motion.div
            className="mt-6 space-y-2 text-sm text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {/* You can add extra details here if needed */}
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <motion.h4
            className="text-2xl font-semibold mb-4"
            whileHover={{ scale: 1.05, color: "#22c55e" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Quick Links
          </motion.h4>
          <ul className="space-y-3">
            {["Home", "About", "Projects", "Blog", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: "#22c55e", paddingLeft: "8px" }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block transition-all duration-300 text-white hover:text-green-400"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social & CTA */}
        <motion.div variants={itemVariants}>
          <motion.h4
            className="text-2xl font-semibold mb-4"
            whileHover={{ scale: 1.05, color: "#22c55e" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Follow Me
          </motion.h4>
          <motion.div className="flex gap-5 mb-6 text-xl">
            {[
              { Icon: FaFacebookF, href: "#" },
              { Icon: FaLinkedinIn, href: "#" },
              { Icon: FaGithub, href: "#" },
            ].map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                className="bg-green-700 hover:bg-green-600 p-3 rounded-full shadow-md text-white"
                variants={socialVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.2 + 1, duration: 0.5 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            className="text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            Want to work together? <br />
            <a
              href="mailto:shamim@example.com"
              className="underline hover:text-green-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drop me a message!
            </a>
          </motion.p>
          <motion.div
            className="flex items-center gap-2 mt-4"
            whileHover={{ scale: 1.05, color: "#22c55e" }}
          >
            <FaMapMarkerAlt />
            <span>Kapasia, Gazipur, Bangladesh</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 mt-2"
            whileHover={{ scale: 1.05, color: "#22c55e" }}
          >
            <FaEnvelope />
            <a
              href="mailto:shamimahmadahnaf@gmail.com"
              className="hover:underline text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              shamimahmadahnaf@gmail.com
            </a>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 mt-2"
            whileHover={{ scale: 1.05, color: "#22c55e" }}
          >
            <FaPhoneAlt />
            <a href="tel:+8801748186766" className="hover:underline text-white">
              +880 1748186766
            </a>    
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-16 border-t border-green-800 pt-6 text-center text-white/70 text-sm relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      >
        © {new Date().getFullYear()} Shamim Ahmad Ahanaf — All rights reserved.
      </motion.div>

      {/* Background Blur Element */}
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-green-700 opacity-30 rounded-full blur-3xl z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </footer>
  );
}
