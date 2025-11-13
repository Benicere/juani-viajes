"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const collageImages = [
  {
    id: 1,
    src: "/assets/collage/collage-1.webp",
    alt: "Experiencia de viaje única"
  },
  {
    id: 2,
    src: "/assets/collage/collage-2.webp",
    alt: "Destino increíble"
  },
  {
    id: 3,
    src: "/assets/collage/collage-3.webp",
    alt: "Aventura y descubrimiento"
  },
  {
    id: 4,
    src: "/assets/collage/collage-4.webp",
    alt: "Recuerdos inolvidables"
  }
];

export default function IntroSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className='py-16 md:py-24 lg:py-32 bg-[color:var(--color-background)]'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Texto a la izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                ease: 'easeOut',
              },
            }}
            viewport={{ margin: '0px 0px -100px 0px', once: true }}
            className='space-y-6'
          >
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[color:var(--color-foreground)]'>
              Somos De la Paz tur
            </h2>
            <p className='text-base sm:text-lg lg:text-xl text-[color:var(--color-muted)] leading-relaxed'>
              Somos una agencia de viajes dedicada a crear experiencias únicas e inolvidables. 
              Con años de experiencia en el sector, nos especializamos en diseñar itinerarios 
              personalizados que se adaptan a tus sueños y presupuesto. Nuestro compromiso es 
              hacer que cada viaje sea una aventura extraordinaria.
            </p>
          </motion.div>

          {/* Polaroid stack a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.2,
              },
            }}
            viewport={{ margin: '0px 0px -100px 0px', once: true }}
            className='relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex items-center justify-center'
          >
            {collageImages.map((image, index) => {
              // Posiciones para mobile (más compactas y centradas)
              const positionsMobile = [
                { x: '5%', y: '10%', rotation: -10 },
                { x: '50%', y: '20%', rotation: 12 },
                { x: '20%', y: '48%', rotation: -15 },  // Pingüinos - más al centro y arriba
                { x: '45%', y: '5%', rotation: 8 },
              ];
              
              // Posiciones para desktop (más distribuidas)
              const positionsDesktop = [
                { x: '10%', y: '5%', rotation: -12 },
                { x: '60%', y: '25%', rotation: 15 },
                { x: '20%', y: '55%', rotation: -18 },  // Pingüinos - más al centro y arriba
                { x: '70%', y: '-5%', rotation: 8 },
              ];
              
              // Seleccionar posiciones según el tamaño de pantalla
              const { x, y, rotation } = isDesktop 
                ? positionsDesktop[index] 
                : positionsMobile[index];
              const zIndex = collageImages.length - index;

              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: rotation }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: rotation,
                    transition: {
                      duration: 0.5,
                      delay: 0.3 + (index * 0.1),
                      ease: 'easeOut',
                    },
                  }}
                  viewport={{ margin: '0px 0px -100px 0px', once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    zIndex: 50,
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                  className='absolute w-[140px] sm:w-[180px] md:w-[240px] lg:w-[320px]'
                  style={{
                    left: x,
                    top: y,
                    transform: `rotate(${rotation}deg)`,
                    zIndex: zIndex,
                  }}
                >
                  {/* Polaroid frame */}
                  <div className='bg-white p-3 sm:p-4 shadow-2xl rounded-sm'>
                    {/* Image */}
                    <div className='relative aspect-[4/3] overflow-hidden bg-gray-100'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className='object-cover'
                        sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
                      />
                    </div>
                    {/* Polaroid bottom white space */}
                    <div className='h-8 sm:h-10 bg-white'></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
