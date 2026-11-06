// ============================================================
// data.js — Fuente única de verdad para todo el contenido
// ============================================================
// Para agregar un proyecto: añadir un objeto al array `projects` o `videogames`.
// Para modificar habilidades: editar el objeto `skills`.
// Para cambiar redes sociales: editar el array `socialLinks`.
// ============================================================

/** Traducciones de la UI (ESP / ENG) */
export const translations = {
  esp: {
    profession: "Desarrollador de software",
    description:
      "¡Hola! Soy un programador argentino interesado en el desarrollo de software, la tecnología y la resolución creativa de problemas. Disfruto crear proyectos propios, explorar nuevas tecnologías y enfrentar desafíos que me permitan seguir aprendiendo y mejorando mis habilidades. Me apasionan especialmente el desarrollo de software y los videojuegos, y busco convertir ideas en soluciones funcionales a través del código.",
    nav: {
      projects: "Proyectos",
      skills: "Habilidades",
    },
    sidebar: {
      software: "Software",
      videogames: "Videojuegos",
    },
    rolePrefix: "Rol",
    skillsTechnical: "Tecnicas",
    skillsPersonal: "Personales",
    skillsCategories: {
      languages: "Lenguajes",
      frameworks: "Frameworks",
      design: "Plataformas de diseño",
      tools: "Herramientas",
      platforms: "Plataformas",
      traits: "Rasgos",
      spoken: "Idiomas",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba ↑",
      location: "Argentina",
    },
  },
  eng: {
    profession: "Software Developer",
    description:
      "Hi! I'm an Argentine developer passionate about software, technology, and creative problem-solving. I enjoy building my own projects, exploring new technologies, and tackling challenges that help me keep growing. I'm especially passionate about software development and video games, and I aim to turn ideas into working solutions through code.",
    nav: {
      projects: "Projects",
      skills: "Skills",
    },
    sidebar: {
      software: "Software",
      videogames: "Games",
    },
    rolePrefix: "Role",
    skillsTechnical: "Technical",
    skillsPersonal: "Personal",
    skillsCategories: {
      languages: "Languages",
      frameworks: "Frameworks",
      design: "Design platforms",
      tools: "Tools",
      platforms: "Platforms",
      traits: "Traits",
      spoken: "Languages",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top ↑",
      location: "Argentina",
    },
  },
};

/** Información personal */
export const personalInfo = {
  name: "Galo Naranjo",
  location: "Argentina",
};

/** Redes sociales — dejar url vacía para mostrar el ícono sin enlace */
export const socialLinks = [
  { platform: "Instagram", url: "https://www.instagram.com/gal.nj_", icon: "instagram" },
  { platform: "GitHub",    url: "https://github.com/glnaranjo", icon: "github"    },
  { platform: "LinkedIn",  url: "https://www.linkedin.com/in/galo-naranjo-323596403/", icon: "linkedin"  },
];

