import Link from "next/link";

export default function Header() {
    return (
         <header className="bg-blue-800 text-white py-4 shadow-md">
            <div id="header-title" className="text-4xl font-bold text-center" >Chawanangwa Gondwe</div>
            <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <ul className="flex gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </nav>
        </header>
  );
}