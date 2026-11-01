import {cacheLife} from "next/cache";

async function getCurrentYear() {
    'use cache'
    cacheLife('max')
    
    return new Date().getFullYear();
}


export default async function Footer() {
    const currentYear = await getCurrentYear();
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <p>&copy; {currentYear} Chawanangwa Gondwe. All rights reserved.</p>
            </div>
        </footer>
    );
}