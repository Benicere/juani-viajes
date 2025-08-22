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
  subtitle: "Especialistas en fineline, blackwork y realismo. Reservá tu turno y diseñamos juntos tu próximo tattoo.",
  primaryCta: { label: "Ver trabajos", href: "/galeria" },
  secondaryCta: { label: "Reservar turno", href: "/contacto" },
  styles: [
    "Fineline",
    "Blackwork", 
    "Realismo",
    "Neo Traditional",
    "Minimalista",
    "Japonés",
    "Geométrico",
    "Acuarela"
  ],
  featuredImages: [
    {
      id: "featured-1",
      src: "https://images.unsplash.com/photo-1604027974421-805c6c99febf?q=80&w=1600&auto=format&fit=crop",
      alt: "Tatuaje fineline delicado"
    },
    {
      id: "featured-2", 
      src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
      alt: "Tatuaje blackwork bold"
    },
    {
      id: "featured-3",
      src: "https://images.unsplash.com/photo-1548588689-9d26f0dd3aa1?q=80&w=1600&auto=format&fit=crop", 
      alt: "Tatuaje realismo detallado"
    },
    {
      id: "featured-4",
      src: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1600&auto=format&fit=crop",
      alt: "Tatuaje minimalista elegante"
    }
  ]
};

export const gallery = {
  title: "Galería",
  subtitle: "Selección de proyectos recientes",
};

export const metadataCompany = {
  metadataBase: "https://tatuajes-web.vercel.app/",
  title: "Estudio de Tatuajes - Arte personalizado",
  description: "Tatuajes personalizados, fineline, blackwork y realismo. Reserva tu turno con artistas profesionales.",
};
