import next from "next"

export default function HeroSection() {
    return (    
        <div className="h-screen flex items-center justify-center">
            <h1 className="text-6xl font-bold hover:text-zinc-800 *:">Welcome to my Portfolio</h1>
            <br />
            <h2 className="text-xl; font-bold; font-mono hover:text-neutral-700 text-justify">created with Next.Js</h2>
        </div>

    )   
}