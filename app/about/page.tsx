import SkillCard from "@/components/SkillCard";

const skills = [
    {
        name: "Frontend Development",
        stack: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
        abilities: ["Responsive Design", "UI/UX Design", "State Management"],
        level: "Advanced"
    },
    {
        name: "Backend Development",
        stack: ["Node.js", "Express", "postgreSQL", "MySQL", "MongoDB"],
        abilities: ["API Development", "Database Management", "Server-side Logic"],
        level: "Intermediate"
    },
    {
        name: "Full Stack Development",
        stack: ["React", "Next.js", "TypeScript", "Node.js", "Express","Tailwind CSS", "MongoDB"],
        abilities: ["API Development", "Database Management", "Server-side Logic","Debugging" ,"Testing"],
        level: "Intermediate"
    }
];


export default function About() {
    return (
        <main className="flex-grow">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg leading-relaxed">
                    I am a passionate software developer with experience in building web applications using React, Next.js, and TypeScript. I enjoy solving complex problems and creating intuitive user experiences.
                </p>
            </div>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
        </main>
    );
}