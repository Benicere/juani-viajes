"use client";
import { company, navigation } from "@/app/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="container flex items-center justify-between h-16 sm:h-24">
        <Link href="/" className="flex items-center gap-3">
          {/* Favicon - Solo aparece si existe */}
          <Image
            src="/company/favicon.webp"
            alt="Favicon"
            width={32}
            height={32}
            className="h-8 w-8 sm:h-10 sm:w-10"
            priority
            onError={(e) => {
              // Si no existe el favicon, ocultar el elemento
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <Image
            src="/company/logo.webp"
            alt={company.name}
            width={160}
            height={60}
            className="h-10 w-auto sm:h-12 lg:h-14"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-8 text-base sm:text-lg text-[color:var(--color-muted)]">
          {navigation.map((link) => (
            <Link key={link.id} href={link.url} className="hover:text-white transition-colors">
              {link.title}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden flex flex-col justify-center items-center w-6 h-6 gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-4 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-4 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-4 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black/90 backdrop-blur border-t border-white/10">
          <nav className="container py-4 space-y-4">
            {navigation.map((link) => (
              <Link 
                key={link.id} 
                href={link.url} 
                className="block text-white hover:text-[color:var(--color-primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}


