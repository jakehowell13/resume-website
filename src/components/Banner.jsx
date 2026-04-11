import { NavLink } from "react-router-dom"
import { resumeContent } from "../assets/resume-content"

export const Banner = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const navItems = [
    { to: "/", label: "Overview" },
    { to: "/job-history", label: "Experience & Education" },
    { to: "/skills-languages", label: "Skills/Languages" }
  ]

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Full Name on the Left */}
        <NavLink to="/" onClick={handleScrollToTop} className="flex flex-col text-white no-underline hover:opacity-80 transition-opacity">
          <h1 className="text-3xl font-bold tracking-wide">{resumeContent.fullName}</h1>
          <p className="text-blue-100 text-sm">{resumeContent.title}</p>
        </NavLink>

        {/* Navigation Tabs on the Right */}
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md bg-blue-500 font-bold transition-colors"
                  : "px-3 py-2 rounded-md hover:bg-blue-500 transition-colors"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}