import React from "react"

const educationData = [
  {
    id: 1,
    institution: "PCCOER, Pune",
    degree: "B.E. in Computer Engineering",
    year: "2023 - 2027",
    score: "9.4 CGPA (till IV sem)",
  },
  {
    id: 2,
    institution: "NACSC, Wardha",
    degree: "Higher Secondary (HSC)",
    score: "90.8%",
  },
  {
    id: 3,
    institution: "Agragami High School, Wardha",
    degree: "Secondary School (SSC)",
    score: "94.8%",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-16 px-6 md:px-0">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
        Education
      </h2>

      <div className="flex flex-col md:flex-row md:justify-center md:gap-8 items-center">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-background/10 dark:bg-background/20 p-6 rounded-xl shadow-md w-full md:w-80 mb-6 md:mb-0"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {edu.institution}
            </h3>
            <p className="text-sm md:text-base text-foreground/80 mb-1">
              {edu.degree}
            </p>
            {edu.year && (
              <p className="text-sm text-foreground/70 mb-1">{edu.year}</p>
            )}
            <p className="text-sm font-medium text-foreground/90">{edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
