"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "¿Cómo funciona el proceso de reserva?",
    answer: "Contactanos por WhatsApp o email, contanos tu destino preferido y fechas. Te armamos un presupuesto personalizado sin compromiso."
  },
  {
    id: 2,
    question: "¿Qué incluyen los paquetes todo incluido?",
    answer: "Nuestros paquetes incluyen vuelos, alojamiento, traslados y algunas excursiones. Te enviamos el detalle completo antes de reservar."
  },
  {
    id: 3,
    question: "¿Puedo personalizar mi viaje?",
    answer: "¡Por supuesto! Trabajamos contigo para crear un itinerario único que se adapte a tus preferencias, presupuesto y tiempo disponible."
  },
  {
    id: 4,
    question: "¿Ofrecen asistencia durante el viaje?",
    answer: "Sí, brindamos asistencia 24/7 durante tu viaje. Estamos disponibles para resolver cualquier inconveniente o duda que tengas."
  },
  {
    id: 5,
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencias bancarias, tarjetas de crédito y débito. También ofrecemos planes de pago en cuotas para que puedas financiar tu viaje."
  }
];

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 bg-black/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg sm:text-xl text-[color:var(--color-muted)] max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de viajes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[color:var(--color-background-secondary)] backdrop-blur-sm rounded-xl overflow-hidden border border-[color:var(--color-muted)]/10"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[color:var(--color-primary)]/10 transition-colors"
              >
                <span className="font-semibold text-[color:var(--color-foreground)] text-lg">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-[color:var(--color-primary)] transition-transform duration-300 ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFaq === faq.id ? 'auto' : 0,
                  opacity: openFaq === faq.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-[color:var(--color-muted)] leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[color:var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[color:var(--color-primary)]/90 transition-colors"
          >
            ¿Tienes otra pregunta?
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
