export const company = {
  id: "estudio-tatuajes",
  name: "Estudio de Tatuajes",
  adress: "Av. Corrientes 1234",
  city: "CABA",
  telephone: "11-1234-5678",
  email: "contacto@estudiotatuajes.com",
  instagram: "estudio.tatuajes",
  facebook: "estudiotatuajes",
  whatsapp: "5491112345678",
  googlemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713456789!2d-58.3833!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjMnMDAuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
  openDays: [
    { day: "Lunes", hours: ["10:00 a 20:00hs"] },
    { day: "Martes", hours: ["10:00 a 20:00hs"] },
    { day: "Miércoles", hours: ["10:00 a 20:00hs"] },
    { day: "Jueves", hours: ["10:00 a 20:00hs"] },
    { day: "Viernes", hours: ["10:00 a 20:00hs"] },
    { day: "Sábado", hours: ["10:00 a 18:00hs"] },
    { day: "Domingo", hours: ["Cerrado"] },
  ],
  footer: "Arte en la piel, hecho a medida con dedicación y pasión.",
  description: "Somos un estudio de tatuajes profesional con más de 10 años de experiencia, especializados en fineline, blackwork, realismo y piercings. Nuestro compromiso es crear arte único y personalizado en un ambiente seguro y profesional.",
  highlights: [
    "Más de 10 años de experiencia",
    "Estudio certificado y seguro",
    "Materiales de primera calidad",
    "Artistas especializados",
    "Diseños personalizados"
  ]
};

export const navigation = [
  { id: "0", title: "Inicio", url: "/" },
  { id: "1", title: "Galería", url: "/galeria" },
  { id: "2", title: "Servicios", url: "/servicios" },
  { id: "3", title: "Nosotros", url: "/nosotros" },
  { id: "4", title: "Contacto", url: "/contacto" },
];

export const hero = {
  title: "Arte en la piel, hecho a medida",
  subtitle: "Especialistas en fineline, blackwork y realismo. Contactanos y diseñamos juntos tu próximo tattoo.",
  primaryCta: { label: "Ver trabajos", href: "/galeria" },
  secondaryCta: { label: "Consultar", href: `https://wa.me/${company.whatsapp}` },
  styles: [
    "Fineline",
    "Blackwork", 
    "Realismo",
    "Neo Traditional",
    "Minimalista",
    "Japonés",
    "Geométrico",
    "Acuarela"
  ]
};

export const gallery = {
  title: "Galería",
  subtitle: "Selección de proyectos recientes",
  // Las imágenes se cargan dinámicamente desde la carpeta public/galeria/
  // Nomenclatura: galeria-1.webp, galeria-2.webp, galeria-3.webp, etc.
};

export const metadataCompany = {
  metadataBase: "https://tatuajes-web.vercel.app/",
  title: "Estudio de Tatuajes - Arte personalizado",
  description: "Tatuajes personalizados, fineline, blackwork y realismo. Reserva tu turno con artistas profesionales.",
};
