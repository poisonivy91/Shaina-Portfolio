'use client';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="bg-purple-900/20 p-5 rounded-xl border border-purple-600 shadow-lg w-full sm:w-[45%] lg:w-[30%] hover:scale-[1.03] transition-transform"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-purple-200 mb-2">{project.title}</h3>
      <p className="text-sm text-purple-100 mb-3">{project.description}</p>
      <div className="flex gap-4">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm underline text-purple-300 hover:text-purple-100">
            Live Demo
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm underline text-purple-300 hover:text-purple-100">
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
