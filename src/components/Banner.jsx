import { useState } from "react"
import { NavLink } from "react-router-dom"
import { resumeContent } from "../assets/resume-content"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import { Menu } from "lucide-react"

export const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Popover open={menuOpen} onOpenChange={setMenuOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="end" className="mt-2 w-56 p-3 bg-white text-slate-900 shadow-lg ring-1 ring-slate-200">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? "bg-blue-600 text-white" : "text-slate-900 hover:bg-slate-100"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Full Name on the Left */}
          <NavLink to="/" onClick={handleScrollToTop} className="flex flex-col text-white no-underline hover:opacity-80 transition-opacity">
            <h1 className="text-3xl font-bold tracking-wide">{resumeContent.fullName}</h1>
            <p className="text-blue-100 text-sm">{resumeContent.title}</p>
          </NavLink>
        </div>

        <div className="hidden md:flex space-x-8">
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