import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaJsSquare, FaCss3Alt, FaHtml5,
  FaGitAlt, FaNodeJs, FaDatabase, FaPython
} from "react-icons/fa";
import { BsFire } from "react-icons/bs";

// Skill Data Categorized
const frontendSkills = [
  { name: "React", icon: <FaReact />, level: 90, color: "#61DBFB", desc: "Component-based UI library" },
  { name: "JavaScript", icon: <FaJsSquare />, level: 85, color: "#F0DB4F", desc: "Scripting language for web" },
  { name: "HTML5", icon: <FaHtml5 />, level: 90, color: "#E34F26", desc: "Semantic web markup" },
  { name: "Tailwind CSS", icon: <FaCss3Alt />, level: 80, color: "#38B2AC", desc: "Utility-first CSS framework" },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs />, level: 70, color: "#3C873A", desc: "JavaScript runtime for server" },
  { name: "Git & GitHub", icon: <FaGitAlt />, level: 75, color: "#F05032", desc: "Version control tools" },
  { name: "Databases", icon: <FaDatabase />, level: 65, color: "#6A994E", desc: "SQL / NoSQL knowledge" },
  { name: "Python", icon: <FaPython />, level: 60, color: "#306998", desc: "Versatile programming language" },
];

// Animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

// Skill Group Renderer
const SkillGroup = ({ title, skills }) => (
  <div>
    <motion.h3
      className="text-2xl font-bold text-green-800 mb-8 drop-shadow-xl"
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0],
        textShadow: [
          "0 0 10px rgba(40,200,100,0.7)",
          "0 0 25px rgba(40,200,94,0.9)",
          "0 0 10px rgba(40,200,94,0.7)"
        ]
      }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {title}
    </motion.h3>
    <div className="space-y-10">
      {skills.map(({ name, icon, level, color, desc }, i) => (
        <motion.div
          key={name}
          custom={i}
          variants={skillVariants}
          className="group flex flex-col md:flex-row md:items-center gap-5 hover:scale-[1.02] transition-transform shadow-lg shadow-green-600/100 bg-white bg-opacity-80 rounded-xl p-4"
        >
          {/* Icon + Name */}
          <div className="flex items-center gap-4 md:w-1/3 w-full">
            <motion.div
              className="text-4xl drop-shadow-md"
              style={{ color }}
              animate={{
                rotate: [0, 100, -100, 0],
                scale: [1, 1.1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 4,
                ease: "easeInOut",
              }}
              whileHover={{ rotate: 15, scale: 1.2, transition: { type: "spring", stiffness: 400 } }}
              title={desc}
            >
              {icon}
            </motion.div>
            <span
              className="text-xl font-semibold text-green-900 drop-shadow-md"
              title={desc}
            >
              {name}
            </span>
            {level >= 80 && (
              <BsFire className="text-red-500 animate-pulse text-lg drop-shadow-sm" title="🔥 High proficiency" />
            )}
          </div>


          {/* Progress Bar */}
          <div className="w-full md:w-2/3 flex flex-col gap-1">
            <div className="h-2.5 bg-green-100 rounded-full shadow-inner overflow-hidden">
              <motion.div
                className="h-full rounded-full shadow-md"
                style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.3, ease: "easeOut" }}
              />
            </div>
            <div className="text-sm text-green-800 font-semibold drop-shadow-sm">{level}%</div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b  py-28 px-6 md:px-12 flex flex-col items-center"
    >
      <motion.h2
        className="text-5xl font-extrabold text-green-900 mb-16 tracking-wide drop-shadow-xl"
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
        My <span className="text-green-600">Skills</span>
      </motion.h2>

      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <SkillGroup title="Frontend Skills" skills={frontendSkills} />
        <SkillGroup title="Backend & Others" skills={backendSkills} />
      </motion.div>
    </section>
  );
}