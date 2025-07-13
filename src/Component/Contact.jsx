import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FaFacebook, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("✅ Message sent!", {
            position: "top-right",
            autoClose: 3000,
        });
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="min-h-screen bg-white px-6 md:px-12 py-20">
            <motion.h2
                className="text-5xl font-extrabold text-center text-green-800 mb-16 select-none"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                Get In Touch! 📬
            </motion.h2>

            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl shadow-emerald-200 overflow-hidden border border-green-200 grid grid-cols-1 md:grid-cols-2">

                {/* Left: Form */}
                <motion.div
                    className="p-10"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-green-800 font-semibold mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-3 rounded-xl border border-green-300 bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:shadow-md hover:ring-2"
                            />
                        </div>

                        <div>
                            <label className="block text-green-800 font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-3 rounded-xl border border-green-300 bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:shadow-md hover:ring-2"
                            />
                        </div>

                        <div>
                            <label className="block text-green-800 font-semibold mb-1">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-5 py-3 rounded-xl border border-green-300 bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:shadow-md hover:ring-2"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-green-400 animate-bounce"
                        >
                            Send Message 🚀
                        </motion.button>
                    </form>
                </motion.div>

                {/* Right: Info */}
                <motion.div
                    className="bg-green-50 p-10 flex flex-col justify-center space-y-6"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Let's Connect 🤝</h3>
                    <p className="text-green-700">
                        Feel free to reach out to me through the form or my social media handles below. I’ll get back to you as soon as possible.
                    </p>

                    <div className="flex items-center gap-3 text-green-800">
                       <FaMapMarkerAlt className="text-xl text-red-600 animate-bounce" />

                        <a
                            href="https://www.google.com/maps/place/Kapasia+Bus+Stop/@24.1140625,90.5587322,17z/data=!3m1!4b1!4m6!3m5!1s0x3755d5e57829270d:0x3779c418087047b8!8m2!3d24.1140625!4d90.5613125!16s%2Fg%2F11fl7f530z?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Kapasia, Gazipur, Bangladesh
                        </a>
                    </div>

                    <div className="flex items-center gap-3 text-green-800">
                        <FaPhoneAlt className="text-xl text-blue-600 animate-bounce" />
                        <a href="tel:+8801748186766" className="hover:underline">
                            +880 1748186766
                        </a>
                    </div>

                    <div className="flex items-center gap-3 text-green-800">
                        <FaEnvelope className="text-xl text-green-600 animate-bounce" />
                        <a href="mailto:shamimahmadahnaf@gmail.com" className="hover:underline">
                           shamimahmadahnaf@gmail.com
                        </a>
                    </div>


                    <div className="flex gap-5 pt-4 text-2xl animate-bounce">
                        <a href="#" className="text-blue-900 transition"><FaFacebook /></a>
                        <a href="#" className="text-blue-900 transition"><FaLinkedin /></a>
                        <a href="#" className="hover:text-green-900 transition"><FaGithub /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
