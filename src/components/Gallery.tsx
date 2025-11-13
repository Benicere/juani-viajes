"use client";
import Image from "next/image";
import { useState } from "react";
import { gallery } from "@/app/constants/constants";
import ImageModal from "./ImageModal";
import { motion } from "framer-motion";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  style: string;
}

// Datos de la galería - se generan dinámicamente
const galleryItems: GalleryItem[] = [
  // Por ahora, usar un enfoque más simple: cargar las imágenes que sabemos que existen
  // En producción, esto se puede hacer con un script que escanee la carpeta
  {
    id: "galeria-1",
    title: "Galería 1",
    image: "/assets/galeria/galeria-1.webp",
    category: "Galería",
    style: "Personalizado"
  },
  // Comentamos las otras imágenes hasta que las agregues
  // {
  //   id: "galeria-2",
  //   title: "Galería 2", 
  //   image: "/assets/galeria/galeria-2.webp",
  //   category: "Galería",
  //   style: "Personalizado"
  // },
  // {
  //   id: "galeria-3",
  //   title: "Galería 3",
  //   image: "/assets/galeria/galeria-3.webp",
  //   category: "Galería",
  //   style: "Personalizado"
  // },
  // {
  //   id: "galeria-4",
  //   title: "Galería 4",
  //   image: "/assets/galeria/galeria-4.webp",
  //   category: "Galería",
  //   style: "Personalizado"
  // },
  // {
  //   id: "galeria-5",
  //   title: "Galería 5",
  //   image: "/assets/galeria/galeria-5.webp",
  //   category: "Galería",
  //   style: "Personalizado"
  // },
  // {
  //   id: "galeria-6",
  //   title: "Galería 6",
  //   image: "/assets/galeria/galeria-6.webp",
  //   category: "Galería",
  //   style: "Personalizado"
  // },
  // {
  //   id: "galeria-7",
  //   title: "Galería 7",
  //   image: "/assets/galeria/galeria-7.webp",
  //   category: "Galería",
  //   style: "Personalizado"
  // },
  // {
  //   id: "galeria-8",
  //   title: "Galería 8",
  //   image: "/assets/galeria/galeria-8.webp",
  //   category: "Galería",
  //   style: "Personalizado"
  // },
];

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  // Usar directamente las imágenes estáticas (más eficiente)
  const availableImages = galleryItems;
  
  // Debug: verificar que las imágenes se estén cargando
  console.log('Gallery - availableImages:', availableImages);
  console.log('Gallery - galleryItems:', galleryItems);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePrevious = () => {
    setSelectedProjectIndex((prev) => 
      prev === 0 ? availableImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedProjectIndex((prev) => 
      prev === availableImages.length - 1 ? 0 : prev + 1
    );
  };

  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[color:var(--color-background)]">
      <div className="container">
        {/* Título y subtítulo */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            {gallery.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-[color:var(--color-muted)] max-w-2xl mx-auto"
          >
            {gallery.subtitle}
          </motion.p>
        </div>

        {/* Grid de imágenes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {availableImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden border border-[color:var(--color-muted)]/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[color:var(--color-primary)]/0 group-hover:bg-[color:var(--color-primary)]/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mensaje si no hay imágenes */}
        {availableImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[color:var(--color-muted)] text-lg">
              No hay imágenes disponibles en la galería.
            </p>
            <p className="text-sm text-[color:var(--color-muted)] mt-2">
              Agrega imágenes en la carpeta public/galeria/ con el formato galeria-1.webp, galeria-2.webp, etc.
            </p>
          </div>
        )}
      </div>

      {/* Modal de imagen */}
      {modalOpen && (
        <ImageModal
          isOpen={modalOpen}
          onClose={handleModalClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
          item={availableImages[selectedProjectIndex]}
          hasPrevious={selectedProjectIndex > 0}
          hasNext={selectedProjectIndex < availableImages.length - 1}
        />
      )}
    </section>
  );
}


