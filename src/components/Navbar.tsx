"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation, company } from "@/app/constants/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollPosition > 50);
    };

    // Verificar posición inicial al montar
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[color:var(--color-background)]/95 backdrop-blur-md border-b border-[color:var(--color-muted)]/20 shadow-md"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/company/logo.webp"
              alt={`${company.name} logo`}
              width={160}
              height={60}
              className="h-10 w-auto sm:h-12 lg:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.url;
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`relative text-base sm:text-lg font-medium transition-colors ${
                    isActive
                      ? isScrolled
                        ? "text-[color:var(--color-primary)]"
                        : "text-white"
                      : isScrolled
                      ? "text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.title}
                  {/* Indicador de página activa */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[color:var(--color-primary)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled
                ? "text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]"
                : "text-white hover:text-[color:var(--color-primary)]"
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className={`lg:hidden py-4 border-t ${
            isScrolled ? 'border-[color:var(--color-muted)]/20' : 'border-white/10'
          }`}>
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <Link
                    key={item.id}
                    href={item.url}
                    onClick={() => setIsMobileOpen(false)}
                    className={`relative px-4 py-2 text-base font-medium transition-colors ${
                      isActive 
                        ? isScrolled 
                          ? 'text-[color:var(--color-primary)] bg-[color:var(--color-primary)]/10' 
                          : 'text-white bg-white/10'
                        : isScrolled
                          ? 'text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/5'
                          : 'text-white/90 hover:text-white hover:bg-white/5'
                    } rounded-lg`}
                  >
                    {item.title}
                    {/* Indicador de página activa en mobile */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--color-primary)] rounded-r-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


