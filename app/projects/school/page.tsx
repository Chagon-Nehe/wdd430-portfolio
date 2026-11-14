// This is the page for the school projects section of the application. It provides an overview of all academic assignments and applications built for coursework.
async function getSchoolProjectsData() {
  "use cache"
  const res = await fetch('http://localhost:3000/api/projects?category=school', {
  });
  if (!res.ok) {
    throw new Error('Failed to fetch school projects data');
  }
  return res.json();
}

export default async function SchoolProjectsPage() {
  const schoolProjects = await getSchoolProjectsData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold">School Projects</h2>
      <p className="mt-2 text-gray-600">Here are the academic assignments and applications built for my coursework.</p>
      <ul className="flex flex-col gap-4 space-y-4 mt-6">
        {schoolProjects.map((project: { id: string; title: string; description: string }) => (
          <li key={project.id} className="border p-4 rounded shadow"> 
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="mt-2">
              <a href={`/projects/school/${project.id}`} className="text-blue-900 hover:text-blue-700">
                View Details
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}