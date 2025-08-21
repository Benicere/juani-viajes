"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
  category: "tattoos" | "piercings";
  // Propiedades específicas de tatuajes
  style?: string;
  color?: string;
  // Propiedades específicas de piercings
  type?: string;
  material?: string;
  // Propiedades comunes
  size: string;
  location: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: GalleryItem | null;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function ImageModal({
  isOpen,
  onClose,
  project,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: ImageModalProps) {
  // Cerrar con Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevenir scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  // Determinar qué tags mostrar basado en la categoría
  const getTags = () => {
    if (project.category === "tattoos") {
      return [
        { label: project.style || "", key: "style" },
        { label: project.size, key: "size" },
        { label: project.location, key: "location" },
        { label: project.color || "", key: "color" }
      ].filter(tag => tag.label);
    } else {
      return [
        { label: project.type || "", key: "type" },
        { label: project.size, key: "size" },
        { label: project.location, key: "location" },
        { label: project.material || "", key: "material" }
      ].filter(tag => tag.label);
    }
  };

  const tags = getTags();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-7xl max-h-[95vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Cerrar"
            >
              ✕
            </button>

            {/* Navigation buttons */}
            {hasPrevious && (
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Anterior"
              >
                ‹
              </button>
            )}

            {hasNext && (
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Siguiente"
              >
                ›
              </button>
            )}

            {/* Image */}
            <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9] w-full h-[70vh] sm:h-[75vh] lg:h-[80vh] rounded-lg overflow-hidden border border-white/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 95vw, 90vw"
                priority
              />
            </div>

            {/* Project info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
                {tags.map((tag) => (
                  <span key={tag.key} className="px-3 py-1 bg-white/10 rounded-full">
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Keyboard navigation hint */}
            <div className="mt-4 text-center text-xs text-white/60">
              Usa las flechas del teclado para navegar • ESC para cerrar
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
