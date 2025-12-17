"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProgramasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[color:var(--color-background)]">
        {/* Hero Section */}
        <section className="pt-16 pb-10 bg-[color:var(--color-background)]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[color:var(--color-foreground)]">
                Nuestros Programas
              </h1>
              <p className="text-lg sm:text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto">
                Descubrí nuestras propuestas de viaje diseñadas para crear experiencias únicas e inolvidables
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid de Programas */}
        <section className="pb-20">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto lg:max-w-screen-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num, index) => {
                const totalItems = 10;
                const colsPerRow = 3;
                const fullRows = Math.floor(totalItems / colsPerRow);
                const remainingItems = totalItems % colsPerRow;
                const lastRowStartIndex = fullRows * colsPerRow;
                const isLastRow = index >= lastRowStartIndex;
                
                // Calcular clases para centrar los últimos elementos (1, 2 o 3)
                let colClasses = "";
                if (isLastRow && remainingItems > 0 && remainingItems < colsPerRow) {
                  if (remainingItems === 1) {
                    // 1 elemento: centrarlo
                    if (index === lastRowStartIndex) {
                      colClasses = "sm:col-start-1 lg:col-start-2";
                    }
                  } else if (remainingItems === 2) {
                    // 2 elementos: centrarlos
                    if (index === lastRowStartIndex) {
                      colClasses = "sm:col-start-1 lg:col-start-1";
                    } else if (index === lastRowStartIndex + 1) {
                      colClasses = "sm:col-start-2 lg:col-start-2";
                    }
                  }
                  // Si remainingItems === 3, no necesita centrado (ocupa toda la fila)
                }
                
                const card = (
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[color:var(--color-muted)]/20 hover:border-[color:var(--color-primary)]/40 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <Image
                      src={`/assets/programas/programa-${num}.webp`}
                      alt={`Programa ${num}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                      priority={index < 3}
                    />
                  </div>
                );

                const content = (
                  <Link href={`/programas/${num}`} className="block h-full">
                    {card}
                  </Link>
                );

                // Los primeros 3 elementos aparecen inmediatamente, el resto con scroll
                const isFirstRow = index < 3;
                
                const motionProps = isFirstRow
                  ? {
                      animate: { opacity: 1, y: 0 }
                    }
                  : {
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, amount: 0.2 }
                    };
                
                return (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, y: 20 }}
                    {...motionProps}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`${colClasses}`}
                  >
                    {content}
                  </motion.div>
                );
              })}
              </div>
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
                <a
                  href="https://delapazturonline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[color:var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[color:var(--color-primary)]/90 transition-colors"
                >
                  Reserva tu viaje
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link
                  href="/galeria"
                  className="inline-flex items-center px-8 py-4 border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] font-semibold rounded-lg hover:bg-[color:var(--color-primary)]/10 transition-colors"
                >
                  Ver Destinos
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
