import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaFacebookF, FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import me from "../../public/mh.png";

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook", color: "#1877F2" },
  { icon: <FaGithub />, href: "https://github.com", label: "GitHub", color: "#333" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn", color: "#0A66C2" },
];

const skillsToType = [
  "React Developer",
  "JavaScript Enthusiast",
  "Tailwind CSS Expert",
  "Frontend Engineer"
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % skillsToType.length;
      const fullText = skillsToType[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 50 : 100);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-white px-6 relative overflow-hidden mt-18"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 py-20">
        {/* Text Content */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariant}
        >
          <motion.h1
            className="text-5xl font-extrabold text-green-900 leading-tight drop-shadow-xl"
            variants={textVariant}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
              textShadow: [
                "0 0 10px rgba(34,197,94,0.8)",
                "0 0 30px rgba(34,197,94,1)",
                "0 0 10px rgba(34,197,94,0.8)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            Hi, I’m <span className="text-green-600">Shamim Ahmad </span>
          </motion.h1>

          <motion.p
            className="text-green-700 text-2xl font-semibold h-10 min-h-[2.5rem]"
            variants={textVariant}
          >
            {text}
            <motion.span
              className="text-green-600"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              |
            </motion.span>
          </motion.p>


          <motion.p
            className="text-gray-700 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed"
            variants={textVariant}
          >
            Passionate frontend developer crafting sleek, accessible, and performant web
            applications using React, Tailwind CSS, and modern tools.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-6"
            variants={textVariant}
          >
            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg cursor-pointer select-none"
              style={{
                boxShadow: [
                  "0 0 12px 6px rgba(132, 204, 22, 0.4)",
                  "0 0 24px 12px rgba(132, 204, 22, 0.5)",
                  "0 0 12px 6px rgba(132, 204, 22, 0.4)",
                ],
              }}
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 0 40px 15px rgba(22, 163, 74, 1), 0 0 60px 30px rgba(22, 163, 74, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Hire Me"
            >
              Hire Me <FaArrowRight />
            </motion.a>

            {/* Download CV Button */}
            <motion.a
              href="../../public/SHAMIM.pdf" // Adjust the path to your CV file
              download
              className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold cursor-pointer select-none hover:bg-green-600 hover:text-white transition"
              style={{
                boxShadow: [
                  "0 0 12px 6px rgba(132, 204, 22, 0.4)",
                  "0 0 24px 12px rgba(132, 204, 22, 0.5)",
                  "0 0 12px 6px rgba(132, 204, 22, 0.4)",
                ],
              }}
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 0 35px 12px rgba(22, 163, 74, 0.9), 0 0 50px 20px rgba(22, 163, 74, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download CV"
            >
              <FaDownload className="inline mr-2" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-8"
            variants={containerVariant}
          >
            {socialLinks.map(({ icon, href, label }, i) => {
              const colorMap = {
                Facebook: "#1877F2",
                GitHub: "#333333",
                LinkedIn: "#0A66C2",
              };

              const color = colorMap[label] || "#22c55e";

              return (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl p-3 border-2 rounded-full transition"
                  style={{
                    color: color,
                    borderColor: color,
                  }}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    boxShadow: [
                      `0 0 8px 4px ${color}66`,
                      `0 0 16px 8px ${color}99`,
                      `0 0 8px 4px ${color}66`,
                    ],
                  }}
                  transition={{
                    delay: i * 0.2,
                    duration: 1,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  whileHover={{
                    scale: 1.25,
                    rotate: 12,
                    boxShadow: `0 0 30px 12px ${color}`,
                  }}
                  aria-label={label}
                  title={label}
                >
                  {icon}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="flex-1 max-w-sm mx-auto rounded-full overflow-hidden shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={imageVariant}
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 50px 20px rgba(22, 163, 74, 0.8), 0 0 70px 30px rgba(22, 163, 74, 0.5)",
          }}
          tabIndex={0}
          aria-label="Profile image of Shamim Ahmad Ahanaf"
          animate={{
            boxShadow: [
              "0 0 20px 10px rgba(132, 204, 22, 0.7)",
              "0 0 30px 15px rgba(132, 204, 22, 0.9)",
              "0 0 20px 10px rgba(132, 204, 22, 0.7)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img
            src={me}
            alt="Shamim Ahmad Ahanaf"
            className="w-full rounded-full select-none"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
