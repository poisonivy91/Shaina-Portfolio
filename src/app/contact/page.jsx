'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Starfield from '../components/Starfield';
import Link from 'next/link';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0">
        <Starfield />
      </div>

      {/* Navbar with icons */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-black/60 backdrop-blur-md border-b border-purple-800 px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 flex-wrap">
          {[
            {
              href: "/",
              label: "About",
              icon: "/icons/about.png",
            },
            {
              href: "/projects",
              label: "Projects",
              icon: "/icons/projects.png",
            },
            {
              href: "/skills",
              label: "Skills",
              icon: "/icons/skills.png",
            },
            {
              href: "/ShainaBowserResume.pdf",
              label: "Resume",
              icon: "/icons/resume.png",
            },
            {
              href: "https://github.com/poisonivy91",
              label: "GitHub",
              icon: "/icons/github.png",
            },
            {
              href: "https://linkedin.com/in/shainabowser",
              label: "LinkedIn",
              icon: "/icons/linkedin.png",
            },
            {
              href: "/contact",
              label: "Contact",
              icon: "/icons/contact.png",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
              className="flex flex-col items-center text-sm font-medium text-purple-200 hover:text-white transition-all duration-300 group"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-20 h-20 mb-1 group-hover:scale-110 transition-transform duration-200 drop-shadow-glow"
              />
              <span className="text-[14px] tracking-wide">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full pt-96 px-2">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 text-purple-300 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Mission Control
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-purple-100 mb-6 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Ready to launch a new idea, collaborate, or just say hello? I’d love to hear from you!
          <br />
          <span className="block mt-4">
            <span className="font-semibold text-purple-300">School Email:</span>{' '}
            <a href="mailto:sbowse6@wgu.edu" className="underline hover:text-white">sbowse6@wgu.edu</a>
          </span>
        </motion.p>

        <div className="w-full max-w-md mx-auto bg-black/70 rounded-lg p-6 shadow-lg mb-8">
          {sent ? (
            <div className="text-green-400 font-semibold text-lg text-center">Thank you! Your message has been sent.</div>
          ) : (
            <form
              action="https://formspree.io/f/xvgronln"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-transparent border border-purple-500 rounded px-4 py-2 text-white focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-transparent border border-purple-500 rounded px-4 py-2 text-white focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="bg-transparent border border-purple-500 rounded px-4 py-2 text-white focus:outline-none"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-purple-700 border border-purple-400 hover:bg-purple-500 hover:text-black text-white font-semibold py-2 rounded transition"
              >
                Send to Space!
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
