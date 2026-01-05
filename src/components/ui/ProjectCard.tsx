import { ExternalLink } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:glow-purple group">
      {/* Project Image */}
      <div className="relative h-64 bg-gray-900 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.classList.add('gradient-bg');
          }}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition-colors"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
            {project.category}
          </span>
        </div>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
