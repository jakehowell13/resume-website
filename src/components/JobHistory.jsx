import { resumeContent } from "../assets/resume-content.js"
import { Briefcase, MapPin, Calendar, ArrowRight, GraduationCap } from "lucide-react"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"

export const JobHistory = () => {
  const { experience, education } = resumeContent
  const location = useLocation()
  const jobRefs = useRef([])

  useEffect(() => {
    const scrollToJobIndex = location.state?.scrollToJobIndex
    if (scrollToJobIndex !== undefined && jobRefs.current[scrollToJobIndex]) {
      setTimeout(() => {
        jobRefs.current[scrollToJobIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }, [location])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-25 to-indigo-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-lg text-gray-700">
            5 years of professional experience
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>

          {/* Experience Cards */}
          <div className="flex flex-col gap-6">
            {experience.map((job, index) => (
              <div 
                key={index} 
                ref={el => jobRefs.current[index] = el}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-blue-50 shadow-lg"></div>

                <Card className="p-6 md:p-8 !bg-white text-gray-900 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                          {job.company}
                        </h3>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {job.position}
                      </h2>
                    </div>
                    {index === 0 && (
                      <Badge variant="default" className="h-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Current Role
                      </Badge>
                    )}
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 md:gap-6 mb-6 text-sm md:text-base text-gray-800">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="font-medium">{job.startDate} - {job.endDate}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-blue-600">Key Responsibilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-gray-800">
                          <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-16 pt-12 border-t-2 border-blue-200">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h1>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 md:p-8 !bg-white text-gray-900 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h2>
                  <p className="text-lg text-gray-700">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600">
                    {edu.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}