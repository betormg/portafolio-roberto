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

  frase: "Aprendo construyendo: mi primer sistema nació en la caja de un resto bar.",

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

/*
  Árbol de habilidades.
  Regla: solo entra algo que ya usé al menos una vez en algo concreto.
  - "base": lo hago sin ayuda y lo puedo explicar en una entrevista.
  - "crecimiento": lo usé en un proyecto o curso real, pero todavía lo estoy aprendiendo.
  Dentro de cada rama, las de base van primero (cerca del tronco) y las de crecimiento al final (las puntas).
  "enlace" apunta a un proyecto o certificado de esta misma página.
*/
export const arbol = {
  raices: ["Bachiller técnico en informática", "Universidad Autónoma de la Asunción"],
  ramas: [
    {
      nombre: "Web",
      hojas: [
        { nombre: "HTML5", estado: "base", evidencia: "Mi CV y la web de Lo de Carmi" },
        { nombre: "CSS", estado: "base", evidencia: "Mi CV y la web de Lo de Carmi" },
        { nombre: "JavaScript", estado: "crecimiento", evidencia: "El sistema de pedidos de Lo de Carmi", enlace: "#proyecto-lo-de-carmi" },
        { nombre: "Astro y Tailwind", estado: "crecimiento", evidencia: "Este portafolio" },
        { nombre: "GSAP", estado: "crecimiento", evidencia: "Este portafolio: el árbol que estás viendo" },
      ],
    },
    {
      nombre: "Datos",
      hojas: [
        { nombre: "SQL", estado: "base", evidencia: "Mi CV y los trabajos prácticos de bases de datos de la facultad" },
        { nombre: "Bases de datos y modelado", estado: "base", evidencia: "Trabajo práctico de la facultad: modelo en tercera forma normal" },
        { nombre: "Microsoft Access", estado: "crecimiento", evidencia: "Trabajo práctico de la facultad: armé las tablas y las relaciones" },
        { nombre: "PostgreSQL con Supabase", estado: "crecimiento", evidencia: "El sistema de pedidos de Lo de Carmi", enlace: "#proyecto-lo-de-carmi" },
      ],
    },
    {
      nombre: "Soporte e infraestructura",
      hojas: [
        { nombre: "Soporte técnico", estado: "base", evidencia: "Bachiller técnico en informática" },
        { nombre: "Hardware y mantenimiento de PC", estado: "base", evidencia: "Bachiller técnico en informática" },
        { nombre: "Sistemas operativos", estado: "base", evidencia: "Bachiller técnico en informática" },
        { nombre: "Redes", estado: "crecimiento", evidencia: "Cisco Networking Academy, Networking Basics", enlace: "#certificado-cisco" },
        { nombre: "Ciberseguridad", estado: "crecimiento", evidencia: "IBM SkillsBuild, Cybersecurity Fundamentals", enlace: "#certificado-ciberseguridad" },
      ],
    },
    {
      nombre: "Herramientas",
      hojas: [
        { nombre: "Microsoft Office / Excel", estado: "crecimiento", evidencia: "Mi CV" },
        { nombre: "Git y GitHub", estado: "crecimiento", evidencia: "El sistema de pedidos de Lo de Carmi", enlace: "#proyecto-lo-de-carmi" },
        { nombre: "Vercel", estado: "crecimiento", evidencia: "El sistema de pedidos de Lo de Carmi, publicado", enlace: "#proyecto-lo-de-carmi" },
        { nombre: "Desarrollo con IA", estado: "crecimiento", evidencia: "Curso de IBM y la caja de Lo de Carmi hecha con Claude Code", enlace: "#certificado-ia" },
      ],
    },
  ],
};

