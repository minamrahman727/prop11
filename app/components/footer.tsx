import next from "next";

export default function Footer() {
    return (
        <div>
        <p className="text-center text-lg font-bold">
            Made with <a className="text-black hover:text-gray-900 hover:font-mono" href="https://nextjs.org">Next.js</a> and <a className="hover:text-gray-900 hover:font-mono " href="https://tailwindcss.com">Tailwind CSS</a>
        </p>
        <p className="text-center text-opacity-75 font-mono">
            Copyright© 2025 Syed Minam ur Rehman. All rights reserved.
        </p>       
        <p className="text-center text-sm font-mono">powered by <a className="text-green-500 hover:text-green-700" href="https://instagram.com/zarak.store/">@zarak.store</a></p>
    </div>
    );
    
}