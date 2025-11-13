"use client";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import Image from "next/image";

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-[color:var(--color-background)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {services.title}
          </h2>
          <p className="text-lg sm:text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto">
            {services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.items.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[color:var(--color-background-secondary)] rounded-xl p-6 hover:bg-[color:var(--color-background-secondary)]/80 transition-all duration-300 hover:scale-105 border border-[color:var(--color-muted)]/10"
            >
              <div className="relative mb-4 aspect-square rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-[color:var(--color-foreground)]">
                {service.title}
              </h3>
              
              <p className="text-[color:var(--color-muted)] mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-[color:var(--color-muted)]">
                    <span className="w-2 h-2 bg-[color:var(--color-primary)] rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://delapazturonline.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[color:var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[color:var(--color-primary)]/90 transition-colors"
          >
            Reserva tu viaje
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
