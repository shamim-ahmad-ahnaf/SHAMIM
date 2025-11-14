import React from "react";
import { motion } from "framer-motion";
import { FaFileExcel, FaFileWord, FaFilePdf, FaSearch, FaUsers, FaCopy } from "react-icons/fa";

// Data Entry Skills with modern icons
const dataEntrySkills = [
  { name: "Microsoft Excel", icon: <FaFileExcel />, level: 95, color: "#217346" },
  { name: "Microsoft Word", icon: <FaFileWord />, level: 90, color: "#2B579A" },
  { name: "Fast & Accurate Data Entry", icon: <FaCopy />, level: 98, color: "#16A34A" },
  { name: "Data Mining & Collection", icon: <FaSearch />, level: 92, color: "#22C55E" },
  { name: "Lead Generation", icon: <FaUsers />, level: 90, color: "#3C873A" },
  { name: "PDF to Excel / Word", icon: <FaFilePdf />, level: 95, color: "#E34F26" },
  { name: "Email Research & Validation", icon: <FaSearch />, level: 88, color: "#FACC15" },
  { name: "Social Media Research", icon: <FaSearch />, level: 85, color: "#0A66C2" },
  { name: "E-commerce Product Listing", icon: <FaCopy />, level: 90, color: "#F97316" },
  { name: "Copy-Paste & Data Formatting", icon: <FaCopy />, level: 97, color: "#10B981" },
];

// Animations
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const skillVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

// Individual Skill Card
const SkillCard = ({ name, icon, level, color, index }) => (
  <motion.div
    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform cursor-default"
    custom={index}
    variants={skillVariants}
  >
    <div className="text-4xl p-3 rounded-full bg-green-50" style={{ color }}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <span className="text-green-900 font-semibold text-lg">{name}</span>
        <span className="text-green-800 font-semibold">{level}%</span>
      </div>
      <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-28 px-6 md:px-12 flex flex-col items-center"
    >
      <motion.h2
        className="text-5xl font-extrabold text-green-900 mb-16 tracking-wide text-center drop-shadow-lg"
        animate={{
          scale: [1, 1.03, 1],
          rotate: [0, 1, -1, 0],
          textShadow: [
            "0 0 10px rgba(34,197,94,0.7)",
            "0 0 20px rgba(34,197,94,0.9)",
            "0 0 10px rgba(34,197,94,0.7)"
          ]
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        My <span className="text-green-600">Skills</span>
      </motion.h2>

      <motion.div
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {dataEntrySkills.map((skill, i) => (
          <SkillCard key={skill.name} {...skill} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
