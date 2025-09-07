import { MapPin, Download, ArrowRight } from "lucide-react"
import { Github, Linkedin, Mail } from "lucide-react"

const HeroSection = () => {
  const socials = [
    { icon: <Github size={28} />, url: "https://github.com/Prachiti27" },
    { icon: <Linkedin size={28} />, url: "https://linkedin.com/in/prachiti-kitey-24b348281" },
    { icon: <Mail size={28} />, url: "mailto:prachitikitey86@gmail.com" },
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-0 space-y-6 scroll-smooth"
    >
      <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-foreground">
        Prachiti Kitey
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold tracking-wider text-primary">
        Full Stack Developer & AIML Enthusiast
      </h2>

      <p className="max-w-xl text-foreground/80 text-lg leading-relaxed">
        I build modern web applications with a focus on integrating AI/ML solutions. Passionate about
        creating interactive experiences and exploring emerging technologies.
      </p>

      <div className="flex items-center gap-2 text-foreground/80 text-lg">
        <MapPin />
        <span>Pune, Maharashtra</span>
      </div>

      <div className="flex gap-6 flex-wrap justify-center mt-4">
        <a
          href="/prachiti_resume.pdf"
          download="Prachiti_Kitey_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-background transition"
        >
          <Download size={18} /> Resume
        </a>

        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary/80 transition"
        >
          View Projects <ArrowRight size={18} />
        </a>
      </div>

      <div className="flex gap-8 mt-6">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