// ── Proyectos de software ────────────────────────────────────
// Para agregar un proyecto: copiar uno de los objetos de abajo y editarlo.
export const projects = [
  {
    id: 1,
    name: "ZinclasPrisma",
    category: "software",
    date:    "Abril 2026 - Octubre 2026",
    dateEng: "April 2026 - October 2026",
    role:    "Frontend",
    roleEng: "Frontend Developer",
    description:
      "Participación en el desarrollo frontend de “Zinclas”, trabajando inicialmente en la versión escolar del proyecto y actualmente colaborando en una adaptación orientada a la empresa RotarSA. Desarrollo de interfaces y componentes reutilizables utilizando .NET MAUI Blazor.",
    descriptionEng:
      "Involved in the frontend development of “Zinclas”, initially contributing to the educational version of the project and currently collaborating on an enterprise-tailored adaptation for RotarSA. Built interactive interfaces and reusable UI components using .NET MAUI Blazor.",
    technologies: [".NET", "Blazor Hybrid", "Razor", "HTML", "CSS"],
    image: null,           // Reemplazar con ruta: "/assets/images/zinclas.png"
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: 2,
    name: "Pick-Up Chacabuco",
    category: "software",
    date:    "Mayo 2026 - Noviembre 2026",
    dateEng: "May 2026 - November 2026",
    role:    "Frontend",
    roleEng: "Frontend",
    description:
      "Pick Up Chacabuco es una aplicacion web diseñada para digitalizar, optimizar y agilizar el funcionamiento del buffet y comedor institucional de la institucion secundaria E.E.S.T N°6 Chacabuco - Moron",
    descriptionEng:
      "Pick Up Chacabuco is a web application designed to digitalize, streamline, and optimize the operations of the institutional buffet and dining hall at technical high school E.E.S.T N°6 Chacabuco - Morón.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "ASP.NET"],
    image: null,           // Reemplazar con ruta: "/assets/images/pickup-chacabuco.png"
    links: {
      github: "",          // Poner URL cuando esté disponible
      demo: "",
    },
  },
  {
    id: 3,
    name: "MNTS Control de Gastos",
    category: "software",
    date:    "Diciembre 2025 - Noviembre 2026",
    dateEng: "December 2025 - November 2026",
    role:    "Desarrollo independiente (UX/UI + Frontend + Backend)",
    roleEng: "Independent development (UX/UI + Frontend + Backend)",
    description:
      "MNTS es una app mobile diseñada para el control de gastos e ingresos personales. Permitiendo el acceso a Categorías personalizables, resúmenes mensuales con gráficos y exportación a Excel.",
    descriptionEng:
      "MNTS is a mobile application engineered for personal expense and income management. Features customizable spending categories, interactive monthly graphic summaries, and Excel report export.",
    technologies: [".NET", "Blazor Hybrid", "Razor", "SQLite", "ApexCharts"],
    image: null,           // Reemplazar con ruta: "/assets/images/mnts.png"
    links: {
      github: "",
      demo: "",
    },
  },
  {
    id: 4,
    name: "G-NAND-Monitoring",
    category: "software",
    date:    "Agosto 2026",
    dateEng: "August 2026",
    role:    "Desarrollo independiente (UX/UI + Frontend + Backend)",
    roleEng: "Independent development (UX/UI + Frontend + Backend)",
    description:
      "Herramienta de seguridad para Windows que intercepta comandos de consola antes de que se ejecuten. Los pausa, analiza su nivel de riesgo y permite que el usuario decida si desea autorizarlos, agregarlos a una lista blanca o bloquearlos.",
    descriptionEng:
      "Windows security utility that intercepts console commands prior to execution. It pauses commands, evaluates their potential threat level, and empowers the user to authorize, whitelist, or block them.",
    technologies: [".NET", "C#"],
    image: null,           // Reemplazar con ruta: "/assets/images/gnand.png"
    links: {
      github: "",
      demo: "",
    },
  },
];

// ── Videojuegos (sección J.Nara) ─────────────────────────────
// Para agregar un juego: copiar el objeto de abajo y editarlo.
export const videogames = [
  {
    id: 1,
    name: "Dodge Box",
    category: "videogame",
    date:    "Julio 2026",
    dateEng: "July 2026",
    role:    "Desarrollo independiente e individual",
    roleEng: "Independent solo development",
    description:
      "Dodge Box es un juego de arena minimalista y de ritmo rápido en el que el jugador debe esquivar proyectiles y sobrevivir dentro de un único cuadrado mientras las balas se acercan desde todas las direcciones",
    descriptionEng:
      "Dodge Box is a minimalist, fast-paced arena game where the player must dodge projectiles and survive inside a single square as bullets close in from all directions.",
    technologies: ["GDScript", "Godot", "Piskel"],
    image: "/DodgeBox.png", // Imagen real añadida por el usuario
    links: {
      itch: "https://jota-naranjo.itch.io/dodge-box",
    },
  },
];

/** Identidad J.Nara */
export const jnaraInfo = {
  alias: "J.Nara",
  logo: "/J.Nara.png",     // Logotipo oficial en imagen añadido por el usuario
  description:
    "Desarrollo y publico videojuegos de manera independiente bajo el nombre de J.Nara. Enfocándome en crear experiencias interactivas, explorar nuevas ideas y combinar programación y creatividad para dar vida a proyectos originales.",
  descriptionEng:
    "I develop and publish video games independently under the name J.Nara. Focused on creating interactive experiences, exploring new ideas, and combining programming and creativity to bring original projects to life.",
};

// ── Habilidades ──────────────────────────────────────────────
// Para agregar habilidades: añadir strings a los arrays correspondientes.
export const skills = {
  technical: {
    languages:  ["C#", "Python", "PHP", "HTML", "CSS", "JavaScript", "TypeScript", "GDScript", "SQL"],
    frameworks: ["React", ".NET", "MAUI Blazor"],
    design:     ["Figma", "Canva", "Piskel", "Krita"],
    tools:      ["GitHub", "Git", "Manejo de IAs"],
    platforms:  ["VSCode", "VisualStudio", "Godot"],
  },
  personal: {
    traits: [
      "Trabajo en equipo",
      "Estructurado",
      "Con capacidad e iniciativa de aprender",
      "Adaptativo",
    ],
    spokenLanguages: [
      { language: "Español", level: "Nativo"      },
      { language: "Inglés",  level: "Intermedio"  },
    ],
  },
};
