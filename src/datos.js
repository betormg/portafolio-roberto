/*
  Todo el contenido del sitio vive acá. Los componentes solo lo muestran.
  Para cambiar un texto, editá este archivo; no hace falta tocar el diseño.
  Las líneas con TODO son datos que faltan: no se inventan, los completa Roberto.
*/

export const persona = {
  nombre: "Roberto",
  apellido: "Mendoza",
  titulo: "Estudiante de Ingeniería Informática",
  enfasis: "énfasis en Sistemas",
  ubicacion: "Asunción, Paraguay",
  resumen:
    "Estudiante de Ingeniería Informática con formación técnica en informática y conocimientos en desarrollo web, bases de datos, hardware y soporte técnico. Interés en desarrollarme profesionalmente en el área de tecnología, adquirir experiencia práctica y seguir fortaleciendo mis conocimientos mediante certificaciones y proyectos.",

  // TODO: Roberto elige una de estas tres frases (o escribe la suya) y la copia en `frase`.
  frase: "",
  frasesPropuestas: [
    "Aprendo construyendo: cada proyecto mío empieza con un problema real.",
    "Del hardware a la base de datos: me interesa entender cómo funciona cada capa.",
    "Estudio sistemas y construyo herramientas simples para problemas concretos.",
  ],

  // Opcional: ruta a una foto en /public (por ejemplo "/roberto.webp"). Si queda en null, no se muestra.
  foto: null,
};

// Datos de la ficha de la portada.
export const ficha = [
  { clave: "Carrera", valor: "Ingeniería en Informática" },
  { clave: "Universidad", valor: "Universidad Autónoma de la Asunción" },
  { clave: "Base", valor: "Bachiller técnico en informática" },
  { clave: "Idiomas", valor: "ES · EN · PT" },
];

export const secciones = [
  { id: "habilidades", nombre: "Habilidades" },
  { id: "proyectos", nombre: "Proyectos" },
  { id: "trayectoria", nombre: "Trayectoria" },
  { id: "certificados", nombre: "Certificados" },
  { id: "contacto", nombre: "Contacto" },
];

// Árbol de habilidades. estado: "base" (base sólida) o "crecimiento" (en crecimiento).
export const arbol = {
  raices: ["Bachiller técnico en informática", "Universidad Autónoma de la Asunción"],
  ramas: [
    {
      nombre: "Web",
      hojas: [
        { nombre: "HTML5", estado: "base" },
        { nombre: "CSS", estado: "base" },
        { nombre: "JavaScript", estado: "crecimiento" },
        { nombre: "Astro", estado: "crecimiento" },
        { nombre: "Tailwind", estado: "crecimiento" },
        { nombre: "GSAP", estado: "crecimiento" },
      ],
    },
    {
      nombre: "Datos",
      hojas: [
        { nombre: "SQL", estado: "base" },
        { nombre: "Bases de datos", estado: "base" },
        { nombre: "Microsoft Access", estado: "crecimiento" },
        { nombre: "PostgreSQL / Supabase", estado: "crecimiento" },
        { nombre: "Oracle", estado: "crecimiento" },
      ],
    },
    {
      nombre: "Soporte e infraestructura",
      hojas: [
        { nombre: "Soporte técnico", estado: "base" },
        { nombre: "Hardware y mantenimiento de PC", estado: "base" },
        { nombre: "Sistemas operativos", estado: "base" },
        { nombre: "Redes", estado: "crecimiento" },
        { nombre: "Ciberseguridad", estado: "crecimiento" },
      ],
    },
    {
      nombre: "Herramientas",
      hojas: [
        { nombre: "Microsoft Office / Excel", estado: "base" },
        { nombre: "Git y GitHub", estado: "crecimiento" },
        { nombre: "Vercel", estado: "crecimiento" },
        { nombre: "IA generativa", estado: "crecimiento" },
      ],
    },
  ],
};

