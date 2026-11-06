// Footer.jsx — Pie de página elegante, sobrio y funcional
import { personalInfo, socialLinks, translations } from '../data/data.js'
import '../styles/footer.css'

export default function Footer({ lang }) {
  const t = translations[lang]
  const footerText = t.footer

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">

        {/* Bloque superior: Identidad y redes */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-profession">{t.profession}</p>
          </div>

          <div className="footer-social-links" aria-label="Enlaces del pie de página">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                {link.platform} ↗
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
