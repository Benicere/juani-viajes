"use client";
import { company } from "@/app/constants/constants";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="container space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--color-primary)]">¿Listo para tu próximo viaje?</h2>
          <p className="text-base sm:text-lg md:text-xl text-[color:var(--color-muted)] max-w-2xl mx-auto px-4">
            Contactanos y diseñamos juntos tu próxima aventura
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Mapa y ubicación */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[color:var(--color-primary)]">Ubicación</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <p className="text-[color:var(--color-foreground)]">{company.adress}</p>
                <p className="text-[color:var(--color-foreground)]">{company.city}</p>
                <p className="text-[color:var(--color-foreground)]">Tel: {company.telephone}</p>
                <p className="text-[color:var(--color-foreground)]">Email: {company.email}</p>
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden border border-[color:var(--color-muted)]/20">
              <iframe
                src={company.googlemaps}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la agencia"
              />
            </div>
          </div>

          {/* Horarios y redes sociales */}
          <div className="space-y-6 sm:space-y-8">
            {/* Horarios */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[color:var(--color-primary)]">Horarios de atención</h3>
              <div className="space-y-1 sm:space-y-2">
                {company.openDays.map((day, index) => (
                  <div key={index} className="flex justify-between text-sm sm:text-base">
                    <span className="text-[color:var(--color-foreground)] font-medium">{day.day}</span>
                    <span className="text-[color:var(--color-foreground)]">{day.hours.join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[color:var(--color-primary)] text-center">Seguinos</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {company.instagram && (
                  <a
                    href={`https://instagram.com/${company.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-[color:var(--color-muted)]/30 hover:bg-[color:var(--color-primary)]/10 transition-colors text-sm sm:text-base"
                  >
                    <InstagramIcon className="w-5 h-5 text-[color:var(--color-icon)]" />
                    Instagram
                  </a>
                )}
                {company.facebook && (
                  <a
                    href={`https://facebook.com/${company.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-[color:var(--color-muted)]/30 hover:bg-[color:var(--color-primary)]/10 transition-colors text-sm sm:text-base"
                  >
                    <FacebookIcon className="w-5 h-5 text-[color:var(--color-icon)]" />
                    Facebook
                  </a>
                )}
                {company.whatsapp && (
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-[color:var(--color-muted)]/30 hover:bg-[color:var(--color-primary)]/10 transition-colors text-sm sm:text-base"
                  >
                    <WhatsappIcon className="w-5 h-5 text-[color:var(--color-icon)]" />
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
