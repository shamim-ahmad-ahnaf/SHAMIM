import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaUserGraduate, FaLaptopCode, FaGlobeAmericas } from "react-icons/fa";
import me from "../../public/mh.png"; // Change if needed

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageItem = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white py-28 px-6 md:px-12 flex items-center"
    >
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl p-6 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Image */}
        <motion.div
          variants={imageItem}
          className="relative flex justify-center md:justify-end rounded-3xl overflow-hidden cursor-pointer
            bg-gradient-to-tr from-green-200 to-green-400 shadow-lg shadow-green-300 max-w-xs w-full mx-auto order-1 md:order-2"
          whileHover={{
            scale: 1.15,
            rotate: 6,
            boxShadow:
              "0 35px 60px rgba(22, 163, 74, 0.8), 0 0 25px 15px rgba(132, 204, 22, 0.7), 0 0 50px 30px rgba(132, 204, 22, 0.5)",
          }}
          animate={{
            boxShadow: [
              "0 0 15px 10px rgba(132, 204, 22, 0.7), 0 0 25px 15px rgba(132, 204, 22, 0.5)",
              "0 0 25px 15px rgba(132, 204, 22, 0.9), 0 0 50px 30px rgba(132, 204, 22, 0.7)",
              "0 0 15px 10px rgba(132, 204, 22, 0.7), 0 0 25px 15px rgba(132, 204, 22, 0.5)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          tabIndex={0}
          aria-label="Profile image of Shamim Ahmad Ahanaf"
        >
          <img
            src={me}
            alt="Shamim Ahmad Ahanaf"
            className="rounded-full w-full h-100 object-cover select-none"
            draggable={false}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div variants={textItem} className="space-y-8 order-2 md:order-1">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-green-900 tracking-tight leading-tight drop-shadow-xl"
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
            About Me
          </motion.h2>

          <p className="text-green-800 text-lg md:text-xl max-w-xl leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-green-900 underline decoration-green-500 decoration-4">
              Shamim Ahmad Ahanaf
            </span>
            , a passionate frontend developer focused on crafting smooth,
            performant, and accessible web applications with React, Tailwind CSS,
            and Framer Motion.
          </p>

          <div className="space-y-6">
            {[{
              icon: <FaUserGraduate className="text-green-600 text-4xl drop-shadow-md animate-bounce" />,
              title: "Education",
              desc: "Diploma in English and Computer Technology, specialized in web development."
            }, {
              icon: <FaLaptopCode className="text-green-600 text-4xl drop-shadow-md animate-bounce" />,
              title: "Skills",
              desc: "React, JavaScript (ES6+), Tailwind CSS, Framer Motion, Git & GitHub."
            }, {
              icon: <FaGlobeAmericas className="text-green-600 text-4xl drop-shadow-md animate-bounce" />,
              title: "Goal",
              desc: "To build performant web experiences and keep learning cutting-edge technologies."
            }].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={textItem}
                whileHover={{
                  scale: 1.06,
                  backgroundColor: "rgba(22, 163, 74, 0.15)",
                  boxShadow: "0 12px 35px rgba(22, 163, 74, 0.3)",
                }}
                className="flex items-start gap-6 rounded-xl p-6 cursor-default border border-green-300 shadow-5xl shadow-green-600/100 bg-green-50 transition"
              >
                <div className="flex-shrink-0 mt-1">{icon}</div>
                <div>
                  <h3 className="text-green-900 font-bold text-2xl">{title}</h3>
                  <p className="text-green-700 mt-1 text-lg leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/cv/shamim-ahanaf-cv.pdf"
            download
            whileHover={{
              scale: 1.12,
              boxShadow: "0 0 25px 10px rgba(22, 163, 74, 0.8)",
            }}
            animate={{
              boxShadow: [
                "0 0 12px 10px rgba(132, 204, 22, 0.7), 0 0 25px 15px rgba(132, 204, 22, 0.5)",
                "0 0 20px 15px rgba(132, 204, 22, 0.9), 0 0 50px 30px rgba(132, 204, 22, 0.7)",
                "0 0 12px 10px rgba(132, 204, 22, 0.7), 0 0 25px 15px rgba(132, 204, 22, 0.5)",
              ],
            }}
            className="inline-block mt-10 px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-xl transition"
            aria-label="Download CV"
          >
            <FaDownload className="inline mr-3 text-xl" />
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
