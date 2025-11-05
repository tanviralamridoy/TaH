
import React from 'react';
import { GithubIcon, ExternalLinkIcon } from './icons';

interface Project {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    liveUrl: string;
    repoUrl: string;
}

const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with a modern UI, product management, user authentication, and a Stripe payment integration.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
        imageUrl: "https://picsum.photos/seed/ecomm/400/250",
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager with drag-and-drop boards, real-time updates, and user notifications.",
        tags: ["Vue.js", "Firebase", "SCSS"],
        imageUrl: "https://picsum.photos/seed/taskapp/400/250",
        liveUrl: "#",
        repoUrl: "#"
    },
    {
        title: "Data Visualization Dashboard",
        description: "An interactive dashboard for visualizing complex datasets using D3.js, providing insightful charts and graphs.",
        tags: ["D3.js", "React", "Python", "Flask"],
        imageUrl: "https://picsum.photos/seed/dataviz/400/250",
        liveUrl: "#",
        repoUrl: "#"
    }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden group border border-gray-700 hover:border-cyan-500 transition-colors duration-300">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="flex justify-end space-x-4">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
