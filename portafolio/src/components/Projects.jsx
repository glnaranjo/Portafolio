// Projects.jsx — Sección de proyectos con sidebar izquierda (Software / Videojuegos)
import { useState } from 'react'
import { projects, videogames, translations } from '../data/data.js'
import ProjectCard   from './ProjectCard.jsx'
import JNaraSection  from './JNaraSection.jsx'
import '../styles/projects.css'

export default function Projects({ lang }) {
  // 'software' | 'videogames'
  const [activeCategory, setActiveCategory] = useState('software')
  const t = translations[lang].sidebar

  return (
    <div className="projects-layout">

      {/* ── Sidebar izquierda ───────────────────────────────── */}
      <aside className="projects-sidebar" aria-label="Categoría de proyectos">
        <button
          className={`sidebar-link${activeCategory === 'software' ? ' sidebar-link--active' : ''}`}
          onClick={() => setActiveCategory('software')}
          aria-pressed={activeCategory === 'software'}
        >
          {t.software}
        </button>
        <button
          className={`sidebar-link${activeCategory === 'videogames' ? ' sidebar-link--active' : ''}`}
          onClick={() => setActiveCategory('videogames')}
          aria-pressed={activeCategory === 'videogames'}
        >
          {t.videogames}
        </button>
      </aside>

      {/* ── Contenido principal ─────────────────────────────── */}
      {activeCategory === 'software' ? (
        <section className="projects-content" aria-label="Proyectos de software">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </section>
      ) : (
        <JNaraSection lang={lang} videogames={videogames} />
      )}

    </div>
  )
}
