import { resumeContent } from "../assets/resume-content.js"
import headshot from "../assets/headshot.jpg"
import githubIcon from "../assets/github.svg"
import linkedinIcon from "../assets/linkedin.svg"
import { Briefcase, Mail, Phone } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const Landing = () => {
  const navigate = useNavigate()
  const { fullName, title, summary, experience, contact, links, showContact } = resumeContent

  const handleJobClick = (index) => {
    navigate(`/job-history`, { state: { scrollToJobIndex: index } })
  }
  const currentJob = experience[0] // Assuming first is current

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="flex flex-row items-start mb-16 gap-12">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="relative mb-8">
              <div className="w-70 h-70 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={headshot}
                  alt={`${fullName} headshot`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Available for Opportunities
              </div> */}
            </div>

            {/* Contact Info */}
            {showContact && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div className="text-lg font-medium">{contact.email}</div>
                </div>
                <div className="flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div className="text-lg font-medium">{contact.phone}</div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex flex-row items-center justify-between mb-4">
              <h1 className="text-5xl font-bold text-gray-900">{fullName}</h1>
              <div className="flex flex-row gap-4">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url || "#"}
                    className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={link.label === "GitHub" ? githubIcon : linkedinIcon}
                      alt={link.label}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
            <h2 className="text-2xl text-blue-600 font-semibold mb-6">{title}</h2>
            <div className="mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">{summary}</p>
            </div>
          </div>
        </div>

        {/* Jobs Row */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Experience</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {experience.map((job, index) => (
              <div
                key={index}
                onClick={() => handleJobClick(index)}
                className={`relative flex-shrink-0 w-80 p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer ${
                  index === 0
                    ? "bg-blue-50 border-2 border-blue-500 ring-2 ring-blue-300 hover:shadow-xl hover:scale-105"
                    : "bg-white hover:shadow-lg hover:scale-105"
                }`}
              >
                {/* Current Position Label */}
                {index === 0 && (
                  <div className="absolute right-6 top-6 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Current
                  </div>
                )}

                {/* Briefcase Icon and Company */}
                <div className="flex items-start gap-3 mb-3">
                  <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-600">{job.company}</p>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-gray-900 mb-2">{job.position}</h4>

                {/* Date Interval */}
                <p className="text-sm text-gray-500 mb-3">
                  {job.startDate} - {job.endDate}
                </p>

                {/* Location */}
                <p className="text-xs text-gray-600">{job.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Position Highlight */}
        {/* <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Current Position</h3>
            <p className="text-xl text-blue-600 font-semibold mb-2">{currentJob.position}</p>
            <p className="text-lg text-gray-600 mb-4">{currentJob.company}</p>
            <p className="text-sm text-gray-500">{currentJob.location} • {currentJob.startDate} - {currentJob.endDate}</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}