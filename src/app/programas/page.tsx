"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProgramasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const handleImageClick = (index: number) => {
    // Guardar el índice para mapear a la imagen del PDF (programa 1 = imagen 0003, programa 2 = imagen 0004, etc.)
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsPanning(false);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleZoomReset = () => {
    setZoom(1);
  };

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setZoom((prev) => Math.max(0.5, Math.min(3, prev + delta)));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsPanning(true);
    setPan({ x: pan.x, y: pan.y });
    (e.currentTarget as HTMLDivElement).style.cursor = "grabbing";
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsPanning(false);
    (e.currentTarget as HTMLDivElement).style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    e.preventDefault();
    setPan((prev) => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY,
    }));
  };

  // Evitar scroll de la página cuando el modal está abierto
  useEffect(() => {
    if (typeof document === "undefined") return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalBodyOverflow || "";
      document.documentElement.style.overflow = originalHtmlOverflow || "";
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow || "";
      document.documentElement.style.overflow = originalHtmlOverflow || "";
    };
  }, [isModalOpen]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[color:var(--color-background)]">
        {/* Hero Section */}
        <section className="py-20 bg-[color:var(--color-background)]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-[color:var(--color-foreground)]">
                Nuestros Programas
              </h1>
              <p className="text-lg sm:text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto">
                Descubrí nuestras propuestas de viaje diseñadas para crear experiencias únicas e inolvidables
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid de Programas */}
        <section className="py-20">
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
                
                return (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "200px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`relative aspect-[3/4] rounded-lg overflow-hidden border border-[color:var(--color-muted)]/20 hover:border-[color:var(--color-primary)]/40 transition-all duration-300 hover:shadow-lg cursor-pointer ${colClasses}`}
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      src={`/assets/programas/programa-${num}.webp`}
                      alt={`Programa ${num}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                      priority={index < 3}
                    />
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
      
      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-sm pt-24"
            onClick={handleCloseModal}
          >
            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[75vh] mx-4 mb-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 z-10 w-10 h-10 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Cerrar"
              >
                ✕
              </button>

              {/* Imagen */}
              <div className="overflow-hidden">
                <div className="relative w-full max-w-[min(95vw,1000px)] mx-auto overflow-hidden" style={{ height: "min(90vh, 120vw)" }}>
                  <div
                    className="relative w-full h-full flex items-center justify-center cursor-grab"
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                      transformOrigin: "center",
                      transition: isPanning ? "none" : "transform 0.15s ease-out",
                    }}
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                  >
                    <Image
                      src={`/assets/programas-imagenes/Manual DLP español_pages-to-jpg-${(selectedImageIndex ?? 0) + 1}-1.webp`}
                      alt={`Programa ${(selectedImageIndex ?? 0) + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 95vw, 70vw"
                      quality={95}
                    />
                  </div>
                </div>

                {/* Controles de zoom */}
                <div className="mt-3 flex justify-center gap-2 text-xs sm:text-sm">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    className="px-3 py-1 rounded-full border border-white/40 bg-black/40 text-white hover:bg-white/10 transition-colors"
                  >
                    −
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomReset}
                    className="px-3 py-1 rounded-full border border-white/40 bg-black/40 text-white hover:bg-white/10 transition-colors"
                  >
                    {Math.round(zoom * 100)}%
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    className="px-3 py-1 rounded-full border border-white/40 bg-black/40 text-white hover:bg-white/10 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
