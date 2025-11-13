"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation, company } from "@/app/constants/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    // Verificar estado inicial
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled || !isHomePage
          ? "bg-[color:var(--color-background)]/80 backdrop-blur-md shadow-md border-b border-[color:var(--color-muted)]/20"
          : "bg-transparent backdrop-blur-0 shadow-none border-none"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 sm:h-24">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 transition-all ${
              !scrolled && isHomePage ? "drop-shadow-lg" : ""
            }`}
          >
            <Image
              src="/assets/company/logo.webp"
              alt={`${company.name} logo`}
              width={160}
              height={60}
              className="h-10 w-auto sm:h-12 lg:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative z-10">
            {navigation.map((item) => {
              const isActive = pathname === item.url;
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`relative text-base sm:text-lg font-medium transition-colors ${
                    scrolled || !isHomePage
                      ? isActive
                        ? "text-[color:var(--color-primary)]"
                        : "text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]"
                      : "text-white drop-shadow-lg hover:text-white/80"
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[color:var(--color-primary)] rounded-full" />
                  )}
                </Link>
              );
            })}
            <a
              href="https://delapazturonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                scrolled || !isHomePage
                  ? "bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary)]/90"
                  : "bg-white text-[color:var(--color-primary)] hover:bg-white/90 drop-shadow-lg"
              }`}
            >
              Reserva tu viaje
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled || !isHomePage
                ? "text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]"
                : "text-white drop-shadow-lg hover:text-white/80"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div
            className={`lg:hidden py-4 border-t ${
              scrolled || !isHomePage ? "border-[color:var(--color-muted)]/20" : "border-white/10"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <Link
                    key={item.id}
                    href={item.url}
                    onClick={() => setIsMobileOpen(false)}
                    className={`relative px-4 py-2 text-base font-medium transition-colors rounded-lg ${
                      scrolled || !isHomePage
                        ? isActive
                          ? "text-[color:var(--color-primary)] bg-[color:var(--color-primary)]/10"
                          : "text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/5"
                        : isActive
                        ? "text-white bg-white/10"
                        : "text-white hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.title}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--color-primary)] rounded-r-full" />
                    )}
                  </Link>
                );
              })}
              <a
                href="https://delapazturonline.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className={`px-4 py-2 text-center rounded-lg font-semibold transition-colors ${
                  scrolled || !isHomePage
                    ? "bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary)]/90"
                    : "bg-white text-[color:var(--color-primary)] hover:bg-white/90"
                }`}
              >
                Reserva tu viaje
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
