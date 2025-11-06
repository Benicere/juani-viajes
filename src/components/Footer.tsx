"use client";

import { company, navigation } from "@/app/constants/constants";
import Image from "next/image";
import Link from "next/link";
import GrvityLogo from "./icons/GrvityLogo";
import WhatsappIcon from "./icons/WhatsappIcon";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container">
        {/* Logo y navegación */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center mb-4">
            <Image
              priority
              src="/assets/company/logo.webp"
              alt={`${company.name} logo`}
              width={160}
              height={60}
              className="h-10 w-auto sm:h-12"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          
          <nav className="flex justify-center gap-6 text-base text-[color:var(--color-muted)]">
            {navigation.map((link) => (
              <Link key={link.id} href={link.url} className="hover:text-[color:var(--color-primary)] transition-colors">
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-4 mb-6">
          {company.whatsapp && (
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-8 h-8 text-[color:var(--color-icon)] hover:text-[color:var(--color-icon-hover)] transition-colors" />
            </a>
          )}
          
          {company.instagram && (
            <a
              href={`https://instagram.com/${company.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-8 h-8 text-[color:var(--color-icon)] hover:text-[color:var(--color-icon-hover)] transition-colors" />
            </a>
          )}
          
          {company.facebook && (
            <a
              href={`https://facebook.com/${company.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-8 h-8 text-[color:var(--color-icon)] hover:text-[color:var(--color-icon-hover)] transition-colors" />
            </a>
          )}
        </div>

        {/* Información de contacto */}
        <div className="text-center mb-6">
          <div className="text-base text-[color:var(--color-muted)] space-y-1">
            <p>{company.adress}, {company.city}</p>
            <p>{company.email}</p>
          </div>
        </div>

      </div>
      
      {/* Línea separadora - Fuera del container para ancho completo */}
      <div className="border-t-2 border-[color:var(--color-primary)] my-6"></div>
      
      {/* Copyright y desarrollado por en esquinas opuestas */}
      <div className="container">
        <div className="flex justify-between items-center text-sm text-[color:var(--color-muted)]">
          {/* Copyright - Esquina izquierda */}
          <div>
            © Copyright {new Date().getFullYear()} - {company.name}
          </div>
          
          {/* Desarrollado por - Esquina derecha */}
          <div className='flex items-center gap-2'>
            <span>Desarrollado por:</span>
            <a
              href='https://www.agenciagrvity.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GrvityLogo className='w-32 text-white hover:text-[#D1FA2D] transition-colors' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


