// ProjectCard.jsx — Card individual de proyecto de software
// Diseño: fondo oscuro redondeado, texto centrado, tags tipo pill outlined
import '../styles/projects.css'

export default function ProjectCard({ project, lang }) {
  const {
    name,
    date, dateEng,
    role, roleEng,
    description, descriptionEng,
    technologies,
    image,
    links,
  } = project

  const displayDate = lang === 'eng' ? dateEng : date
  const displayRole = lang === 'eng' ? roleEng  : role
  const displayDesc = lang === 'eng' ? descriptionEng : description

  const hasGithub = links?.github?.trim()
  const hasDemo   = links?.demo?.trim()

  return (
    <article className="project-card">

      {/* Imagen del proyecto o placeholder */}
      {image ? (
        <img
          src={image}
          alt={`Captura de ${name}`}
          className="project-card-image"
        />
      ) : null}

      {/* Nombre del proyecto */}
      <h3 className="project-card-name">{name}</h3>

      {/* Fecha */}
      <p className="project-card-date">{displayDate}</p>

      {/* Rol */}
      <p className="project-card-role">Rol - {displayRole}</p>

      {/* Descripción */}
      <p className="project-card-description">{displayDesc}</p>

      {/* Tags de tecnologías — pill outlined */}
      {technologies?.length > 0 && (
        <ul className="project-tech-tags" aria-label="Tecnologías utilizadas">
          {technologies.map((tech) => (
            <li key={tech} className="project-tech-tag">{tech}</li>
          ))}
        </ul>
      )}

      {/* Enlaces (sólo si la URL no está vacía) */}
      {(hasGithub || hasDemo) && (
        <div className="project-links">
          {hasGithub && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub ↗
            </a>
          )}
          {hasDemo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Demo ↗
            </a>
          )}
        </div>
      )}

    </article>
  )
}
