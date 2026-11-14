interface ViewDetailProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ViewDetail({ title, description, technologies, link }: ViewDetailProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-4">
                <h4 className="font-semibold">Technologies Used:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tech, index) => (
                        <li key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
            {link && (
                <p className="mt-4">
                    <a href={link} className="text-blue-900 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </p>
            )}
        </div>
    );
}