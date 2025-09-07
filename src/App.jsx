import Contact from "./components/Contact"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"

const App = () => {
  return (
    <div className="scroll-smooth bg-background text-foreground">
      <Navbar/>
      <main className="pt-20">
        <section id="about" className="min-h-screen flex items-center justify-center">
          <Hero/>
        </section>

        <section id="techstack" className="flex items-center justify-center">
          <TechStack/>
        </section>

        <section id="projects" className="flex items-center justify-center">
          <Projects/>
        </section>

        <section id="education" className="flex items-center justify-center">
          <Education/>
        </section>

        <section id="contact" className="flex items-center justify-center">
          <Contact/>
        </section>
      </main>
    </div>
  )
}

export default App
