import Hero from './components/Hero'
import About from './components/About'
import WeeklyTasks from './components/WeeklyTasks'
import Results from './components/Results'
import Metrics from './components/Metrics'
import Interdisciplinary from './components/Interdisciplinary'
import Quote from './components/Quote'
import Media from './components/Media'
import Footer from './components/Footer'

export default function App() {
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
