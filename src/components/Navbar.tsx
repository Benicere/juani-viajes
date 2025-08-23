"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/app/constants/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container">
        <div className="flex items-center justify-between h-16 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/company/logo.webp"
              alt="Logo"
              width={160}
              height={60}
              className="h-10 w-auto sm:h-12 lg:h-14"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <Image
              src="/company/favicon.webp"
              alt="Favicon"
              width={24}
              height={24}
              className="h-6 w-6 sm:h-8 sm:w-8"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
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
                    isActive ? 'text-white' : 'text-[color:var(--color-muted)] hover:text-white'
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
            className="lg:hidden p-2 text-white hover:text-[color:var(--color-primary)] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <Link
                    key={item.id}
                    href={item.url}
                    onClick={() => setIsMobileOpen(false)}
                    className={`relative px-4 py-2 text-base font-medium transition-colors ${
                      isActive ? 'text-white bg-white/10' : 'text-[color:var(--color-muted)] hover:text-white hover:bg-white/5'
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


