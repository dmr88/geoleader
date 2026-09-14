import { HashRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import WeeklyTasks from './components/WeeklyTasks'
import Results from './components/Results'
import Metrics from './components/Metrics'
import Interdisciplinary from './components/Interdisciplinary'
import Quote from './components/Quote'
import Media from './components/Media'
import Footer from './components/Footer'
import SubjectMaterials from './pages/SubjectMaterials'

function HomePage() {
  return (
    <div id="home">
      <Hero />
      <About />
      <WeeklyTasks />
      <Results />
      <Metrics />
      <Interdisciplinary />
      <Quote />
      <Media />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pan/:slug" element={<SubjectMaterials />} />
      </Routes>
    </HashRouter>
  )
}