export const proyectos = [
  {
    titulo: "Sistema de pedidos de Lo de Carmi Resto Bar",
    problema: "Caja digital para tomar pedidos, controlar el stock del día y saber qué se vende.",
    funciones: [
      "Login",
      "Menú",
      "Stock",
      "Caja con ticket digital compartible por WhatsApp",
      "Pedidos del día",
      "Reportes",
    ],
    tecnologias: ["JavaScript", "Vite", "Supabase (PostgreSQL con seguridad por filas)", "Vercel"],
    nota: "No tiene demo pública porque requiere inicio de sesión.",
    capturas: [], // TODO: capturas en WebP con datos de prueba, en /public/capturas
    estado: "", // TODO: "En pruebas" o "En uso"
    link: "", // TODO: link del repositorio (hoy es privado)
    grupal: false,
  },
  {
    titulo: "Gestión de Reservas y Servicios del Complejo Deportivo Santa Teresa",
    problema:
      "Base de datos en Access para la materia Introducción a los Sistemas de Gestión de Bases de Datos.",
    funciones: [
      "Clientes, canchas y horarios",
      "Reservas y servicios adicionales",
      "Pagos",
      "Modelo en tercera forma normal",
      "Consultas, formularios e informes",
    ],
    tecnologias: ["Microsoft Access", "SQL"],
    capturas: [], // TODO
    estado: "", // TODO: confirmar que está terminado
    link: "",
    grupal: true,
    rol: "", // TODO: qué parte hizo Roberto
  },
];

export const experiencia = [
  {
    lugar: "Contraloría General de la República",
    rol: "Pasante",
    periodo: "Dic. 2024 – Feb. 2025",
    tareas: [
      "Registro y control de bienes patrimoniales",
      "Manejo y organización de información",
      "Uso de herramientas informáticas para el registro de datos",
      "Trabajo siguiendo procedimientos establecidos",
    ],
  },
  {
    lugar: "Voicenter S.A. · call center de Banco Continental",
    rol: "Atención al cliente",
    periodo: "Abr. 2026 – May. 2026",
    ciudad: "Asunción",
    tareas: [
      "Atención y orientación a clientes",
      "Manejo de información y herramientas informáticas",
      "Comunicación efectiva y resolución de consultas",
      "Trabajo siguiendo protocolos",
    ],
  },
  // TODO: preguntar a Roberto si suma Lo de Carmi Resto Bar como experiencia propia (rol y fecha de inicio).
];

export const educacion = [
  {
    lugar: 'Colegio Nacional E.M.D. "San Martín"',
    titulo: "Bachiller técnico en informática",
    periodo: "2023 – 2025",
    ciudad: "Asunción",
  },
  {
    lugar: "Universidad Autónoma de la Asunción",
    titulo: "Ingeniería en Informática, énfasis en Sistemas",
    periodo: "Desde feb. 2026",
    ciudad: "Asunción",
  },
];

// nivel: 1 básico, 2 avanzado, 3 nativo (se dibuja como tres indicadores).
export const idiomas = [
  { nombre: "Español", nivel: 3, etiqueta: "Nativo" },
  { nombre: "Inglés", nivel: 2, etiqueta: "Avanzado" },
  { nombre: "Portugués", nivel: 1, etiqueta: "Básico" },
];

export const certificados = [
  { emisor: "Cisco Networking Academy", nombre: "Networking Basics", anio: 2026, tipo: "Certificado", verificacion: "" },
  { emisor: "IBM SkillsBuild", nombre: "Cybersecurity Fundamentals", anio: 2026, tipo: "Curso", verificacion: "" },
  { emisor: "IBM SkillsBuild", nombre: "Getting Started with Generative AI", anio: 2026, tipo: "Curso", verificacion: "" },
];

export const contacto = {
  email: "robertormgodoy@gmail.com", // TODO: confirmar si se muestra en el sitio
  github: "", // TODO
  linkedin: "", // TODO
  whatsapp: "", // TODO
  referencias: "Referencias disponibles a pedido",
};

export const meta = {
  titulo: "Roberto Mendoza · Ingeniería Informática",
  descripcion:
    "Portafolio de Roberto Mendoza, estudiante de Ingeniería Informática en Asunción, Paraguay: habilidades, proyectos y trayectoria.",
};
