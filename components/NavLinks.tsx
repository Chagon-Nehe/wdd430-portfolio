'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex gap-6 items-center">
      <Link
        href="/"
        className={`hover:text-blue-600 transition-colors ${
          pathname === '/' ? 'text-blue-300 font-bold underline' : 'text-white-600'
        }`}
        aria-current={pathname === '/' ? 'page' : undefined}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`hover:text-blue-600 transition-colors ${
          pathname === '/about' ? 'text-blue-300 font-bold underline' : 'text-white-600'
        }`}
        aria-current={pathname === '/about' ? 'page' : undefined}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={`hover:text-blue-600 transition-colors ${
          pathname === '/contact' ? 'text-blue-300 font-bold underline' : 'text-white-600'
        }`}
        aria-current={pathname === '/contact' ? 'page' : undefined}
      >
        Contact
          </Link>
          <Link
              href="/projects"
          className={`hover:text-blue-600 transition-colors ${
              pathname.startsWith('/projects') ? 'text-blue-300 font-bold underline' : 'text-white-600'
          }`}
          aria-current={pathname.startsWith('/projects') ? 'page' : undefined}
        >
          Projects
        </Link> 
    </nav>
  );
}