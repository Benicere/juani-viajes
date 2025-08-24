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
      <main className="min-h-screen bg-black text-white">
        {/* Layout 50/50: Nuestros Inicios + Imagen */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Nuestros Inicios - 50% */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                  Nuestros Inicios
                </h2>
                <p className="text-lg sm:text-xl text-[color:var(--color-muted)] leading-relaxed">
                  Todo comenzó en 2012, cuando un grupo de apasionados artistas decidimos crear un espacio
                  donde el arte del tatuaje fuera más que un simple servicio. Queríamos construir un lugar
                  donde cada cliente se sintiera parte de nuestra familia, donde cada diseño contara una historia única.
                </p>
              </motion.div>

              {/* Imagen nosotros-1 - 50% */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10"
              >
                <Image
                  src="/nosotros/nosotros-1.webp"
                  alt="Estudio de tatuajes - Ambiente profesional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Historia y Trayectoria */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Nuestra Misión */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[color:var(--color-primary)]">
                    Nuestra Misión
                  </h3>
                  <p className="text-lg text-[color:var(--color-muted)] leading-relaxed">
                    Transformar ideas en arte permanente, creando experiencias únicas que van más allá del tatuaje. 
                    Nos comprometemos a mantener los más altos estándares de calidad, higiene y profesionalismo, 
                    mientras construimos relaciones duraderas con nuestros clientes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-[color:var(--color-primary)]/20 rounded-full mb-4">
                    <svg className="w-12 h-12 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-sm text-[color:var(--color-muted)]">Innovación Constante</p>
                </div>
              </motion.div>

              {/* Nuestros Valores */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-8">
                  Nuestros Valores
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[color:var(--color-primary)]/20 rounded-full mb-4">
                      <svg className="w-8 h-8 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Pasión</h4>
                    <p className="text-[color:var(--color-muted)]">
                      Cada tatuaje es una obra de arte creada con amor y dedicación
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[color:var(--color-primary)]/20 rounded-full mb-4">
                      <svg className="w-8 h-8 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Seguridad</h4>
                    <p className="text-[color:var(--color-muted)]">
                      Higiene y protocolos de seguridad como prioridad absoluta
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[color:var(--color-primary)]/20 rounded-full mb-4">
                      <svg className="w-8 h-8 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Comunidad</h4>
                    <p className="text-[color:var(--color-muted)]">
                      Construimos relaciones duraderas con nuestros clientes
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Nuestro Equipo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-8">
                  Nuestro Equipo
                </h3>
                <p className="text-lg text-[color:var(--color-muted)] leading-relaxed max-w-3xl mx-auto mb-8">
                  Contamos con artistas especializados en diferentes estilos, cada uno con años de experiencia 
                  y una pasión inquebrantable por el arte del tatuaje. Nuestro equipo trabaja en conjunto para 
                  ofrecerte la mejor experiencia posible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-xl font-semibold mb-2">Artistas Senior</h4>
                    <p className="text-[color:var(--color-muted)]">
                      Más de 10 años de experiencia en el mundo del tatuaje
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-xl font-semibold mb-2">Especialistas</h4>
                    <p className="text-[color:var(--color-muted)]">
                      Expertos en diferentes estilos y técnicas
                    </p>
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
                ¿Listo para ser parte de nuestra historia?
              </h2>
              <p className="text-lg sm:text-xl text-[color:var(--color-muted)] mb-8 max-w-3xl mx-auto">
                Ven a conocernos, charlemos sobre tu idea y juntos creemos algo único y personalizado. 
                Cada tatuaje es una nueva página en nuestra historia compartida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center px-8 py-4 bg-[color:var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[color:var(--color-primary)]/90 transition-colors"
                >
                  Agendar consulta
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
                <Link
                  href="/galeria"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
                >
                  Ver nuestros trabajos
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