export const proyectos = [
  {
    id: "proyecto-lo-de-carmi",
    titulo: "Sistema de pedidos de Lo de Carmi Resto Bar",
    problema:
      "El local necesitaba tomar pedidos, cobrar y ver las ventas del día desde una compu o un celular, sin impresora.",
    queHace: "Caja digital para tomar pedidos, controlar el stock del día y saber qué se vende.",
    funciones: [
      "Login",
      "Menú",
      "Stock del día",
      "Caja con ticket digital compartible por WhatsApp",
      "Pedidos del día",
      "Reportes",
    ],
    tecnologias: ["JavaScript", "Vite", "Supabase", "PostgreSQL con seguridad por filas", "Vercel"],
    nota: "No tiene demo pública porque requiere inicio de sesión.",
    // Capturas: [{ src: "/capturas/caja.webp", alt: "...", ancho: 1280, alto: 800 }], siempre con datos de prueba.
    capturas: [], // TODO: capturas en WebP con datos de prueba, en /public/capturas
    estado: "Versión 1 terminada",
    link: "", // TODO: link del repositorio (hoy es privado)
    grupal: false,

    // Modelo de datos real de la base en Supabase (se dibuja en el marco del proyecto).
    modelo: {
      tablas: [
        {
          nombre: "menu_items",
          campos: [
            { nombre: "id", clave: "PK" },
            { nombre: "name" },
            { nombre: "category" },
            { nombre: "price" },
            { nombre: "active" },
          ],
        },
        {
          nombre: "daily_stock",
          campos: [
            { nombre: "stock_date", clave: "PK" },
            { nombre: "item_id", clave: "FK", apunta: "menu_items" },
            { nombre: "qty_initial" },
            { nombre: "qty_sold" },
          ],
        },
        {
          nombre: "order_items",
          campos: [
            { nombre: "id", clave: "PK" },
            { nombre: "order_id", clave: "FK", apunta: "orders" },
            { nombre: "item_id", clave: "FK", apunta: "menu_items" },
            { nombre: "qty" },
            { nombre: "unit_price" },
          ],
        },
        {
          nombre: "orders",
          campos: [
            { nombre: "id", clave: "PK" },
            { nombre: "ticket_no" },
            { nombre: "status" },
            { nombre: "channel" },
            { nombre: "payment_method" },
            { nombre: "total" },
          ],
        },
      ],
      funciones: [
        { nombre: "create_order()", detalle: "Asigna el número de ticket, toma el precio de la base y descuenta stock." },
        { nombre: "cancel_order()", detalle: "Anula el pedido y devuelve el stock." },
        { nombre: "set_daily_stock()", detalle: "Carga las porciones del día." },
      ],
      seguridad: "RLS: solo usuarios autenticados",
      leyenda: "Las cuatro tablas de la base, con sus campos principales, y las funciones que usa la caja.",
    },
  },
  {
    // TODO: proyecto nuevo que reemplaza al del Complejo Santa Teresa. Completar cuando esté definido.
    id: "proyecto-2",
    enProceso: true,
    titulo: "Segundo proyecto",
    queHace: "Un proyecto de bases de datos que estoy preparando. Pronto va a estar acá.",
    estado: "En proceso",
  },
];

/*
  Trayectoria: experiencia y educación en una sola línea de tiempo, de lo más reciente
  a lo más antiguo. "actual: true" marca lo que sigue en curso.
*/
export const trayectoria = [
  {
    tipo: "Experiencia",
    lugar: "Voicenter S.A.",
    detalle: "Call center de Banco Continental",
    rol: "Atención al cliente",
    desde: "Abr. 2026",
    hasta: "May. 2026",
    ciudad: "Asunción",
    tareas: [
      "Atención y orientación a clientes",
      "Manejo de información y herramientas informáticas",
      "Comunicación efectiva y resolución de consultas",
      "Trabajo siguiendo procedimientos y protocolos establecidos",
    ],
  },
  {
    tipo: "Educación",
    lugar: "Universidad Autónoma de la Asunción",
    rol: "Ingeniería en Informática, énfasis en Sistemas",
    desde: "Feb. 2026",
    hasta: "Actualidad",
    ciudad: "Asunción",
    actual: true,
  },
  {
    tipo: "Educación",
    lugar: 'Colegio Nacional E.M.D. "San Martín"',
    rol: "Bachiller técnico en informática",
    desde: "Feb. 2023",
    hasta: "Oct. 2025",
    ciudad: "Asunción",
  },
  {
    tipo: "Experiencia",
    lugar: "Contraloría General de la República",
    rol: "Pasante",
    desde: "Dic. 2024",
    hasta: "Feb. 2025",
    tareas: [
      "Registro y control de bienes patrimoniales",
      "Manejo y organización de información",
      "Uso de herramientas informáticas para el registro de datos",
      "Trabajo siguiendo procedimientos establecidos",
    ],
  },
  // TODO: preguntar a Roberto si suma Lo de Carmi Resto Bar como experiencia propia (rol y fecha de inicio).
];

export const referencias = "Referencias disponibles a pedido";

// nivel: 1 básico, 2 avanzado, 3 nativo (se dibuja como tres indicadores).
export const idiomas = [
  { nombre: "Español", nivel: 3, etiqueta: "Nativo" },
  { nombre: "Inglés", nivel: 2, etiqueta: "Avanzado" },
  { nombre: "Portugués", nivel: 1, etiqueta: "Básico" },
];

export const certificados = [
  {
    id: "certificado-cisco",
    emisor: "Cisco Networking Academy",
    nombre: "Networking Basics",
    anio: 2026,
    tipo: "Certificado",
    tema: "Redes",
    verificacion: "", // TODO: link de verificación (Credly u otro), si existe
  },
  {
    id: "certificado-ciberseguridad",
    emisor: "IBM SkillsBuild",
    nombre: "Cybersecurity Fundamentals",
    anio: 2026,
    tipo: "Curso",
    tema: "Ciberseguridad",
    verificacion: "",
  },
  {
    id: "certificado-ia",
    emisor: "IBM SkillsBuild",
    nombre: "Getting Started with Generative AI",
    anio: 2026,
    tipo: "Curso",
    tema: "IA generativa",
    verificacion: "",
  },
];

export const contacto = {
  email: "robertormgodoy@gmail.com",
  telefono: "+595 994 122 691",
  whatsapp: "https://wa.me/595994122691",
  github: "https://github.com/betormg",
  linkedin: "https://www.linkedin.com/in/roberto-mendoza-7092863a2",
};

export const meta = {
  titulo: "Roberto Mendoza · Ingeniería Informática",
  descripcion:
    "Portafolio de Roberto Mendoza, estudiante de Ingeniería Informática en Asunción, Paraguay: habilidades, proyectos y trayectoria.",
};
