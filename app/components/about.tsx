import Image from "next/image";
export default function AboutMe() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex w-4/5 max-w-4xl border-2 border-black rounded-lg bg-white shadow-lg p-6">
          {/* Left Section */}
          <div className="flex-1 text-center border-r-2 border-black p-4 flex flex-col items-center">
            <img src="/1.jpg" className="w-32 h-32 rounded-full mb-4" alt="profile picture" />
            <p className="text-lg font-medium">Syed Minam ur Rehman</p>
          </div>
  
          {/* Right Section */}
          <div className="flex-2 p-6">
            <h2 className="text-center text-2xl font-bold font-cursive mb-4">about me</h2>
            <p className="text-base leading-relaxed">
            I'm Syed Minam, a full-stack developer from Karachi,Pakistan</p> <p>with expertise in TypeScript, HTML, CSS, Tailwind CSS, Next.js, C++, and Python.</p>
            <p>
             In my free time, I work on projects like a CLI-based ATM system using Node.js</p> <p> andcurrently running a run a fashion brand named Zarak. in Pakistan and middle east </p>
        </div>
      </div>
      </div>
    );
  }
