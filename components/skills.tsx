"use client"

import { Code2, Database, Wrench, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    color: "from-orange-500 to-amber-500",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Docker", "Figma"],
  },
  {
    title: "Otros",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    skills: ["Responsive Design", "SEO", "Accesibilidad", "Testing", "CI/CD", "Agile"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Habilidades</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  {/* Icono grande con gradiente */}
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-semibold text-center mb-4">{category.title}</h3>

                  {/* Skills como badges flexibles */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs font-medium bg-muted rounded-full hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
