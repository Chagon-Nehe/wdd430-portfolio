// app/projects/layout.tsx

import Link from 'next/link';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-gray-300 p-6">
      <nav className="bg-gray-100 p-4 mb-4 flex gap-4 justify-center items-center">
       <div className="bg-blue-500 text-white py-2 px-4 rounded-md">
          <Link href="/projects">Overview</Link>
        </div>
    
        <div className="bg-blue-500 text-white py-2 px-4 rounded-md">
          <Link href="/projects/opensource">Open Source</Link>
        </div>
     
        <div className="bg-blue-500 text-white py-2 px-4 rounded-md">
          <Link href="/projects/school">School</Link>
        </div>
      </nav>

      {children}
    </section>
  );
}