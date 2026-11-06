// Nav.jsx — Barra de navegación principal: Proyectos / Habilidades
import { translations } from '../data/data.js'
import '../styles/nav.css'

export default function Nav({ activeSection, setActiveSection, lang }) {
  const t = translations[lang].nav

  return (
    <nav className="main-nav" role="navigation" aria-label="Navegación principal">
      <button
        className={`nav-btn${activeSection === 'projects' ? ' nav-btn--active' : ''}`}
        onClick={() => setActiveSection('projects')}
        aria-current={activeSection === 'projects' ? 'page' : undefined}
      >
        {t.projects}
      </button>
      <button
        className={`nav-btn${activeSection === 'skills' ? ' nav-btn--active' : ''}`}
        onClick={() => setActiveSection('skills')}
        aria-current={activeSection === 'skills' ? 'page' : undefined}
      >
        {t.skills}
      </button>
    </nav>
  )
}
