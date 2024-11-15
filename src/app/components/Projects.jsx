import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from '../../../data/projects.json'

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsData.map((project, index) => (
        <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href={project.github}
                className="flex items-center space-x-2 text-cyan-600 hover:text-cyan-700"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href={project.live}
                className="flex items-center space-x-2 text-cyan-600 hover:text-cyan-700"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 