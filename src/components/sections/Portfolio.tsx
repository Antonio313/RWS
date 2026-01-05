import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { SECTION_IDS } from '../../utils/constants';

export default function Portfolio() {
  return (
    <section id={SECTION_IDS.PORTFOLIO} className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader
          title="Our Work"
          subtitle="A showcase of recent projects we've brought to life for our clients"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Portfolio Link */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Want to see more of our work?
          </p>
          <a
            href="https://reufolio.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-500 hover:text-cyan-500 transition-colors text-lg font-semibold"
          >
            Visit My Portfolio
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
