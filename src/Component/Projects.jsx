import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        category: "Web",
        description: "A responsive portfolio built with React & Tailwind CSS.",
        image: "https://images.pexels.com/photos/32820410/pexels-photo-32820410.jpeg",
        tech: ["React", "Tailwind CSS"],
        live: "#",
        github: "#",
    },
    {
        id: 2,
        title: "Task Manager App",
        category: "Mobile",
        description: "Manage daily tasks easily with this task app.",
        image: "https://source.unsplash.com/600x400/?task",
        tech: ["React Native", "Expo"],
        live: "#",
        github: "#",
    },
    {
        id: 3,
        title: "Islamic Library",
        category: "Web",
        description: "A digital library for Islamic books.",
        image: "https://source.unsplash.com/600x400/?library",
        tech: ["React", "Firebase"],
        live: "#",
        github: "#",
    },
    {
        id: 4,
        title: "Design System",
        category: "Design",
        description: "UI/UX design system for consistent look and feel.",
        image: "https://source.unsplash.com/600x400/?design",
        tech: ["Figma", "Adobe XD"],
        live: "#",
        github: "#",
    },
];
const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction, scale: 0.9 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
});

const categories = ["All", "Web", "Mobile", "Design"];

export default function StylishProjectSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projectsData
            : projectsData.filter((p) => p.category === selectedCategory);

    return (
        <section id="projects" className="py-16 px-6 md:px-12 bg-white min-h-screen">
            {/* Animated Heading */}
            <motion.h2
                className="text-5xl font-extrabold text-center text-green-900 mb-14 select-none"
                animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                    textShadow: [
                        "0 0 10px rgba(34,197,94,0.8)",
                        "0 0 30px rgba(34,197,94,1)",
                        "0 0 10px rgba(34,197,94,0.8)"
                    ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                My Projects
            </motion.h2>

            {/* Category Filter Buttons */}
            <div className="flex justify-center gap-5 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300
            ${selectedCategory === cat
                                ? "bg-green-600 text-white shadow-lg "
                                : "bg-white text-green-700 hover:bg-green-600 hover:text-white border-2 border-green-400 shadow-lg shadow-emerald-400"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div
                className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {filteredProjects.map((project, idx) => {
                    const direction = idx % 2 === 0 ? -100 : 100;

                    return (
                        <motion.div
                            key={project.id}
                            className="rounded-2xl shadow-lg shadow-green-400 relative cursor-pointer overflow-hidden
                                     hover:shadow-green-400 hover:shadow-lg transition-shadow duration-500
                                     border border-green-200 hover:border-green-700"
                            variants={cardVariants(direction)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >

                            {/* Glow Effect on Hover */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl pointer-events-none"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.15 }}
                                style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 80%)" }}
                                transition={{ duration: 0.4 }}
                            />

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="p-6 space-y-3">
                                <motion.h3
                                    className="text-2xl font-bold text-green-900"
                                    whileHover={{ scale: 1.1, color: "#16a34a" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {project.title}
                                </motion.h3>

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

                                <div className="flex gap-6 pt-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 hover:text-green-800 text-2xl"
                                        title="Live Site"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-700 hover:text-green-900 text-2xl"
                                        title="GitHub"
                                    >
                                        <FaGithub />
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
