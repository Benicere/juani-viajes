"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useMemo } from "react";
import projects from "@/data/projects.json";
import { gallery } from "@/app/constants/constants";
import GalleryFilters, { type FilterType, type Filters } from "./GalleryFilters";
import ImageModal from "./ImageModal";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );
  
  const [activeFilters, setActiveFilters] = useState<Filters>({
    style: "todos",
    size: "todos",
    location: "todos",
    color: "todos",
  });
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesStyle = activeFilters.style === "todos" || project.style === activeFilters.style;
      const matchesSize = activeFilters.size === "todos" || project.size === activeFilters.size;
      const matchesLocation = activeFilters.location === "todos" || project.location === activeFilters.location;
      const matchesColor = activeFilters.color === "todos" || project.color === activeFilters.color;
      
      return matchesStyle && matchesSize && matchesLocation && matchesColor;
    });
  }, [activeFilters]);

  const handleFilterChange = (filterType: FilterType, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value,
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
        
        <div className="flex gap-8">
          <GalleryFilters 
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            projectCount={filteredProjects.length}
          />
          
          <div className="flex-1 space-y-6 sm:space-y-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-3 sm:gap-4">
                {filteredProjects.map((p) => (
                  <div key={p.id} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33%]">
                    <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                    <div className="mt-2 sm:mt-3">
                      <h3 className="text-sm sm:text-base font-medium">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-[color:var(--color-muted)]">{p.style}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {filteredProjects.map((p, index) => (
                <div key={p.id} className="relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:scale-105 transition-transform duration-300">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 25vw"
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


