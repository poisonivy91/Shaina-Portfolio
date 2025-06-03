'use client';

import { FaReact, FaJs, FaAws, FaGithub, FaPython, FaHome } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase } from 'react-icons/si';
import Link from 'next/link';
import Starfield from '../components/Starfield';

export default function SkillsPage() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Starfield />
      </div>

      {/* Glowing NavBar (same as Home page) */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-black/60 backdrop-blur-md border-b border-purple-800 px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 flex-wrap">
          { [
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

      <div className="relative z-10 pt-48 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-300 mb-10 text-center">
          🛠️ My Skills & Tech Stack
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-purple-900/30 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-purple-200">About My Stack</h2>
            <p className="text-purple-100 text-base">
              My journey in web development is powered by a cosmic array of tools and languages. I specialize in React, Next.js, and modern JavaScript, with a passion for UI/UX, cloud, and automation. Here’s a snapshot of my favorite technologies and stats!
            </p>
          </div>
          <div className="bg-purple-900/30 rounded-xl p-6 shadow-lg flex flex-col justify-center items-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">6</div>
            <div className="text-purple-100">Projects Completed</div>
            <div className="text-3xl font-bold text-yellow-300 mt-4 mb-2">2+</div>
            <div className="text-purple-100">Years Experience</div>
          </div>
        </div>

        {/* Tech Icons */}
        <div className="bg-purple-900/30 rounded-xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-200">Tech I Use</h2>
          <div className="flex flex-wrap gap-6 justify-center items-center text-4xl text-purple-200">
            <FaReact title="React" />
            <SiNextdotjs title="Next.js" />
            <FaJs title="JavaScript" />
            <SiTailwindcss title="Tailwind CSS" />
            <FaAws title="AWS" />
            <SiFirebase title="Firebase" />
            <FaGithub title="GitHub" />
            <FaPython title="Python" />
            {/* Add more as needed */}
          </div>
        </div>

        {/* GitHub Stats Example */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-900/30 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-purple-200">Most Used Languages</h2>
            <ul className="text-purple-100 space-y-2">
              <li>JavaScript: 60%</li>
              <li>HTML/CSS: 25%</li>
              <li>Python: 10%</li>
              <li>Other: 5%</li>
            </ul>
          </div>
          <div className="bg-purple-900/30 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-purple-200">GitHub Stats</h2>
            <ul className="text-purple-100 space-y-2">
              <li>Total Commits (2024): 200+</li>
              <li>Current Streak: 10 days</li>
              <li>Longest Streak: 30 days</li>
              <li>Contributed to: 15+ repos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
