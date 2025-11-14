import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp, FaInstagram, FaFacebookF, FaDownload } from "react-icons/fa";
import me from "../../public/mh.png";

const socialLinks = [
  { icon: <FaWhatsapp />, href: "https://wa.me/01748186766", label: "WhatsApp", color: "#25D366" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/shamim_ahmad_ahnaf/reels/", label: "Instagram", color: "#E1306C" },
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook", color: "#1877F2" },
];

const skillsToType = [
  "Data Entry Specialist",
  "Lead Generation",
  "Web Researcher",
  "Product Listing Expert",
  "PDF/Image to Excel/Word",
  "Data Mining",
  "Data Formatting",
  "Virtual Assistant",
];

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const textVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "easeInOut" } },
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
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden mt-18">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 py-20">
        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariant}
        >
          {/* Name */}
          <motion.h1
            className="text-5xl font-extrabold text-green-900 leading-tight drop-shadow-xl"
            variants={textVariant}
            animate={{
              scale: [1, 1.03, 1],
              rotate: [0, 2, -2, 0],
              x: [0, -3, 3, 0],
              textShadow: [
                "0 0 10px rgba(34,197,94,0.8)",
                "0 0 25px rgba(34,197,94,1)",
                "0 0 10px rgba(34,197,94,0.8)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            Hello, I’m <span className="text-green-600">Shamim Ahmad</span>
          </motion.h1>

          {/* Typing Skills */}
          <motion.p className="text-green-700 text-2xl font-semibold h-10 min-h-[2.5rem]" variants={textVariant}>
            {text}
            <motion.span
              className="text-green-600"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              |
            </motion.span>
          </motion.p>

          {/* Description */}
          <motion.p className="text-gray-700 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed" variants={textVariant}>
            Dedicated data entry specialist delivering fast, accurate, and well-organized data solutions using Excel, Google Sheets, and modern productivity tools.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex justify-center md:justify-start gap-6 mt-6" variants={textVariant}>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg cursor-pointer select-none"
              whileHover={{
                scale: 1.1,
                x: [0, 5, -5, 0],
                boxShadow: "0 0 40px 15px rgba(22, 163, 74, 1), 0 0 60px 30px rgba(22, 163, 74, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Hire Me"
            >
              Hire Me <FaArrowRight />
            </motion.a>

            <motion.a
              href="../../public/SHAMIM.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold cursor-pointer select-none hover:bg-green-600 hover:text-white transition"
              whileHover={{
                scale: 1.1,
                x: [0, -5, 5, 0],
                boxShadow: "0 0 35px 12px rgba(22, 163, 74, 0.9), 0 0 50px 20px rgba(22, 163, 74, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download CV"
            >
              <FaDownload className="inline mr-2 cursor-pointer" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center md:justify-start gap-6 mt-8" variants={containerVariant}>
            {socialLinks.map(({ icon, href, label, color }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl p-3 border-2 rounded-full transition"
                style={{ color: color, borderColor: color }}
                initial={{ opacity: 0, x: -40, rotate: -10 }}
                animate={{
                  opacity: [0, 3, 3],
                  scale: [1, 1.03, 1],
              rotate: [0, 2, -2, 0],
              x: [0, -3, 3, 0],
                  boxShadow: [
                    `0 0 8px 2px ${color}55`,
                    `0 0 15px 6px ${color}77`,
                    `0 0 5px 2px ${color}55`
                  ]
                }}
                transition={{ delay: i * 0.2, duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.25, rotate: [0, 10, -10, 0], x: [0, -3, 3, 0], boxShadow: `0 0 30px 12px ${color}` }}
                aria-label={label}
                title={label}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 max-w-sm mx-auto rounded-full overflow-hidden shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={imageVariant}
          whileHover={{
            scale: 1.05,
            rotate: [0, 2, -2, 0],
            boxShadow: "0 0 50px 20px rgba(22, 163, 74, 0.8), 0 0 70px 30px rgba(22, 163, 74, 0.5)",
          }}
          animate={{
            rotate: [0, 1, -1, 0],
            scale: [1, 1.02, 0.98, 1],
            transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
          }}
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
