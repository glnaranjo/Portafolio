// App.jsx — Componente raíz: maneja sección activa e idioma
import { useState } from 'react'
import Header   from './components/Header.jsx'
import Nav      from './components/Nav.jsx'
import Projects from './components/Projects.jsx'
import Skills   from './components/Skills.jsx'
import Footer   from './components/Footer.jsx'

export default function App() {
  // 'projects' | 'skills'
  const [activeSection, setActiveSection] = useState('projects')
  // 'esp' | 'eng'
  const [lang, setLang] = useState('esp')

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Nav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        lang={lang}
      />
      <main>
        {activeSection === 'projects' && <Projects lang={lang} />}
        {activeSection === 'skills'   && <Skills   lang={lang} />}
      </main>
      <Footer lang={lang} />
    </>
  )
}
