'use client';

import Starfield from "./components/Starfield";
import SkillsShowcase from "./components/SkillsShowcase";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Star background */}
      <div className="absolute inset-0 z-0">
        <Starfield />
      </div>

      {/* Glowing NavBar */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-black/60 backdrop-blur-md border-b border-purple-800 px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 flex-wrap">
          {[
            {
              href: "#about",
              label: "About",
              icon: "/icons/about.png",
              onClick: (e) => {
                e.preventDefault();
                const about = document.getElementById("about");
                if (about) {
                  about.scrollIntoView({ behavior: "smooth" });
                }
              },
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
            { href: "/contact", label: "Contact", icon: "/icons/contact.png" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
              className="flex flex-col items-center text-sm font-medium text-purple-200 hover:text-white transition-all duration-300 group"
              onClick={item.onClick}
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 text-center px-6">
        <motion.div
          className="floating-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold glow-text mb-2">
            Shaina Bowser
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Creative Dev ✦ AI Explorer ✦ Orbiting Innovation
          </p>
          <motion.img
            src="/3D.png"
            alt="Shaina Avatar"
            className="w-48 h-auto mx-auto shadow-lg animate-float"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
      <div id="about" className="scroll-mt-40 mt-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center p-8"
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hey there — I’m Shaina. A code-loving, cosmic-minded creative
            turning bold ideas into beautiful interfaces. I&apos;m currently
            studying Software Engineering at Western Governors University,
            with plans to graduate in June 2026. With a passion for AI,
            front-end design, and cloud technology, I craft digital
            experiences that feel alive. When I’m not building something new,
            I’m exploring new tech, galaxies, and everything in between.
          </p>
          <h3 className="text-2xl font-semibold text-purple-300 mt-8 mb-2">
            Core Skills
          </h3>
          <ul className="mt-4 mb-4 max-w-xl mx-auto text-purple-100 text-base list-none text-center space-y-2">
            <li>• Front-end development with React & Next.js</li>
            <li>• UI/UX design with a focus on accessibility</li>
            <li>• Cloud & serverless solutions (AWS, Firebase)</li>
            <li>• AI and automation enthusiast</li>
            <li>• Strong communicator & lifelong learner</li>
          </ul>

          <h3 className="text-2xl font-semibold text-purple-300 mt-8 mb-2">
            Fun Facts
          </h3>
          <ul className="text-base text-purple-100 list-none max-w-xl mx-auto mb-4 mt-2 text-center space-y-2">
            <li>• I love stargazing and learning about the cosmos.</li>
            <li>• I am a huge Horror Buff, Friday nights at Blockbuster was my spot.</li>
            <li>• My favorite coding playlist is full of synthwave and lo-fi beats.</li>
            <li>• I'm a plant mom, my office is filled with plants!</li>
          </ul>

          {/* Planets */}
          <div className="mt-10 flex justify-center gap-10 flex-wrap items-center">
            <motion.img
              src="/icons/venus.png"
              alt="Venus"
              className="w-20 md:w-28 animate-float"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <motion.img
              src="/icons/alien.png"
              alt="Alien"
              className="w-20 md:w-28 animate-float"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            />
            <motion.img
              src="/icons/saturn.png"
              alt="Saturn"
              className="w-24 md:w-32 animate-float"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
