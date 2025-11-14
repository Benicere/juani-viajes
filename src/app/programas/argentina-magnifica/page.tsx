"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ArgentinaMagnificaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[color:var(--color-background)] text-neutral-800 min-h-screen">
        <section className="py-10 sm:py-12 md:py-16">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1600px]">
            <div className="flex flex-col md:flex-row bg-white shadow-xl overflow-hidden">
              {/* IZQUIERDA: primera mitad (50%) */}
              <div className="md:w-1/2 border-r border-neutral-200">
                {/* Grid layout: foto izquierda grande, título/mapa derecha, imágenes abajo */}
                <div 
                  className="grid grid-cols-1 md:grid-cols-[65%,35%] grid-rows-[auto,auto,auto] md:grid-rows-[auto,1fr,auto] gap-0 h-full"
                >
                  {/* 1. Imagen principal (arriba izquierda, ocupa 2 filas - más grande) */}
                  <div className="relative md:row-span-2 overflow-hidden min-h-[300px] md:min-h-[600px]">
                    <Image
                      src="/assets/programa-1/hero-programa.webp"
                      alt="Argentina Magnífica - Buenos Aires"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 35vw"
                    />
                  </div>

                  {/* 2. Título y duración (arriba derecha) */}
                  <div className="px-4 sm:px-6 pt-4 sm:pt-6 bg-white border-b border-neutral-200 flex-shrink-0">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-1">
                      Programa 01
                    </p>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-tight">
                      ARGENTINA <span className="italic font-normal">magnífica</span>
                    </h1>
                    <p className="text-sm font-semibold text-neutral-700">
                      11 Días / 9 Noches
                    </p>
                  </div>

                  {/* 3. Mapa del recorrido (medio derecha - vertical) */}
                  <div className="px-4 sm:px-6 py-4 bg-white border-b border-neutral-200 flex flex-col">
                    <p className="text-xs font-semibold text-neutral-700 mb-2">Mapa del recorrido</p>
                    <div className="relative flex-1 w-full overflow-hidden bg-transparent min-h-[200px] md:min-h-[400px]">
                      <Image
                        src="/assets/programa-1/mapa-1.webp"
                        alt="Mapa del recorrido"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 15vw"
                      />
                    </div>
                  </div>

                  {/* 4. Mini galería Loi Suites (abajo de todo, ocupa 2 columnas) */}
                  <div className="md:col-span-2 grid grid-cols-3 gap-1 p-2 bg-neutral-100 border-t border-neutral-200 flex-shrink-0 justify-center items-center">
                    <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="/assets/programa-1/triple-1.webp"
                        alt="Hotel Loi Suites 1"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 33vw, 16vw"
                      />
                    </div>
                    <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="/assets/programa-1/triple-2.webp"
                        alt="Hotel Loi Suites 2"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 33vw, 16vw"
                      />
                    </div>
                    <div className="relative h-24 w-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="/assets/programa-1/triple-3.webp"
                        alt="Hotel Loi Suites 3"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 33vw, 16vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* DERECHA: segunda mitad (50%) */}
              <div className="md:w-1/2 bg-white flex flex-col">
                <div className="p-6 sm:p-8 md:pr-0 flex-1">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-neutral-300 pb-2">
                    Itinerario detallado
                  </h2>
                  
                  {/* Layout: itinerario izquierda, foto + banderines derecha */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Columna izquierda: Itinerario en una sola columna */}
                    <div className="flex-1 space-y-1 text-[10px] sm:text-xs leading-tight break-words min-w-0">
                      <div>
                        <p className="font-semibold">Día 1 | Europa – Buenos Aires</p>
                        <p>Salida desde su país de origen con destino Buenos Aires. Noche a bordo.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 2 | Buenos Aires – Iguazú</p>
                        <p>
                          Arribo al Aeropuerto Internacional de Ezeiza. Nuestro personal lo estará
                          esperando para asistirle en el cambio de terminal aérea y entregar la
                          documentación del viaje. A continuación, embarque en el vuelo que lo llevará
                          a Puerto Iguazú. Recepción y traslado regular al hotel seleccionado.
                          Alojamiento.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 3 | Iguazú</p>
                        <p>
                          Excursión de día completo al Parque Nacional Iguazú. Visita a las Cataratas
                          Argentinas, escenario impactante de una de las Siete Maravillas Naturales del
                          Mundo. Durante un recorrido inolvidable, le recomendamos contratar, de manera
                          opcional, &quot;La Gran Aventura&quot;: una combinación entre un paseo náutico en botes
                          zodiac y en vehículos descubiertos de doble tracción a través de la selva.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 4 | Iguazú</p>
                        <p>
                          Excursión Parque Nacional Do Iguaçu, donde podrá contemplar una vista
                          panorámica de las cataratas.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 5 | Iguazú – Buenos Aires – El Calafate</p>
                        <p>
                          Traslado en servicio regular al aeropuerto para embarcar en el vuelo con
                          destino a El Calafate. Recepción y traslado regular al hotel seleccionado.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 6 | El Calafate</p>
                        <p>
                          Excursión de día completo al Parque Nacional Los Glaciares, donde recorrerá
                          las pasarelas frente al majestuoso Glaciar Perito Moreno, incluyendo una
                          navegación opcional &quot;Safari Náutico&quot; frente a sus imponentes paredes de hielo.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 7 | El Calafate</p>
                        <p>
                          Día de navegación en el Gran Lago Argentino en búsqueda de los glaciares
                          patagónicos. Recomendamos contratar como componentes de interés turístico las
                          opciones &quot;Todo Glaciares&quot; o &quot;Ríos de Hielo&quot;. Estas navegaciones ofrecen vistas
                          inigualables recorriendo los maravillosos glaciares Upsala y Spegazzini.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 8 | El Calafate – Buenos Aires</p>
                        <p>
                          Traslado al aeropuerto para embarcar en el vuelo de regreso a Buenos Aires.
                          Recepción y traslado regular al hotel seleccionado. Alojamiento.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 9 | Buenos Aires</p>
                        <p>
                          Recorrido por la Ciudad de Buenos Aires para conocer los puntos más
                          representativos: el Congreso Nacional, la Catedral Metropolitana, la Casa de
                          Gobierno y el Cabildo. La visita continúa por los barrios tradicionales de San
                          Telmo, La Boca y Recoleta, finalizando en Palermo, una de las zonas más
                          elegantes y activas de la ciudad. Por la noche, cena-show con bebidas incluidas
                          en el Viejo Almacén (o similar) para vivir la experiencia del tango porteño.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 10 | Buenos Aires libre</p>
                        <p>
                          Se sugiere realizar una excursión opcional al Delta del Tigre, recorriendo el
                          Puerto de Frutos y navegando por el Río de la Plata.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Día 11 | Buenos Aires – Europa</p>
                        <p>
                          Traslado privado al aeropuerto para embarcar en el vuelo Internacional que lo
                          llevará de regreso.
                        </p>
                      </div>
                    </div>

                    {/* Columna derecha: Foto horizontal + Banderines */}
                    <div className="w-full md:w-[400px] lg:w-[450px] flex-shrink-0 space-y-4 flex flex-col">
                      {/* Foto horizontal (alineada con días 1 y 2) */}
                      <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                        <Image
                          src="/assets/programas/programa-3.webp"
                          alt="Cataratas de Iguazú"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 18vw"
                        />
                      </div>

                      {/* Banderines de colores (alineados con días 3-9) */}
                      <div>
                        {/* Iguazú */}
                        <div
                          className="text-white px-5 py-3 flex items-center gap-4"
                          style={{ backgroundColor: "#7DBE57" }}
                        >
                          {/* Icono SVG centrado verticalmente */}
                          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 260 340" className="w-full h-full">
                              <g fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" transform="translate(40 70)">
                                <path d="M30 52c0-20 16-36 36-36h24c18 0 28 8 36 18 2 2 2 6-1 7-9 4-22 7-35 7H93"/>
                                <path d="M66 28c8 0 14 6 14 14s-6 14-14 14-14-6-14-14 6-14 14-14z"/>
                                <path d="M30 52c0 30 24 54 54 54h18"/>
                                <path d="M12 82c-6 8-8 16-8 26"/>
                              </g>
                            </svg>
                          </div>
                          {/* Contenido de texto */}
                          <div className="flex-1 space-y-0.5">
                            <p className="uppercase tracking-[0.15em] opacity-80 text-[11px]">Iguazú</p>
                            <p className="text-sm font-semibold">3 noches</p>
                            <p className="text-[11px] opacity-90">
                              Parque Nacional Iguazú, Argentina y Brasil
                            </p>
                            <div className="space-y-0.5 text-[11px] leading-tight">
                              <p><span className="font-semibold">Turista:</span> Yvy Hotel de Selva / Hotel Sol Cataratas</p>
                              <p><span className="font-semibold">Turista Sup.:</span> Hotel Merit Iguazú / Hotel El Libertador</p>
                              <p><span className="font-semibold">Primera:</span> Hotel Amerian Portal del Iguazú / Hotel Saint George</p>
                              <p><span className="font-semibold">Lujo:</span> Hotel Loi Suites Iguazú / Gran Meliá Iguazú / Belmont Hotel</p>
                            </div>
                          </div>
                        </div>

                        {/* El Calafate */}
                        <div
                          className="text-white px-5 py-3 flex items-center gap-4"
                          style={{ backgroundColor: "#23BCC9" }}
                        >
                          {/* Icono SVG centrado verticalmente */}
                          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 260 340" className="w-full h-full">
                              <g fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" transform="translate(30 80)">
                                <path d="M10 110l52-78 18 26 18-26 52 78"/>
                                <path d="M44 84l18-26 12 18 12-18 18 26"/>
                                <path d="M10 110h180"/>
                              </g>
                            </svg>
                          </div>
                          {/* Contenido de texto */}
                          <div className="flex-1 space-y-0.5">
                            <p className="uppercase tracking-[0.15em] opacity-80 text-[11px]">
                              El Calafate
                            </p>
                            <p className="text-sm font-semibold">3 noches</p>
                            <p className="text-[11px] opacity-90">
                              Pasarelas del Glaciar Perito Moreno · Navegación Lago Argentino
                            </p>
                            <div className="space-y-0.5 text-[11px] leading-tight">
                              <p><span className="font-semibold">Turista:</span> Hotel La Cantera / Hotel Sierra Nevada</p>
                              <p><span className="font-semibold">Turista Sup.:</span> Hotel Kosten Aike / Rincon del Calafate / Parque Hotel</p>
                              <p><span className="font-semibold">Primera:</span> Hotel Xelena / Hotel Alto Calafate / Hotel Lagos del Calafate</p>
                              <p><span className="font-semibold">Lujo:</span> Hotel Posada Los Alamos / Xelena Hotel / Los Sauces / Imago Spa / Kau Yatún / Mirador del Lago / Patagonia Spirit / Estancia Cristina</p>
                            </div>
                          </div>
                        </div>

                        {/* Buenos Aires */}
                        <div
                          className="text-white px-5 py-3 flex items-center gap-4"
                          style={{ backgroundColor: "#4B88DA" }}
                        >
                          {/* Icono SVG centrado verticalmente */}
                          <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 260 340" className="w-full h-full">
                              <g fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" transform="translate(110 70)">
                                <path d="M20 0L0 40v120h40V40L20 0z"/>
                                <path d="M0 160h40"/>
                              </g>
                              <g fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" transform="translate(30 210)">
                                <path d="M0 10c20-10 40-10 60 0"/>
                                <circle cx="60" cy="10" r="1" fill="#FFFFFF"/>
                              </g>
                              <g fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" transform="translate(170 210) scale(-1 1)">
                                <path d="M0 10c20-10 40-10 60 0"/>
                                <circle cx="60" cy="10" r="1" fill="#FFFFFF"/>
                              </g>
                            </svg>
                          </div>
                          {/* Contenido de texto */}
                          <div className="flex-1 space-y-0.5">
                            <p className="uppercase tracking-[0.15em] opacity-80 text-[11px]">
                              Buenos Aires
                            </p>
                            <p className="text-sm font-semibold">3 noches</p>
                            <p className="text-[11px] opacity-90">
                              Recorrido por la ciudad · Cena Tango Show
                            </p>
                            <div className="space-y-0.5 text-[11px] leading-tight">
                              <p><span className="font-semibold">Turista:</span> Hotel Dazzler Obelisco / Hotel Rochester M / Hotel Principado Palace</p>
                              <p><span className="font-semibold">Turista Sup.:</span> Hotel Novotel / Dazzler Recoleta / Kenton Palace / HTL City Baires</p>
                              <p><span className="font-semibold">Primera:</span> NH Collection Lancaster / NH Latino / NH Jousten / NH City / Panamericano / Savoy / Intersur Recoleta</p>
                              <p><span className="font-semibold">Lujo:</span> Sofitel Recoleta / Meliá Buenos Aires / Alvear Art / Alvear Palace / Park Hyatt / Faena Hotel</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Grid 3x2: SVG arriba, texto abajo */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3 mt-6 md:mt-14 mr-0 md:mr-6">
                        {/* Columna 1: Destinos */}
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="mb-2">
                            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#011a66" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                              <path d="M4 22 L22 22 L12 6 L16 6 L28 22 L44 22 C45 22 46 23 46 24 C46 25 45 26 44 26 L28 26 L16 42 L12 42 L22 26 L4 26 Z"/>
                            </svg>
                          </div>
                          <div className="text-[10px] text-neutral-700 leading-tight">
                            <p className="font-semibold uppercase mb-1">DESTINOS</p>
                            <p className="font-semibold uppercase">IGUAZÚ</p>
                            <p className="font-semibold uppercase">EL CALAFATE</p>
                            <p className="font-semibold uppercase">BUENOS AIRES</p>
                          </div>
                        </div>

                        {/* Columna 2: Servicios opcionales */}
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="mb-2">
                            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#011a66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="8" y="14" width="32" height="26" rx="3"/>
                              <rect x="18" y="8" width="12" height="6" rx="2"/>
                              <line x1="20" y1="14" x2="20" y2="40"/>
                              <line x1="28" y1="14" x2="28" y2="40"/>
                            </svg>
                          </div>
                          <div className="text-[10px] text-neutral-700 leading-tight">
                            <p>Si usted lo desea podemos incluir seguro médico y cancelación de viaje, billetes aéreos nacionales e internacionales.</p>
                          </div>
                        </div>

                        {/* Columna 3: Traslados */}
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="mb-2">
                            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#011a66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="4" y="18" width="40" height="14" rx="3"/>
                              <rect x="10" y="14" width="12" height="4" rx="1"/>
                              <rect x="26" y="14" width="12" height="4" rx="1"/>
                              <circle cx="14" cy="34" r="4"/>
                              <circle cx="34" cy="34" r="4"/>
                            </svg>
                          </div>
                          <div className="text-[10px] text-neutral-700 leading-tight">
                            <p>En los destinos: Traslados desde el aeropuerto hacia el hotel seleccionado y desde el hotel al aeropuerto, en cada ciudad.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


