/*
SISTEMA DE FILTROS COMPLETO - GUARDADO PARA IMPLEMENTACIÓN FUTURA

Este archivo contiene todo el sistema de filtros con categorías (Tatuajes/Piercings) 
que se puede implementar nuevamente en la galería cuando se necesite.

Para implementar: 
1. Renombrar este archivo a GalleryFilters.tsx
2. Actualizar las importaciones en Gallery.tsx
3. Descomentar el código de filtros en Gallery.tsx

*/

"use client";
import { useState } from "react";

export type CategoryType = "tattoos" | "piercings";
export type FilterType = "style" | "size" | "location" | "color" | "type" | "material";

export interface Filters {
  category: CategoryType;
  style: string;
  size: string;
  location: string;
  color: string;
  type: string;
  material: string;
}

interface GalleryFiltersProps {
  activeFilters: Filters;
  onFilterChange: (filterType: FilterType, value: string) => void;
  onCategoryChange: (category: CategoryType) => void;
  projectCount: number;
}

const tattooFilterOptions = {
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

const piercingFilterOptions = {
  type: [
    { value: "todos", label: "Todos los tipos" },
    { value: "lobulo", label: "Lóbulo" },
    { value: "helix", label: "Hélix" },
    { value: "concha", label: "Concha" },
    { value: "tragus", label: "Tragus" },
    { value: "industrial", label: "Industrial" },
    { value: "daith", label: "Daith" },
    { value: "rook", label: "Rook" },
    { value: "anti-tragus", label: "Anti-Tragus" },
  ],
  size: [
    { value: "todos", label: "Todos los tamaños" },
    { value: "pequeño", label: "Pequeños" },
    { value: "mediano", label: "Medianos" },
    { value: "grande", label: "Grandes" },
  ],
  location: [
    { value: "todos", label: "Todas las ubicaciones" },
    { value: "lobulo", label: "Lóbulo" },
    { value: "helix", label: "Hélix" },
    { value: "concha", label: "Concha" },
    { value: "tragus", label: "Tragus" },
    { value: "daith", label: "Daith" },
    { value: "rook", label: "Rook" },
    { value: "anti-tragus", label: "Anti-Tragus" },
  ],
  material: [
    { value: "todos", label: "Todos los materiales" },
    { value: "acero-quirurgico", label: "Acero quirúrgico" },
    { value: "titanio", label: "Titanio" },
    { value: "oro", label: "Oro" },
    { value: "plata", label: "Plata" },
  ],
};

export default function GalleryFilters({ activeFilters, onFilterChange, onCategoryChange, projectCount }: GalleryFiltersProps) {
  const [expandedCategory, setExpandedCategory] = useState<CategoryType>(activeFilters.category);

  const handleCategoryChange = (category: CategoryType) => {
    onCategoryChange(category);
    setExpandedCategory(category);
  };

  const FilterSection = ({ type, title, options }: { type: FilterType; title: string; options: { value: string; label: string }[] }) => (
    <div className="space-y-2">
      <h3 className="text-xs font-medium text-white/80">{title}</h3>
      <div className="space-y-1">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onFilterChange(type, option.value)}
            className={`block w-full text-left text-xs px-2 py-1.5 rounded transition-colors ${
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

  const CategoryButton = ({ category, isExpanded }: { category: CategoryType; isExpanded: boolean }) => (
    <button
      onClick={() => handleCategoryChange(category)}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
        isExpanded 
          ? "bg-[color:var(--color-primary)] text-white" 
          : "bg-white/5 text-white hover:bg-white/10"
      }`}
    >
      <span className="font-medium text-sm">
        {category === "tattoos" ? "Tatuajes" : "Piercings"}
      </span>
      <span className={`transform transition-transform text-xs ${isExpanded ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
  );

  return (
    <>
      {/* Mobile Filters - Más compacto */}
      <div className="lg:hidden mb-4">
        {/* Categorías principales */}
        <div className="flex gap-2 mb-3">
          <CategoryButton category="tattoos" isExpanded={expandedCategory === "tattoos"} />
          <CategoryButton category="piercings" isExpanded={expandedCategory === "piercings"} />
        </div>
        
        {/* Filtros específicos de la categoría seleccionada */}
        {expandedCategory === "tattoos" && (
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FilterSection type="style" title="Estilo" options={tattooFilterOptions.style} />
              <FilterSection type="size" title="Tamaño" options={tattooFilterOptions.size} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FilterSection type="location" title="Ubicación" options={tattooFilterOptions.location} />
              <FilterSection type="color" title="Color" options={tattooFilterOptions.color} />
            </div>
          </div>
        )}
        
        {expandedCategory === "piercings" && (
          <div className="bg-white/5 border border-white/10 rounded-lg p-3 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FilterSection type="type" title="Tipo" options={piercingFilterOptions.type} />
              <FilterSection type="size" title="Tamaño" options={piercingFilterOptions.size} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FilterSection type="location" title="Ubicación" options={piercingFilterOptions.location} />
              <FilterSection type="material" title="Material" options={piercingFilterOptions.material} />
            </div>
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
          
          {/* Categorías principales */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Categoría</h3>
            <div className="space-y-2">
              <CategoryButton category="tattoos" isExpanded={expandedCategory === "tattoos"} />
              <CategoryButton category="piercings" isExpanded={expandedCategory === "piercings"} />
            </div>
          </div>
          
          {/* Filtros específicos de la categoría seleccionada */}
          {expandedCategory === "tattoos" && (
            <>
              <FilterSection type="style" title="Estilo" options={tattooFilterOptions.style} />
              <FilterSection type="size" title="Tamaño" options={tattooFilterOptions.size} />
              <FilterSection type="location" title="Ubicación" options={tattooFilterOptions.location} />
              <FilterSection type="color" title="Color" options={tattooFilterOptions.color} />
            </>
          )}
          
          {expandedCategory === "piercings" && (
            <>
              <FilterSection type="type" title="Tipo" options={piercingFilterOptions.type} />
              <FilterSection type="size" title="Tamaño" options={piercingFilterOptions.size} />
              <FilterSection type="location" title="Ubicación" options={piercingFilterOptions.location} />
              <FilterSection type="material" title="Material" options={piercingFilterOptions.material} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
