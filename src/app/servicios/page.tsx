"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-black/50 to-black/20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Nuestros Servicios
              </h1>
              <p className="text-lg sm:text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto">
                Ofrecemos una amplia gama de servicios para hacer de tu viaje una experiencia inolvidable
              </p>
            </motion.div>
          </div>
        </section>

        {/* Servicios Detallados */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-32">
              {/* Servicio 1: Paquetes Todo Incluido - Texto izquierda, imagen derecha */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                    Paquetes Todo Incluido
                  </h3>
                  <p className="text-lg text-[color:var(--color-muted)] mb-6 leading-relaxed">
                    Disfrutá de paquetes completos con vuelos, hoteles y excursiones incluidas. Nuestros asesores especializados crean experiencias únicas que reflejan tus preferencias.
                  </p>
                  <ul className="space-y-3">
                                         {services.items[0].features.map((feature, featureIndex) => (
                       <li key={featureIndex} className="flex items-center text-[color:var(--color-muted)]">
                         <span className="w-3 h-3 bg-[color:var(--color-primary)] rounded-full mr-4" />
                         <span className="text-lg">{feature}</span>
                       </li>
                     ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src="/assets/nosotros/nosotros-1.webp"
                      alt="Paquetes todo incluido"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Servicio 2: Destinos Personalizados - Imagen izquierda, texto derecha */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className="order-1">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src="/assets/nosotros/nosotros-3.webp"
                      alt="Destinos personalizados"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                    Destinos Personalizados
                  </h3>
                  <p className="text-lg text-[color:var(--color-muted)] mb-6 leading-relaxed">
                    Creamos itinerarios únicos adaptados a tus preferencias y presupuesto. Utilizamos los mejores destinos y experiencias para garantizar tu satisfacción.
                  </p>
                  <ul className="space-y-3">
                                         {services.items[1].features.map((feature, featureIndex) => (
                       <li key={featureIndex} className="flex items-center text-[color:var(--color-muted)]">
                         <span className="w-3 h-3 bg-[color:var(--color-primary)] rounded-full mr-4" />
                         <span className="text-lg">{feature}</span>
                       </li>
                     ))}
                  </ul>
                </div>
              </motion.div>

              {/* Servicio 3: Viajes de Aventura - Solo texto, sin imagen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  Viajes de Aventura
                </h3>
                                 <p className="text-lg text-[color:var(--color-muted)] mb-8 leading-relaxed">
                   Experiencias emocionantes para los más aventureros. Te acompañamos en todo el proceso de planificación para obtener los mejores resultados.
                 </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <div className="space-y-3">
                                         <div className="flex items-center text-[color:var(--color-muted)]">
                       <span className="w-3 h-3 bg-[color:var(--color-primary)] rounded-full mr-4" />
                       <span className="text-lg">Turismo aventura</span>
                     </div>
                     <div className="flex items-center text-[color:var(--color-muted)]">
                       <span className="w-3 h-3 bg-[color:var(--color-primary)] rounded-full mr-4" />
                       <span className="text-lg">Deportes extremos</span>
                     </div>
                     <div className="flex items-center text-[color:var(--color-muted)]">
                       <span className="w-3 h-3 bg-[color:var(--color-primary)] rounded-full mr-4" />
                       <span className="text-lg">Naturaleza</span>
                     </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-[color:var(--color-muted)]">
                      <span className="w-3 h-3 bg-[color:var(--color-primary)] rounded-full mr-4" />
                      <span className="text-lg">Guías especializados</span>
                    </div>
                    <div className="flex items-center text-[color:var(--color-muted)]">
                      <span className="w-3 h-3 bg-[color:var(--color-primary)] rounded-full mr-4" />
                      <span className="text-lg">Equipamiento incluido</span>
                    </div>
                    <div className="flex items-center text-[color:var(--color-muted)]">
                      <span className="w-3 h-3 bg-[color:var(--color-primary)] rounded-full mr-4" />
                      <span className="text-lg">Experiencias únicas</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[color:var(--color-primary)]/20 to-[color:var(--color-primary)]/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para tu próxima aventura?
              </h2>
              <p className="text-lg sm:text-xl text-[color:var(--color-muted)] mb-8 max-w-3xl mx-auto">
                Nuestros asesores están listos para crear algo único y personalizado para ti.
                Contactanos y comencemos a diseñar juntos tu próxima experiencia inolvidable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center px-8 py-4 bg-[color:var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[color:var(--color-primary)]/90 transition-colors"
                >
                  Contactar
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
                <Link
                  href="/galeria"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
                >
                  Ver galería
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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
