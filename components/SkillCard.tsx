interface SkillCardProps {
    name: string;
    stack: string[];
    abilities?: string[];
    level: string;
}

export default function SkillCard({ name, stack, abilities, level }: SkillCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">Level: {level}</p>
            {abilities && abilities.length > 0 && (
                <div className="mb-2">
                    <h4 className="font-semibold">Abilities:</h4>
                    <ul className="list-disc list-inside">
                        {abilities.map((ability, index) => (
                            <li key={index} className="text-gray-600">
                                {ability}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="flex flex-wrap gap-2">
                {stack.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
