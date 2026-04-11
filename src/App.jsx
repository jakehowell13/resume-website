import { Button } from "@/components/ui/button.jsx"
import { Banner } from "./components/Banner"
import { Route, Routes } from "react-router-dom"
import { Landing } from "./components/Landing"
import { JobHistory } from "./components/JobHistory"
import { SkillsLanguages } from "./components/SkillsLanguages"

export function App() {
  return (
    <div className='parent-content-container'>
      <Banner />
      <div className='content-wrapper'>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/job-history' element={<JobHistory/>} />
          <Route path='/skills-languages' element={<SkillsLanguages/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
