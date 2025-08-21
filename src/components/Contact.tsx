"use client";
import { company } from "@/app/constants/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="container space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Contacto</h2>
          <p className="text-sm sm:text-base text-[color:var(--color-muted)] max-w-2xl mx-auto px-4">
            Visitá nuestro estudio o contactanos para reservar tu turno
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Mapa y ubicación */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Ubicación</h3>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                <p>{company.adress}</p>
                <p>{company.city}</p>
                <p>Tel: {company.telephone}</p>
                <p>Email: {company.email}</p>
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden border border-white/10">
              <iframe
                src={company.googlemaps}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del estudio"
              />
            </div>
          </div>

          {/* Horarios y redes sociales */}
          <div className="space-y-6 sm:space-y-8">
            {/* Horarios */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Horarios de atención</h3>
              <div className="space-y-1 sm:space-y-2">
                {company.openDays.map((day, index) => (
                  <div key={index} className="flex justify-between text-sm sm:text-base">
                    <span className="text-[color:var(--color-muted)]">{day.day}</span>
                    <span>{day.hours.join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes sociales */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Seguinos</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                {company.instagram && (
                  <a
                    href={`https://instagram.com/${company.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-md border border-white/20 hover:bg-white/5 transition-colors text-sm sm:text-base"
                  >
                    <span className="text-lg">📷</span>
                    Instagram
                  </a>
                )}
                {company.facebook && (
                  <a
                    href={`https://facebook.com/${company.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-md border border-white/20 hover:bg-white/5 transition-colors text-sm sm:text-base"
                  >
                    <span className="text-lg">📘</span>
                    Facebook
                  </a>
                )}
                {company.whatsapp && (
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-md bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/90 transition-colors text-sm sm:text-base"
                  >
                    <span className="text-lg">💬</span>
                    WhatsApp
                  </a>
                )}
              </div>
            </div>

            {/* CTA de reserva */}
            <div className="pt-3 sm:pt-4">
              <a
                href={`https://wa.me/${company.whatsapp}?text=Hola! Quiero reservar un turno para un tatuaje`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Reservar turno
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
