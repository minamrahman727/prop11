"use client"
import { ModeToggle } from "./themebutton";
export default function Navbar() {

  return (
    <nav className="bg-white p-2 flex justify-between">
      <a href="/" className="text-black font-bold">
        {/* <img src="/1.jpg" className="h-14 w-auto rounded-full" alt="Syed Minam ur Rehman" /> */}
        <h1>Syed Minam ur Rehman</h1>
      </a>
      <ul className="flex">
        <li>
          <a href="#" className="text-gray-700 px-4 py-2 rounded-md font-serif">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 px-4 py-2 rounded-md font-serif">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 px-4 py-2 rounded-md font-serif">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 px-4 py-2 rounded-md font-serif">
            Skills
          </a>
        </li>
        <li>
            <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
