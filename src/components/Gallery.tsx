"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useMemo } from "react";
import projects from "@/data/projects.json";
import piercings from "@/data/piercings.json";
import { gallery } from "@/app/constants/constants";
import GalleryFilters, { type FilterType, type Filters, type CategoryType } from "./GalleryFilters";
import ImageModal from "./ImageModal";

// Interface unificada para ambos tipos de proyectos
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

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );
  
  const [activeFilters, setActiveFilters] = useState<Filters>({
    category: "tattoos",
    style: "todos",
    size: "todos",
    location: "todos",
    color: "todos",
    type: "todos",
    material: "todos",
  });
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeFilters.category === "tattoos") {
      return projects.map(project => ({
        ...project,
        category: "tattoos" as const,
      })).filter((project) => {
        const matchesStyle = activeFilters.style === "todos" || project.style === activeFilters.style;
        const matchesSize = activeFilters.size === "todos" || project.size === activeFilters.size;
        const matchesLocation = activeFilters.location === "todos" || project.location === activeFilters.location;
        const matchesColor = activeFilters.color === "todos" || project.color === activeFilters.color;
        
        return matchesStyle && matchesSize && matchesLocation && matchesColor;
      });
    } else {
      return piercings.map(piercing => ({
        ...piercing,
        category: "piercings" as const,
      })).filter((piercing) => {
        const matchesType = activeFilters.type === "todos" || piercing.type === activeFilters.type;
        const matchesSize = activeFilters.size === "todos" || piercing.size === activeFilters.size;
        const matchesLocation = activeFilters.location === "todos" || piercing.location === activeFilters.location;
        const matchesMaterial = activeFilters.material === "todos" || piercing.material === activeFilters.material;
        
        return matchesType && matchesSize && matchesLocation && matchesMaterial;
      });
    }
  }, [activeFilters]);

  const handleFilterChange = (filterType: FilterType, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleCategoryChange = (category: CategoryType) => {
    setActiveFilters(prev => ({
      ...prev,
      category,
      // Reset filters when changing category
      style: "todos",
      size: "todos",
      location: "todos",
      color: "todos",
      type: "todos",
      material: "todos",
    }));
  };

  const handleImageClick = (index: number) => {
    setSelectedProjectIndex(index);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePrevious = () => {
    setSelectedProjectIndex(prev => 
      prev > 0 ? prev - 1 : filteredProjects.length - 1
    );
  };

  const handleNext = () => {
    setSelectedProjectIndex(prev => 
      prev < filteredProjects.length - 1 ? prev + 1 : 0
    );
  };

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-12 sm:py-16">
      <div className="container space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl font-semibold">{gallery.title}</h2>
          <p className="text-sm text-[color:var(--color-muted)]">
            {gallery.subtitle}
          </p>
        </div>
        
        {/* Layout responsive: mobile vertical, desktop horizontal */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <GalleryFilters 
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onCategoryChange={handleCategoryChange}
            projectCount={filteredProjects.length}
          />
          
          <div className="flex-1 space-y-6 sm:space-y-8 min-w-0">
            {/* Carousel - Solo visible en mobile */}
            <div className="lg:hidden overflow-hidden" ref={emblaRef}>
              <div className="flex gap-3">
                {filteredProjects.map((p) => (
                  <div key={p.id} className="min-w-0 flex-[0_0_85%]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="85vw"
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="text-sm font-medium">{p.title}</h3>
                      <p className="text-xs text-[color:var(--color-muted)]">
                        {p.category === "tattoos" ? p.style : p.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid principal */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {filteredProjects.map((p, index) => (
                <div key={p.id} className="relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                  {/* Click overlay solo en desktop */}
                  <div className="hidden lg:block absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors cursor-pointer" onClick={() => handleImageClick(index)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Modal - Solo visible en desktop */}
      <ImageModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        project={filteredProjects[selectedProjectIndex] || null}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedProjectIndex > 0}
        hasNext={selectedProjectIndex < filteredProjects.length - 1}
      />
    </section>
  );
}


