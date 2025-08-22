"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { gallery } from "@/app/constants/constants";
import ImageModal from "./ImageModal";

// Datos de la galería simplificada - 10 imágenes atractivas
const galleryItems = [
  {
    id: "tattoo-1",
    title: "Fineline Rose",
    category: "Tatuaje",
    style: "Fineline",
    image: "https://images.unsplash.com/photo-1604027974421-805c6c99febf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "tattoo-2",
    title: "Blackwork Sleeve",
    category: "Tatuaje",
    style: "Blackwork",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "tattoo-3",
    title: "Realism Portrait",
    category: "Tatuaje",
    style: "Realismo",
    image: "https://images.unsplash.com/photo-1548588689-9d26f0dd3aa1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "piercing-1",
    title: "Hélix Industrial",
    category: "Piercing",
    style: "Industrial",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "tattoo-4",
    title: "Minimal Symbol",
    category: "Tatuaje",
    style: "Minimalista",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "piercing-2",
    title: "Concha Daith",
    category: "Piercing",
    style: "Daith",
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "tattoo-5",
    title: "Geometric Mandala",
    category: "Tatuaje",
    style: "Geométrico",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "piercing-3",
    title: "Tragus Rook",
    category: "Piercing",
    style: "Rook",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "tattoo-6",
    title: "Watercolor Flower",
    category: "Tatuaje",
    style: "Acuarela",
    image: "https://images.unsplash.com/photo-1604027974421-805c6c99febf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "piercing-4",
    title: "Lóbulo Apilado",
    category: "Piercing",
    style: "Lóbulo",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedProjectIndex(index);
    setModalOpen(true);
  };

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

        {/* Grid principal - Responsive y atractivo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:scale-105 transition-all duration-300">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 20vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs text-white/80 mb-2">{item.style}</p>
                  <span className="inline-block px-2 py-1 bg-[color:var(--color-primary)] text-white text-xs rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Click overlay solo en desktop */}
              <div className="hidden lg:block absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors cursor-pointer" onClick={() => handleImageClick(index)} />
            </div>
          ))}
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


