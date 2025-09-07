import React from "react"
import spacexplor from "../assets/space.png"
import wildlife from "../assets/wildlife.png"
import server from "../assets/server.png"
import papermind from "../assets/papermind.png"
import nn from "../assets/nn.png"
import moneyiq from "../assets/moneyiq.png"
import donorconnect from "../assets/donorconnect.png"
import cryptotrack from "../assets/cryptotrack.png"
import chatbox from "../assets/chatbox.png"
import ai_data_analyst from "../assets/ai_data_analyst.png"

const projects = [
  {
    id: 1,
    name: "SpaceXplor",
    banner_img: spacexplor,
    description: "Explore space missions and their key facts.",
    tech_stack: ["React", "TailwindCSS", "Framer Motion"],
    github_link: "https://github.com/Prachiti27/space-mission-explorer",
  },
  {
    id: 2,
    name: "DonorConnect",
    banner_img: donorconnect,
    description: "Connect blood donors and recipients via maps.",
    tech_stack: ["React", "TailwindCSS", "Express", "MongoDB"],
    github_link: "https://github.com/Prachiti27/DonorConnect",
  },
  {
    id: 3,
    name: "PaperMind",
    banner_img: papermind,
    description: "Summarize research papers efficiently.",
    tech_stack: ["React", "TailwindCSS", "Express", "MongoDB", "Gemini API"],
    github_link: "https://github.com/Prachiti27/PaperMind",
  },
  {
    id: 4,
    name: "MoneyIQ",
    banner_img: moneyiq,
    description: "AI-powered personal finance manager.",
    tech_stack: ["Next.js", "TailwindCSS", "Prisma", "Supabase", "Gemini API"],
    github_link: "https://github.com/Prachiti27/PaperMind",
  },
  {
    id: 5,
    name: "ML Algorithms",
    banner_img: nn,
    description: "Implement ML algorithms from scratch.",
    tech_stack: ["Python", "NumPy"],
    github_link: "https://github.com/Prachiti27/Machine-learning-Algorithms-Implementation",
  },
  {
    id: 6,
    name: "ChatBox",
    banner_img: chatbox,
    description: "Real-time chat application.",
    tech_stack: ["React", "Tailwind", "Express", "MongoDB", "Socket.IO"],
    github_link: "https://github.com/Prachiti27/ChatBox",
  },
  {
    id: 7,
    name: "WildlifeHub",
    banner_img: wildlife,
    description: "Info about animals, parks, and interactive games.",
    tech_stack: ["React", "TailwindCSS", "Framer Motion"],
    github_link: "https://github.com/Prachiti27/WildlifeHub",
  },
  {
    id: 8,
    name: "CryptoTrack",
    banner_img: cryptotrack,
    description: "Track cryptocurrencies and predict Bitcoin prices.",
    tech_stack: ["React", "Tailwind", "FastAPI", "CoinGecko API"],
    github_link: "https://github.com/Prachiti27/CryptoTrack",
  },
  {
    id: 9,
    name: "AI Data Analyst",
    banner_img: ai_data_analyst,
    description: "Analyze CSV/XLSX data with AI-powered answers.",
    tech_stack: ["React", "Tailwind", "FastAPI", "Groq API"],
    github_link: "https://github.com/Prachiti27/AI-Data-Analyst-Agent",
  },
  {
    id: 10,
    name: "KiteAPI",
    banner_img: server,
    description: "Basic backend framework for learning purposes.",
    tech_stack: ["Python"],
    github_link: "https://github.com/Prachiti27/KiteAPI",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-0">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-background/10 dark:bg-background/20 rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition-all"
          >
            <img
              src={project.banner_img}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.name}
              </h3>
              <p className="text-sm md:text-base text-foreground/80 mb-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech_stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs md:text-sm font-medium px-3 py-1 border border-foreground/30 rounded-full text-foreground/90 hover:bg-foreground/10 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-primary text-background rounded-md font-medium text-sm hover:bg-primary/90 transition mt-auto text-center"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
