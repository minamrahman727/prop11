"use client"
import Navbar from "./components/nav";
import HeroSection from "./components/hero section";
import AboutMe from "./components/about";
import SnC from "./components/skillsncontact";
import Footer from "./components/footer";
export default function Home() {
  return <main>

    <Navbar />
    <HeroSection />
    <AboutMe />
    <SnC />
    {/* <ImageGrid /> */}
    <Footer /> 

  </main>
}
