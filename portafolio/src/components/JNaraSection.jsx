// JNaraSection.jsx — Sección de videojuegos con identidad J.Nara y logotipo oficial en imagen
import { jnaraInfo } from '../data/data.js'
import '../styles/projects.css'

export default function JNaraSection({ lang, videogames }) {
  const isEng = lang === 'eng'
  const desc = isEng ? jnaraInfo.descriptionEng : jnaraInfo.description

  return (
    <section className="jnara-container" aria-label="Sección Videojuegos J.Nara">
      {/* Cabecera con el logotipo oficial de J.Nara en imagen */}
      <div className="jnara-header">
        <div className="jnara-logo-wrapper">
          {jnaraInfo.logo ? (
            <img
              src={jnaraInfo.logo}
              alt="J.Nara Logotipo"
              className="jnara-logo-img"
            />
          ) : (
            <h2 className="jnara-logo">{jnaraInfo.alias}</h2>
          )}
        </div>
        <p className="jnara-bio">{desc}</p>
      </div>

      {/* Listado de videojuegos */}
      <div className="jnara-games-list">
        {videogames.map((game) => {
          const displayDate = isEng ? game.dateEng : game.date
          const displayRole = isEng ? game.roleEng : game.role
          const displayDesc = isEng ? game.descriptionEng : game.description
          const hasItch = game.links?.itch?.trim()

          return (
            <div key={game.id} className="jnara-game-wrapper">
              {/* Fila de metadatos arriba de la tarjeta */}
              <div className="jnara-meta-row">
                <span className="jnara-role">Rol - {displayRole}</span>
                <span className="jnara-date">{displayDate}</span>
              </div>

              {/* Tarjeta lila / lavanda clara redondeada */}
              <article className="jnara-card">
                {/* Miniatura / Banner de Dodge Box */}
                <div className="jnara-card-preview">
                  {game.image ? (
                    <img
                      src={game.image}
                      alt={`Miniatura de ${game.name}`}
                      className="jnara-img"
                    />
                  ) : (
                    <div className="dodgebox-pixel-banner">
                      <div className="dodgebox-stars"></div>
                      <span className="dodgebox-title">{game.name}</span>
                    </div>
                  )}
                </div>

                {/* Contenido derecho de la tarjeta */}
                <div className="jnara-card-body">
                  <p className="jnara-game-desc">{displayDesc}</p>

                  <div className="jnara-card-footer">
                    {/* Botón / Link itch.io con gamepad */}
                    {hasItch ? (
                      <a
                        href={game.links.itch}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="itch-link"
                      >
                        <GamepadIcon />
                        <span>itch.io</span>
                      </a>
                    ) : (
                      <div className="itch-badge">
                        <GamepadIcon />
                        <span>itch.io</span>
                      </div>
                    )}

                    {/* Tags tecnológicas de videojuegos */}
                    <div className="jnara-tech-tags">
                      {game.technologies.map((tech) => (
                        <span key={tech} className="jnara-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function GamepadIcon() {
  return (
    <svg
      className="gamepad-svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <path d="M7 6h10a6 6 0 0 1 6 6v3a4 4 0 0 1-6.9 2.6L13.7 15H10.3l-2.4 2.6A4 4 0 0 1 1 15v-3a6 6 0 0 1 6-6zm-1 4a1 1 0 0 0-1 1v1H4a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2H7v-1a1 1 0 0 0-1-1zm11 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm2 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
    </svg>
  )
}
