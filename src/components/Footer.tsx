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
          <div className="flex justify-center mb-4">
            <Image
              src="/company/logo.webp"
              alt={company.name}
              width={140}
              height={50}
              className="h-10 w-auto sm:h-12"
            />
          </div>
          
          <nav className="flex justify-center gap-6 text-sm text-[color:var(--color-muted)]">
            {navigation.map((link) => (
              <Link key={link.id} href={link.url} className="hover:text-white transition-colors">
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
              <WhatsappIcon className="w-8 h-8 text-[#e5e7eb] hover:text-white transition-colors" />
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
              <InstagramIcon className="w-8 h-8 text-[#e5e7eb] hover:text-white transition-colors" />
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
              <FacebookIcon className="w-8 h-8 text-[#e5e7eb] hover:text-white transition-colors" />
            </a>
          )}
        </div>

        {/* Información de contacto */}
        <div className="text-center mb-6">
          <div className="text-sm text-[color:var(--color-muted)] space-y-1">
            <p>{company.adress}, {company.city}</p>
            <p>{company.email}</p>
          </div>
        </div>

        {/* Copyright y descripción */}
        <div className="text-center space-y-2">
          <p className="text-sm text-[color:var(--color-muted)]">
            {company.footer}
          </p>
          
          <div className="text-xs text-[color:var(--color-muted)]">
            © Copyright {new Date().getFullYear()} - {company.name}
          </div>
          
          <div className='flex items-center justify-center gap-2'>
            <span className='text-[color:var(--color-muted)] text-xs'>Desarrollado por:</span>
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


