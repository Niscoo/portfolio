import Header from './components/Header'
import Home from './components/Home'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { PROFILE } from './data/profile'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header profile={PROFILE} />
      <main>
        <Home profile={PROFILE} />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact profile={PROFILE} />
      </main>
      <footer className="footer">
        <div className="container footer-content">
          <span>
            © {new Date().getFullYear()} {PROFILE.fullName} · {PROFILE.role}
          </span>
          <span>{PROFILE.location}</span>
        </div>
      </footer>
    </div>
  )
}
