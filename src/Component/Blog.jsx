            import React, { useState } from "react";
            import { motion, AnimatePresence } from "framer-motion";

            const blogPosts = [
            {
                id: 1,
                title: "How to Learn React in 2025",
                date: "July 1, 2025",
                category: "React",
                summary:
                "React is one of the most popular JavaScript libraries. Here are tips and resources to master it quickly.",
                content:
                "React simplifies building interactive UIs. Start with components, hooks, and routing. Practice by building projects. Dive into React's ecosystem and explore tools like Redux, React Router, and more to become a proficient React developer.",
                image:
                "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
            },
            {
                id: 2,
                title: "Understanding Tailwind CSS",
                date: "June 20, 2025",
                category: "CSS",
                summary:
                "Tailwind CSS is a utility-first CSS framework that makes styling faster and easier.",
                content:
                "With Tailwind, you write classes directly in your markup. It helps maintain design consistency and speeds up development. Learn to customize Tailwind configuration, create responsive designs, and use plugins to enhance functionality.",
                image:
                "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
            },
            {
                id: 3,
                title: "JavaScript ES2025 Features to Know",
                date: "June 10, 2025",
                category: "JavaScript",
                summary:
                "ES2025 brings exciting new features to JavaScript. Learn what’s new and how to use them.",
                content:
                "From new syntax improvements to better performance, ES2025 will make coding in JS more enjoyable. Features include enhanced pattern matching, new logical assignment operators, and more robust async handling.",
                image:
                "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
            },
            ];

            export default function BlogWithHoverReveal() {
            const [selectedPost, setSelectedPost] = useState(null);
            const [search, setSearch] = useState("");
            const [selectedCategory, setSelectedCategory] = useState("All");

            const filteredPosts = blogPosts.filter(
                (post) =>
                (selectedCategory === "All" || post.category === selectedCategory) &&
                post.title.toLowerCase().includes(search.toLowerCase())
            );

            const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

            return (
                <motion.section
                className="max-w-7xl mx-auto px-6 py-16 min-h-screen bg-gradient-to-tr from-green-100 to-emerald-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                >
                <motion.h1
                    className="text-6xl font-black text-green-900 mb-10 text-center select-none drop-shadow-md tracking-tight"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Explore Blog
                </motion.h1>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
                    <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full md:w-1/2 px-4 py-2 rounded-full border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map((cat) => (
                        <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-1 rounded-full border font-medium transition ${
                            selectedCategory === cat
                            ? "bg-green-700 text-white border-green-700"
                            : "bg-white text-green-700 border-green-400 hover:bg-green-100/60 shadow-lg shadow-green-400"
                        }`}
                        >
                        {cat}
                        </button>
                    ))}
                    </div>
                </div>

                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence>
                    {filteredPosts.map((post, index) => (
                        <motion.div
                        key={post.id}
                        layout
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                        className="relative w-full h-96 rounded-3xl overflow-hidden bg-white ring-2 ring-green-100 group hover:ring-green-300 hover:shadow-2xl hover:scale-[1.04] transition-all duration-500"
                        >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-44 object-cover rounded-t-3xl"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1 line-clamp-1">
                            {post.title}
                            </h2>
                            <p className="text-green-700 italic text-xs mb-3">{post.date}</p>
                        </div>
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-lg p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                            <div>
                            <h2 className="text-xl font-semibold text-green-900 mb-3">
                                {post.title}
                            </h2>
                            <p className="text-green-800 text-sm line-clamp-5">
                                {post.summary}
                            </p>
                            </div>
                            <motion.button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedPost(post);
                            }}
                            className="mt-4 px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold rounded-full hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-xl"
                            whileTap={{ scale: 0.95 }}
                            >
                            Read More
                            </motion.button>
                        </div>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>

                {selectedPost && (
                    <Modal post={selectedPost} onClose={() => setSelectedPost(null)} />
                )}
                </motion.section>
            );
            }

            function Modal({ post, onClose }) {
            return (
                <div
                className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 p-4"
                onClick={onClose}
                >
                <motion.div
                    className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl border-4 border-green-100"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 50 }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-green-700 hover:text-green-900 text-3xl font-bold"
                    aria-label="Close modal"
                    >
                    &times;
                    </button>

                    <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
                    />
                    <h2 className="text-4xl font-bold text-green-900 mb-4 tracking-tight">
                    {post.title}
                    </h2>
                    <time className="block mb-6 text-green-700 italic">{post.date}</time>
                    <p className="text-green-800 whitespace-pre-line leading-relaxed text-lg">
                    {post.content}
                    </p>
                </motion.div>
                </div>
            );

            }