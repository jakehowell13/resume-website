import { resumeContent } from "../assets/resume-content.js"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { Cloud, Server, Database, Wrench, Terminal, Trophy } from "lucide-react"

export const SkillsLanguages = () => {
  const { skillsCategories, languages, certifications } = resumeContent

  const categoryIconMap = {
    "Cloud & Infrastructure": Cloud,
    "Backend & Frameworks": Server,
    "Data & Databases": Database,
    "Tools & DevOps": Wrench,
  }

  const SkillCategory = ({ icon, title, skillList, variant = "outline" }) => {
    const CategoryIcon = categoryIconMap[title] || Cloud

    return (
      <div className="mb-6 last:mb-0">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-slate-900">
          <CategoryIcon className="w-6 h-6 text-blue-600" />
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skillList.map((item, index) => (
            <Badge 
              key={index} 
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform duration-200 cursor-default bg-white/90 border border-blue-200 text-slate-900 shadow-sm hover:bg-blue-50 dark:bg-white/90 dark:text-slate-900"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-lg text-muted-foreground">
            Technologies and capabilities across full-stack development
          </p>
        </div>

        {/* Skills Section */}
        <Card className="p-8 mb-8 hover:shadow-lg transition-shadow duration-300 bg-white/95 text-slate-900 ring-1 ring-blue-100 shadow-sm">
          {skillsCategories.map((category, index) => (
            <div key={index} className={index < skillsCategories.length - 1 ? "mb-8" : ""}>
              <SkillCategory 
                icon={category.icon}
                title={category.title}
                skillList={category.skills}
                variant={category.variant}
              />
            </div>
          ))}
        </Card>

        {/* Languages Section */}
        {languages && languages.length > 0 && (
          <Card className="p-8 mb-8 hover:shadow-lg transition-shadow duration-300 bg-white/95 text-slate-900 ring-1 ring-blue-100 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900">
              <Terminal className="w-8 h-8 text-blue-600" />
              Programming Languages
            </h2>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <Badge 
                  key={index} 
                  variant="default"
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200 cursor-default bg-white/90 text-slate-900 border border-blue-200 shadow-sm hover:bg-blue-50 dark:bg-white/90 dark:text-slate-900"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </Card>
        )}

        {/* Certifications Section */}
        {certifications && certifications.length > 0 && (
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-white/95 text-slate-900 ring-1 ring-blue-100 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900">
              <Trophy className="w-8 h-8 text-blue-600" />
              Certifications
            </h2>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200 cursor-default bg-white/90 text-slate-900 border border-blue-200 shadow-sm hover:bg-blue-50 dark:bg-white/90 dark:text-slate-900"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}