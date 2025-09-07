import React from "react"

const techCategories = [
  {
    category: "Languages",
    skills: ["C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "FastAPI"],
  },
  {
    category: "AI/ML & Data",
    skills: ["TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "Postman", "Figma"],
  },
]

const TechStack = () => {
  return (
    <div className="py-16 px-6 md:px-0">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {techCategories.map((category, idx) => (
          <div key={idx} className="p-4">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, id) => (
                <span
                  key={id}
                  className="px-4 py-2 rounded-full border border-foreground/30 text-sm md:text-base font-medium text-foreground/90 hover:bg-foreground/10 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack