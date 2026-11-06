// Skills.jsx — Sección de habilidades (2 columnas con divisor vertical)
import { skills, translations } from '../data/data.js'
import '../styles/skills.css'

export default function Skills({ lang }) {
  const t = translations[lang]
  const cats = t.skillsCategories
  const { technical, personal } = skills

  return (
    <section className="skills-screen" aria-label="Habilidades">
      <div className="skills-container">

        {/* Columna Izquierda: Tecnicas */}
        <div className="skills-column">
          <h2 className="skills-col-title">{t.skillsTechnical}</h2>

          <div className="skills-list-group">
            <p className="skills-line">
              <span className="skills-label">{cats.languages}: </span>
              <span className="skills-items">{technical.languages.join(' - ')}</span>
            </p>

            <p className="skills-line">
              <span className="skills-label">{cats.frameworks}: </span>
              <span className="skills-items">{technical.frameworks.join(' - ')}</span>
            </p>

            <p className="skills-line">
              <span className="skills-label">{cats.design}: </span>
              <span className="skills-items">{technical.design.join(' - ')}</span>
            </p>

            <p className="skills-line">
              <span className="skills-label">{cats.tools}: </span>
              <span className="skills-items">{technical.tools.join(' - ')}</span>
            </p>

            <p className="skills-line">
              <span className="skills-label">{cats.platforms}: </span>
              <span className="skills-items">{technical.platforms.join(' - ')}</span>
            </p>
          </div>
        </div>

        {/* Separador vertical central */}
        <div className="skills-vertical-divider" aria-hidden="true" />

        {/* Columna Derecha: Personales */}
        <div className="skills-column">
          <h2 className="skills-col-title">{t.skillsPersonal}</h2>

          <div className="skills-list-group">
            <p className="skills-line">
              <span className="skills-label">{cats.traits}: </span>
              <span className="skills-items">{personal.traits.join(' - ')}</span>
            </p>

            <p className="skills-line">
              <span className="skills-label">{cats.spoken}: </span>
              <span className="skills-items">
                {personal.spokenLanguages
                  .map((item) => `${item.language} (${item.level})`)
                  .join(' - ')}
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
