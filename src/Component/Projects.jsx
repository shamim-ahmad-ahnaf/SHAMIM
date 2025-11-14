import React, { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Excel Data Entry",
    category: "Excel",
    description: "Entered and organized large datasets efficiently in Microsoft Excel.",
    image: "https://source.unsplash.com/600x400/?excel,data",
    tech: ["Excel", "Google Sheets"],
    live: "https://drive.google.com/your-excel-demo-link",
  },
  {
    id: 2,
    title: "PDF to Word Conversion",
    category: "PDF",
    description: "Converted PDF documents to editable Word format accurately.",
    image: "https://source.unsplash.com/600x400/?pdf,document",
    tech: ["PDF", "Word"],
    live: "https://drive.google.com/your-pdf-demo-link",
  },
  {
    id: 3,
    title: "Email Research",
    category: "Research",
    description: "Researched and validated business emails for campaigns.",
    image: "https://source.unsplash.com/600x400/?email,research",
    tech: ["Email", "Data Research"],
    live: "https://drive.google.com/your-email-demo-link",
  },
];

const categories = ["All", "Excel", "PDF", "Research"];

const cardVariants = (direction) => ({
  hidden: { opacity: 0, x: direction, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
});

export default function DataEntryProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 px-6 md:px-12 bg-green-50 min-h-screen">
      {/* Animated Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-center text-green-900 mb-14 select-none"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
          textShadow: [
            "0 0 10px rgba(34,197,94,0.8)",
            "0 0 30px rgba(34,197,94,1)",
            "0 0 10px rgba(34,197,94,0.8)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        My Data Entry Projects
      </motion.h2>

      {/* Categories */}
      <div className="flex justify-center gap-5 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              selectedCategory === cat
                ? "bg-green-600 text-white shadow-lg"
                : "bg-white text-green-700 hover:bg-green-600 hover:text-white border-2 border-green-400 shadow-lg"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <motion.div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => {
          const direction = idx % 2 === 0 ? -100 : 100;
          return (
            <motion.div
              key={project.id}
              className="rounded-2xl shadow-lg relative cursor-pointer overflow-hidden hover:shadow-2xl transition-shadow border border-green-400 hover:border-green-700"
              variants={cardVariants(direction)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-green-900">{project.title}</h3>
                <p className="text-green-800 text-base">{project.description}</p>

                <div className="flex flex-wrap gap-3 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition"
                  >
                    View Work
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
