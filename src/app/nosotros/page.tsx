"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[color:var(--color-background)]">
        {/* Hero Section */}
        <section className="py-24 sm:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[color:var(--color-foreground)] leading-tight">
                  Turismo receptivo en Argentina,<br />
                  <span className="text-[color:var(--color-primary)]">con alma de anfitriones</span>
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-[color:var(--color-muted)] font-medium mb-8">
                  Más de 30 años diseñando viajes auténticos, responsables y a medida
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quienes Somos */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-block">
                  <span className="text-base sm:text-xl md:text-3xl font-semibold text-[color:var(--color-primary)] uppercase tracking-wider">
                    Desde 1990
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[color:var(--color-foreground)] leading-tight">
                  Somos De la Paz tur
                </h2>
                <div className="space-y-4 text-lg sm:text-xl text-[color:var(--color-muted)] leading-relaxed">
                  <p>
                    Desde 1990, <strong className="text-[color:var(--color-foreground)]">diseñamos experiencias únicas</strong> para quienes desean descubrir <strong className="text-[color:var(--color-foreground)]">la esencia de Argentina</strong>. Somos operadores receptivos con base en Buenos Aires y cobertura nacional.
                  </p>
                  <p>
                    Creamos itinerarios personalizados, con atención antes, durante y después del viaje. Conocemos cada rincón del país, <strong className="text-[color:var(--color-foreground)]">y lo compartimos con pasión</strong>.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Qué Hacemos - Servicios */}
        <section className="py-20 bg-[color:var(--color-background-secondary)]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[color:var(--color-foreground)]">
                ¿Qué hacemos?
              </h2>
              <p className="text-lg sm:text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto">
                Servicios integrales para hacer realidad tu viaje soñado
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                  title: "Diseño de itinerarios a medida",
                  description: "Creamos rutas personalizadas que se adaptan a tus intereses, tiempo y presupuesto, garantizando una experiencia única."
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: "Reservas de hoteles, excursiones y traslados",
                  description: "Gestionamos todos los detalles de tu viaje: alojamientos cuidadosamente seleccionados, excursiones auténticas y traslados seguros."
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Asistencia 24/7 en destino",
                  description: "Estamos disponibles durante todo tu viaje para resolver cualquier inconveniente y asegurar que todo transcurra perfectamente."
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Grupos, incentivos y viajes individuales",
                  description: "Especialistas en organizar viajes para grupos corporativos, incentivos empresariales y experiencias individuales personalizadas."
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Propuestas sostenibles y comunitarias",
                  description: "Promovemos experiencias que benefician a las comunidades locales y respetan el medio ambiente, generando un impacto positivo."
                },
                {
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Cobertura en todo el país",
                  description: "Conocemos Argentina de punta a punta. Desde la Patagonia hasta el Norte, diseñamos experiencias en cada rincón del país."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[color:var(--color-background)] p-8 rounded-xl border border-[color:var(--color-muted)]/10 hover:border-[color:var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-[color:var(--color-primary)] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[color:var(--color-foreground)]">
                    {service.title}
                  </h3>
                  <p className="text-[color:var(--color-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compromiso Sostenible */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[color:var(--color-foreground)]">
                  Compromiso Sostenible
                </h2>
                <p className="text-lg sm:text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto leading-relaxed">
                  Estamos dedicados a <strong className="text-[color:var(--color-foreground)]">promover un turismo</strong> que beneficie tanto a <strong className="text-[color:var(--color-foreground)]">los viajeros</strong> como a <strong className="text-[color:var(--color-foreground)]">las comunidades locales</strong>. Apoyamos prácticas sostenibles que <strong className="text-[color:var(--color-foreground)]">respetan el medio ambiente</strong> y <strong className="text-[color:var(--color-foreground)]">fomentan el desarrollo comunitario</strong>.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    title: "Proveedores con buenas prácticas ambientales y sociales",
                    description: "Trabajamos exclusivamente con proveedores que comparten nuestro compromiso con la sostenibilidad y el desarrollo responsable."
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    ),
                    title: "Experiencias locales y de bajo impacto",
                    description: "Diseñamos experiencias que conectan a los viajeros con las comunidades locales, minimizando el impacto ambiental y maximizando el beneficio social."
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ),
                    title: "Digitalización y reducción de papel",
                    description: "Implementamos procesos digitales que reducen significativamente el uso de papel, contribuyendo a la preservación del medio ambiente."
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                    title: "Hotelería con criterios de sostenibilidad",
                    description: "Seleccionamos alojamientos que implementan prácticas sostenibles, desde gestión de residuos hasta eficiencia energética."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 p-6 bg-[color:var(--color-background-secondary)] rounded-xl border border-[color:var(--color-muted)]/10"
                  >
                    <div className="flex-shrink-0 text-[color:var(--color-primary)]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[color:var(--color-foreground)]">
                        {item.title}
                      </h3>
                      <p className="text-[color:var(--color-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="py-20 bg-[color:var(--color-background-secondary)]">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              {/* Título e Imagen lado a lado */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
                {/* Texto */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[color:var(--color-foreground)]">
                    Conocé a Nuestros Especialistas
                  </h2>
                  <p className="text-lg sm:text-xl text-[color:var(--color-muted)] leading-relaxed">
                    Contamos con un equipo apasionado por los viajes y comprometido con brindar un servicio de excelencia. Ofrecemos asesoramiento integral a pasajeros individuales, grupos e incentivos, acompañándolos en cada etapa del proceso para hacer realidad el viaje que desean.
                  </p>
                  <p className="text-lg sm:text-xl text-[color:var(--color-muted)] leading-relaxed mt-4">
                    Nuestro trabajo se basa en la <strong className="text-[color:var(--color-foreground)]">atención personalizada</strong>, la <strong className="text-[color:var(--color-foreground)]">calidez humana</strong> y la <strong className="text-[color:var(--color-foreground)]">seguridad en cada destino</strong>, garantizando experiencias auténticas, cuidadas y memorables.
                  </p>
                </motion.div>

                {/* Imagen */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/assets/nosotros/nosotros-1.webp"
                    alt="Equipo De la Paz tur - Nuestros Especialistas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Asesores de Viajes",
                    description: "Especialistas con años de experiencia en diseño de itinerarios personalizados y atención al cliente de excelencia."
                  },
                  {
                    title: "Coordinadores de Destino",
                    description: "Profesionales locales que conocen cada rincón de Argentina y garantizan experiencias auténticas y seguras."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[color:var(--color-background)] p-8 rounded-xl border border-[color:var(--color-muted)]/10 shadow-sm"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-[color:var(--color-foreground)]">
                      {item.title}
                    </h3>
                    <p className="text-[color:var(--color-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[color:var(--color-foreground)]">
                ¿Estás soñando tu próximo viaje?
              </h2>
              <p className="text-lg sm:text-xl text-[color:var(--color-muted)] mb-8 leading-relaxed">
                Somos agencia? ¿Viajero directo? ¿Querés cotizar un viaje o conocernos mejor? Dejanos tus datos y te contactamos a la brevedad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://delapazturonline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[color:var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[color:var(--color-primary)]/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Reserva tu viaje
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center px-8 py-4 border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] font-semibold rounded-lg hover:bg-[color:var(--color-primary)]/10 transition-colors"
                >
                  Contactanos
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
