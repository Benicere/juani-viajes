import { company, navigation } from "@/app/constants/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container">
        {/* Logo y navegación */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt={company.name}
              width={100}
              height={35}
              className="h-7 w-auto"
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
              className="w-10 h-10 bg-[color:var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[color:var(--color-primary)]/90 transition-colors"
              aria-label="WhatsApp"
            >
              <span className="text-white text-lg">💬</span>
            </a>
          )}
          
          {company.instagram && (
            <a
              href={`https://instagram.com/${company.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <span className="text-lg">📷</span>
            </a>
          )}
          
          {company.facebook && (
            <a
              href={`https://facebook.com/${company.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <span className="text-lg">📘</span>
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
          
          <div className="text-xs text-[color:var(--color-muted)]">
            Desarrollado por: <span className="text-white">Augusto</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


