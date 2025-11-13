"use client";
import { motion, AnimatePresence } from "framer-motion";
import { hero } from "@/app/constants/constants";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  // Carrusel de estilos (marquee)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyleIndex((prev) => (prev + 1) % hero.styles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative -mt-16 sm:-mt-24 pb-20 min-h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo difuminada - solo en la sección Hero */}
      <div className="absolute -top-16 sm:-top-24 left-0 right-0 bottom-0 -z-10">
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src={hero.featuredImage.src}
          alt={hero.featuredImage.alt}
          fill
          priority
          className="object-cover opacity-60 blur-[2px]"
        />
      </div>
      
      <div className="container relative z-10 pt-20 sm:pt-24">
        {/* Hero principal */}
        <div className="text-center space-y-6 sm:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 text-white"
          >
            {hero.title}
          </motion.h1>
          
          {/* Carrusel de estilos (Marquee Effect) */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[color:var(--color-secondary)] font-medium px-4 h-8 sm:h-10 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentStyleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                {hero.styles[currentStyleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {hero.subtitle}
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <a 
            href="https://delapazturonline.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
          >
            {hero.primaryCta.label}
          </a>
          <a 
            href={hero.secondaryCta.href} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-white/5 transition-colors text-center"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}


