"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

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
  return (
    <section className='py-16 md:py-24 lg:py-32 bg-[color:var(--color-background)]'>
      <div className='container max-w-screen-2xl'>
        {/* En Tailwind, los espacios en valores arbitrarios van con "_" */}
        <div className='grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center'>
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

          {/* Collage en grid 2x2 (sin superposición) */}
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
            className='w-full flex items-center justify-center lg:justify-end'
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-[620px] lg:max-w-[860px] lg:mr-0">
              {collageImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.45,
                      delay: 0.25 + index * 0.08,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ margin: "0px 0px -100px 0px", once: true }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="w-full"
                >
                  <div className="bg-white p-3 sm:p-4 shadow-2xl rounded-sm">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                      />
                    </div>
                    <div className="h-8 sm:h-10 bg-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
