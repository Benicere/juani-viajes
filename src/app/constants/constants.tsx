export const company = {
  id: "juani-viajes",
  name: "Juani Viajes",
  adress: "Av. Corrientes 1234",
  city: "CABA",
  telephone: "11-1234-5678",
  email: "contacto@juaniviajes.com",
  instagram: "juani.viajes",
  facebook: "juaniviajes",
  whatsapp: "5491112345678",
  googlemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713456789!2d-58.3833!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjMnMDAuMCJX!5e0!3m2!1ses!2sar!4v1234567890",
  openDays: [
    { day: "Lunes", hours: ["9:00 a 18:00hs"] },
    { day: "Martes", hours: ["9:00 a 18:00hs"] },
    { day: "Miércoles", hours: ["9:00 a 18:00hs"] },
    { day: "Jueves", hours: ["9:00 a 18:00hs"] },
    { day: "Viernes", hours: ["9:00 a 18:00hs"] },
    { day: "Sábado", hours: ["9:00 a 13:00hs"] },
    { day: "Domingo", hours: ["Cerrado"] },
  ],
  footer: "Experiencias únicas alrededor del mundo, diseñadas para crear recuerdos inolvidables.",
  description: "Somos una agencia de viajes especializada en crear experiencias únicas y personalizadas. Con años de experiencia, ofrecemos destinos increíbles, paquetes todo incluido y atención personalizada para que cada viaje sea inolvidable.",
  highlights: [
    "Más de 10 años de experiencia",
    "Agencia certificada y confiable",
    "Los mejores destinos y precios",
    "Asesores especializados",
    "Viajes personalizados"
  ]
};

export const navigation = [
  { id: "0", title: "Inicio", url: "/" },
  { id: "1", title: "Destinos", url: "/galeria" },
  { id: "2", title: "Programas", url: "/programas" },
  { id: "3", title: "Nosotros", url: "/nosotros" },
  { id: "4", title: "Contacto", url: "/contacto" },
];

export const hero = {
  title: "Descubrí el mundo, viví experiencias únicas",
  subtitle: "Especialistas en destinos increíbles y viajes personalizados. Contactanos y diseñamos juntos tu próxima aventura.",
  primaryCta: { label: "Ver destinos", href: "/galeria" },
  secondaryCta: { label: "Consultar", href: `https://wa.me/${company.whatsapp}` },
  styles: [
    "Europa",
    "Asia", 
    "América",
    "Caribe",
    "Destinos Exóticos",
    "Aventura",
    "Relax",
    "Cultura"
  ],
  featuredImage: {
    src: "/assets/hero/hero-image.webp",
    alt: "Destino de viaje destacado"
  }
};

export const gallery = {
  title: "Galería de Destinos",
  subtitle: "Selección de nuestros destinos más populares",
  // Las imágenes se cargan dinámicamente desde la carpeta public/galeria/
  // Nomenclatura: galeria-1.webp, galeria-2.webp, galeria-3.webp, etc.
};

export const metadataCompany = {
  metadataBase: "https://juani-viajes.com/",
  title: "Juani Viajes - Experiencias únicas alrededor del mundo",
  description: "Agencia de viajes especializada en destinos increíbles y experiencias personalizadas. Descubrí el mundo con nosotros.",
};
