"use client";
import { useState } from "react";

export type FilterType = "style" | "size" | "location" | "color";

export interface Filters {
  style: string;
  size: string;
  location: string;
  color: string;
}

interface GalleryFiltersProps {
  activeFilters: Filters;
  onFilterChange: (filterType: FilterType, value: string) => void;
  projectCount: number;
}

const filterOptions = {
  style: [
    { value: "todos", label: "Todos los estilos" },
    { value: "fineline", label: "Fineline" },
    { value: "blackwork", label: "Blackwork" },
    { value: "realismo", label: "Realismo" },
    { value: "minimalista", label: "Minimalista" },
    { value: "geometrico", label: "Geométrico" },
    { value: "acuarela", label: "Acuarela" },
    { value: "neo-traditional", label: "Neo Traditional" },
    { value: "japones", label: "Japonés" },
  ],
  size: [
    { value: "todos", label: "Todos los tamaños" },
    { value: "pequeño", label: "Pequeños" },
    { value: "mediano", label: "Medianos" },
    { value: "grande", label: "Grandes" },
  ],
  location: [
    { value: "todos", label: "Todas las ubicaciones" },
    { value: "brazo", label: "Brazo" },
    { value: "antebrazo", label: "Antebrazo" },
    { value: "muñeca", label: "Muñeca" },
    { value: "pierna", label: "Pierna" },
    { value: "hombro", label: "Hombro" },
    { value: "espalda", label: "Espalda" },
    { value: "pecho", label: "Pecho" },
  ],
  color: [
    { value: "todos", label: "Todos los colores" },
    { value: "negro-y-gris", label: "Negro y gris" },
    { value: "color", label: "Color" },
  ],
};

export default function GalleryFilters({ activeFilters, onFilterChange, projectCount }: GalleryFiltersProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const FilterSection = ({ type, title }: { type: FilterType; title: string }) => (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <div className="space-y-2">
        {filterOptions[type].map((option) => (
          <button
            key={option.value}
            onClick={() => onFilterChange(type, option.value)}
            className={`block w-full text-left text-sm px-3 py-2 rounded-md transition-colors ${
              activeFilters[type] === option.value
                ? "bg-[color:var(--color-primary)] text-white"
                : "text-[color:var(--color-muted)] hover:text-white hover:bg-white/5"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filters */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
        >
          <span className="font-medium">Filtros ({projectCount} proyectos)</span>
          <span className={`transform transition-transform ${isMobileOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {isMobileOpen && (
          <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-4 space-y-6">
            <FilterSection type="style" title="Estilo" />
            <FilterSection type="size" title="Tamaño" />
            <FilterSection type="location" title="Ubicación" />
            <FilterSection type="color" title="Color" />
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24 bg-white/5 border border-white/10 rounded-lg p-6 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-lg font-semibold text-white">Filtros</h2>
            <p className="text-sm text-[color:var(--color-muted)] mt-1">
              {projectCount} proyectos encontrados
            </p>
          </div>
          
          <FilterSection type="style" title="Estilo" />
          <FilterSection type="size" title="Tamaño" />
          <FilterSection type="location" title="Ubicación" />
          <FilterSection type="color" title="Color" />
        </div>
      </div>
    </>
  );
}
