"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
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

// Datos de la galería - 5 tatuajes y 5 piercings
const galleryItems = [
  // TATUAJES
  {
    id: "tattoo-1",
    title: "Tatuaje Fineline",
    image: "https://images.unsplash.com/photo-1604027974421-805c6c99febf?q=80&w=800&auto=format&fit=crop",
    category: "Tatuaje",
    style: "Fineline"
  },
  {
    id: "tattoo-2",
    title: "Tatuaje Blackwork",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop",
    category: "Tatuaje",
    style: "Blackwork"
  },
  {
    id: "tattoo-3",
    title: "Tatuaje Realismo",
    image: "https://images.unsplash.com/photo-1548588689-9d26f0dd3aa1?q=80&w=800&auto=format&fit=crop",
    category: "Tatuaje",
    style: "Realismo"
  },
  {
    id: "tattoo-4",
    title: "Tatuaje Minimalista",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=800&auto=format&fit=crop",
    category: "Tatuaje",
    style: "Minimalista"
  },
  {
    id: "tattoo-5",
    title: "Tatuaje Neo Traditional",
    image: "https://images.unsplash.com/photo-1604027974421-805c6c99febf?q=80&w=800&auto=format&fit=crop",
    category: "Tatuaje",
    style: "Neo Traditional"
  },
  // PIERCINGS
  {
    id: "piercing-1",
    title: "Piercing Industrial",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=800&auto=format&fit=crop",
    category: "Piercing",
    style: "Industrial"
  },
  {
    id: "piercing-2",
    title: "Piercing Helix",
    image: "https://images.unsplash.com/photo-1548588689-9d26f0dd3aa1?q=80&w=800&auto=format&fit=crop",
    category: "Piercing",
    style: "Helix"
  },
  {
    id: "piercing-3",
    title: "Piercing Septum",
    image: "https://images.unsplash.com/photo-1604027974421-805c6c99febf?q=80&w=800&auto=format&fit=crop",
    category: "Piercing",
    style: "Septum"
  },
  {
    id: "piercing-4",
    title: "Piercing Labret",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop",
    category: "Piercing",
    style: "Labret"
  },
  {
    id: "piercing-5",
    title: "Piercing Ombligo",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=800&auto=format&fit=crop",
    category: "Piercing",
    style: "Ombligo"
  }
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePrevious = () => {
    setSelectedProjectIndex(prev => 
      prev > 0 ? prev - 1 : galleryItems.length - 1
    );
  };

  const handleNext = () => {
    setSelectedProjectIndex(prev => 
      prev < galleryItems.length - 1 ? prev + 1 : 0
    );
  };

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  const openModal = (project: GalleryItem) => {
    setSelectedProjectIndex(galleryItems.findIndex(item => item.id === project.id));
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16">
      <div className="container space-y-6 sm:space-y-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{gallery.title}</h2>
          <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mx-auto">
            {gallery.subtitle}
          </p>
        </div>
        
        {/* Carousel - Solo visible en mobile */}
        <div className="lg:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="min-w-0 flex-[0_0_85%]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="85vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-[color:var(--color-muted)]">{item.style}</p>
                  <span className="inline-block mt-1 px-2 py-1 bg-[color:var(--color-primary)] text-white text-xs rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Galería principal - Solo visible en desktop */}
        <div className="hidden lg:block">
          {/* Sección Tatuajes */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Tatuajes
            </h3>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
              {galleryItems.filter(item => item.category === "Tatuaje").map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    
                    {/* Overlay con información */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.style}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sección Piercings */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Piercings
            </h3>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
              {galleryItems.filter(item => item.category === "Piercing").map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    
                    {/* Overlay con información */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.style}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Modal - Solo visible en desktop */}
      <ImageModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        project={galleryItems[selectedProjectIndex] || null}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedProjectIndex > 0}
        hasNext={selectedProjectIndex < galleryItems.length - 1}
      />
    </section>
  );
}


