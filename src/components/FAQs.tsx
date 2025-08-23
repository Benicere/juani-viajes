"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "¿Cuánto cuesta un tatuaje?",
    answer: "El precio varía según el tamaño, complejidad y ubicación. Te damos un presupuesto personalizado en la consulta gratuita."
  },
  {
    id: 2,
    question: "¿Duele mucho?",
    answer: "Cada persona tiene una tolerancia diferente al dolor. Las zonas más sensibles son costillas y pies, pero es totalmente soportable."
  },
  {
    id: 3,
    question: "¿Cuánto tiempo tarda en curarse?",
    answer: "La curación completa toma entre 2-4 semanas. Te damos instrucciones detalladas de cuidados post-tatuaje."
  },
  {
    id: 4,
    question: "¿Puedo elegir mi propio diseño?",
    answer: "¡Por supuesto! Trabajamos juntos para crear un diseño único y personalizado que refleje tu estilo y personalidad."
  },
  {
    id: 5,
    question: "¿Qué tan seguros son los materiales?",
    answer: "Usamos solo materiales esterilizados y de primera calidad. Cumplimos todos los estándares de higiene y seguridad."
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
            Resolvemos las dudas más comunes sobre tatuajes y piercings
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold text-white text-lg">{faq.question}</span>
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
