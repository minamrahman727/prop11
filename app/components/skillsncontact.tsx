"use client"
import next from "next";
import { useState } from "react";
import Image from "next/image";
export default function SnC() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex w-4/5 max-w-4xl border-2 border-black rounded-lg bg-white shadow-lg p-6">
          {/* Left Section */}
          <div className="flex-1 text-start border-r-2 border-black p-4 flex flex-col items-center">
            <h3 className="text-lg font-bold">My skills</h3>
            <ul className="list-disc pl-4 font-mono">
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
              <li>C++</li>
              <li>Python</li>
            </ul>
          </div>
  
          {/* Right Section */}
          <div className="flex-2 p-6">
            <h2 className="text-center text-2xl font-bold font-cursive mb-4">Contact Me</h2>
            <div className="flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/syedminamurrehman/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 px-4 py-2 rounded-full"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/syedminamurrehman/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-300 px-4 py-2 rounded-full"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100078720140776"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-400 px-4 py-2 rounded-full"
              >
                Facebook
              </a>
            </div>
            <p className="text-center font-mono">
              <a href="mailto:minamrahman727@gmail.com" className="font-bold">Email:</a> minamrahman727@gmail.com
              <br />
              <a href="tel:+923369289269" className="font-bold">Contact No:</a> +92 336 9289269
              <br />
              <span className="font-bold">Address:</span> L-352 sector 4 North Karachi, Karachi City, Pakistan
            </p>
            
            
        </div>
      </div>
      </div>
    );
  }
