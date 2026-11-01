interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                {link && (
                    <p className="mt-2">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        View Project
                        </a>
                    </p>    
                )}
            </div>
        </article>
    );
}