// This is the page for the open source projects section of the application. It provides an overview of all open source repositories and contributions. The page fetches data from the API and displays it in a user-friendly format.
async function getOpenSourceProjectsData() {
  "use cache"
  const res = await fetch('http://localhost:3000/api/projects?category=opensource', {
  });
  if (!res.ok) {
    throw new Error('Failed to fetch open source projects data');
  }
  return res.json();
}

export default async function OpenSourcePage() {
  const openSourceProjects = await getOpenSourceProjectsData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold">Open Source Projects</h2>
      <p className="mt-2 text-gray-600">Here are the open source repositories and contributions I have worked on.</p>
      <ul className="flex flex-col gap-4 space-y-4 mt-6">
        {openSourceProjects.map((project: { id: string; title: string; description: string }) => (
          <li key={project.id} className="border p-4 rounded shadow"> 
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="mt-2">
              <a href={`/projects/opensource/${project.id}`} className="text-blue-900 hover:text-blue-700">
                View Details
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}