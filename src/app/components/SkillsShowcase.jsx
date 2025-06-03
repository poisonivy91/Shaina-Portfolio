'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";

const Starfield = dynamic(() => import("./Starfield"), { ssr: false });

const techCards = [
	{
		name: 'HTML5',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
	},
	{
		name: 'CSS3',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
	},
	{
		name: 'JavaScript',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
	},
	{
		name: 'React',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	},
	{
		name: 'Next.js',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
	},
	{
		name: 'Tailwind CSS',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
	},
	{
		name: 'GitHub',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
	},
	{
		name: 'Firebase',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
	},
	{
		name: 'AWS',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
	},
	{
		name: 'Node.js',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
	},
];

export default function SkillsShowcase() {
	return (
		<section className="w-full max-w-5xl mx-auto px-2 py-10">
			{/* Top Info Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div className="bg-gradient-to-br from-purple-900/80 to-black/80 border border-purple-700 rounded-2xl p-6 shadow-xl shadow-purple-700/30">
					<h3 className="text-xl font-bold text-purple-300 mb-2">
						About My Skills
					</h3>
					<p className="text-purple-100 text-sm">
						I use a blend of modern web technologies to build beautiful, performant
						apps. Here are some of my favorite tools and stacks!
					</p>
				</div>
				<div className="bg-gradient-to-br from-purple-900/80 to-black/80 border border-purple-700 rounded-2xl p-6 shadow-xl shadow-purple-700/30 flex flex-col items-center justify-center">
					<span className="text-4xl font-bold text-purple-300 mb-1">2+</span>
					<span className="text-purple-100 text-sm">Years Experience</span>
				</div>
				<div className="bg-gradient-to-br from-purple-900/80 to-black/80 border border-purple-700 rounded-2xl p-6 shadow-xl shadow-purple-700/30 flex flex-col items-center justify-center">
					<span className="text-4xl font-bold text-purple-300 mb-1">20+</span>
					<span className="text-purple-100 text-sm">Projects Built</span>
				</div>
			</div>

			{/* Skills Grid */}
			<div className="bg-gradient-to-br from-purple-900/60 to-black/70 border border-purple-700 rounded-2xl p-8 shadow-2xl shadow-purple-700/40">
				<h2 className="text-2xl font-bold text-purple-200 mb-6 text-center">
					Tech Stack
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
					{techCards.map((tech, i) => (
						<motion.div
							key={tech.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.07, duration: 0.5 }}
							viewport={{ once: true, amount: 0.2 }}
							className="bg-black/80 border border-purple-700 rounded-xl p-4 shadow-lg shadow-purple-600/40 hover:shadow-purple-400/70 transition-all flex flex-col items-center group"
						>
							<img
								src={tech.icon}
								alt={tech.name}
								className="w-12 h-12 mb-2 drop-shadow-[0_0_12px_#a78bfa] group-hover:scale-110 transition-transform"
								onError={(e) => (e.currentTarget.style.display = 'none')}
							/>
							<span className="text-sm font-medium text-purple-100">
								{tech.name}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// Note: The GitHub stats images are static links. You can replace them with dynamic data if needed.
// The language bar chart uses Framer Motion for animation.