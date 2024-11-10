import HeroSection from "@/components/heroSection";
import About from "./(routes)/about/page";
import Contact from "./(routes)/contact/page";
import Project from "./(routes)/projects/page";

export default function Home() {
  return (
    <div className="bg-[#020617] min-h-screen w-auto md:w-full">
      <div>
        <HeroSection />
      </div>
      <div  id="project">
        <Project />
      </div>
      

      <div  id="about">
        <About />
      </div>
      <div  id="contact">
        <Contact />
      </div>
    </div>
  );
}
