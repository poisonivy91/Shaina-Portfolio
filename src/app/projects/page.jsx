'use client';

import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import Starfield from "../components/Starfield"; // <-- Add this import

const projects = [
	{
		title: "Manifest Me",
		description:
			"AI-powered affirmation & journaling web app using Gemini + Firebase.",
		image: "/projects/manifestme.png",
		github: "https://github.com/poisonivy91/manifest-me",
		demo: "https://manifest-me.vercel.app",
	},
	{
		title: "Cosmic To-Do",
		description:
			"A sleek animated task app built with React and Framer Motion.",
		image: "/projects/todo.png",
		github: "https://github.com/poisonivy91/cosmic-todo",
		demo: "https://react-todo-tiuw.onrender.com",
	},
	{
		title: "Astron Bitcoin App",
		description:
			"A cosmic-themed Bitcoin price tracker built with React and CoinGecko API. Features custom navigation, floating hero section, and sleek UI components.",
		image: "/projects/astron.png",
		github: "https://github.com/poisonivy91/astron-bitcoin-app",
		demo: "https://astron-bitcoin-app.vercel.app",
	},
	{
		title: "Pulse Clinic",
		description:
			"A modern, responsive healthcare website built with Next.js and Appwrite.",
			image: "/projects/pulseclinic.png",
		github: "https://github.com/team-bethany-and-thomas/healthapp",
		demo: "https://healthapp.appwrite.network",

	}
];

export default function ProjectsPage() {
	return (
		<div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white p-8 pt-48 overflow-hidden">
			{/* Starfield Background */}
			<div className="absolute inset-0 z-0">
				<Starfield />
			</div>

			{/* Glowing NavBar (same as Home page) */}
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
							href: "/SoftwareDeveloperResume.pdf",
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

			<div className="relative z-10">
				<h1 className="text-4xl md:text-5xl font-bold text-purple-300 text-center mb-12">
					🚀 My Projects
				</h1>
				<p className="text-lg text-purple-100 text-center mb-12 max-w-3xl mx-auto">
					Here are some of my favorite projects that showcase my skills in web
					development, design, and creativity. Each project is a unique journey
					through code and innovation.
				</p>

				<div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
					{projects.map((project, index) => (
						<ProjectCard key={project.title} project={project} index={index} />
					))}
				</div>
			</div>
		</div>
	);
}
