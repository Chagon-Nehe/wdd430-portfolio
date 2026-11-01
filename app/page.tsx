import ProjectList from "@/components/ProjectList"; 

const projects = [
  {
    title: "Frontend Portfolio",
    description: "A responsive web application .",
    technologies: ["HTML","JavaScript", "web design", "CSS"],
    link: "https://github.com/Chagon-Nehe/wdd330-projects",
  },
  {
    title: "Backend Portfolio",
    description: "A server-side application built with Node.js and Express.",
    technologies: ["Node.js", "Express", "JavaScript", "CSS", "postgreSQL", "MySQL", "MongoDB"],
    link: "https://github.com/Chagon-Nehe/cse341-wd",
  },
  {
    title: "Full Stack Portfolio",
    description: "A comprehensive full-stack application built with Next.js and Node.js.",
    technologies: ["Next.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/Chagon-Nehe/wwd430-portfolio",
  },
];

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-700">
            Explore my projects and learn more about my work as a software developer.
          </p>
        </div>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}


