
// This is the main page for the projects section of the application. It provides an overview of all projects and allows users to filter them by category. The page fetches project data from the API and displays it in a user-friendly format.

async function getProjectsData() {
  'use cache'
  const res = await fetch('http://localhost:3000/api/projects');
  if (!res.ok) {
    throw new Error('Failed to fetch projects data');
  }
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjectsData();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Projects Overview</h1>
      <p className="mt-2 text-gray-600">Welcome to my projects section. Explore open source work and school projects below.</p>
      <ul className="flex flex-col gap-4 space-y-4 mt-6">
        {projects.map((project: { id: string; title: string; description: string }) => (
          <li key={project.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
  
}
