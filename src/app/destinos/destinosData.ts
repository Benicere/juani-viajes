export type Trip = { title: string; description: string; image: string };
export type Destino = {
  id: string;
  title: string;
  image: string;
  trips: Trip[];
};

export const DESTINOS: Destino[] = [
  {
    id: "buenos-aires",
    title: "Buenos Aires",
    image:
      "https://images.unsplash.com/photo-1509821441501-434e1918c451?auto=format&fit=crop&w=1600&q=80",
    trips: [
      {
        title: "City tour clásico",
        description: "La Boca, San Telmo, Recoleta y Palermo en un día completo.",
        image:
          "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Show de tango",
        description: "Cena y tango en los mejores salones porteños.",
        image:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Delta del Tigre",
        description: "Navegación y paseo de día completo por islas y ríos.",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "calafate",
    title: "Calafate",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    trips: [
      {
        title: "Perito Moreno",
        description: "Pasarelas y safari náutico frente al glaciar.",
        image:
          "https://images.unsplash.com/photo-1500534311209-94d7f0287c1c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Ríos de Hielo",
        description: "Navegación con vista a glaciares Upsala y Spegazzini.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Estancia patagónica",
        description: "Día de campo con cabalgatas y gastronomía local.",
        image:
          "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "iguazu",
    title: "Iguazú",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80",
    trips: [
      {
        title: "Cataratas argentinas",
        description: "Garganta del Diablo y circuitos superior e inferior.",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cataratas brasileñas",
        description: "Vista panorámica completa desde el lado brasilero.",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "La Gran Aventura",
        description: "Safari 4x4 y navegación bajo los saltos.",
        image:
          "https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "ushuaia",
    title: "Ushuaia",
    image:
      "https://images.unsplash.com/photo-1500534311224-20285816c0fb?auto=format&fit=crop&w=1600&q=80",
    trips: [
      {
        title: "Parque Nacional",
        description: "Senderos y Tren del Fin del Mundo.",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Canal Beagle",
        description: "Navegación con avistaje de fauna y faros.",
        image:
          "https://images.unsplash.com/photo-1500534311224-20285816c0fb?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Lagos Escondido y Fagnano",
        description: "Circuito de lagos y vistas cordilleranas.",
        image:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

