import { resumeContent } from "../assets/resume-content.js"

export const Education = () => {
  const { education } = resumeContent

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      <div className="flex flex-col gap-4">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{edu.degree}</h2>
              <p className="text-gray-600">{edu.institution}, {edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}