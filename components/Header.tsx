// import Link from "next/link";
import NavLinks from "./NavLinks";


export default function Header() {
    return (
         <header className="flex flex-row justify-center items-center bg-blue-800 text-white py-4 shadow-md">
            <div id="header-title" className="text-4xl font-bold text-center p-4" >Chawanangwa Gondwe</div>   
            <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <ul className="flex gap-6 ">
                   <NavLinks/>

                </ul>
            </nav>
        </header>
  );
}