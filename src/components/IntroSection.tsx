"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const introImages = [
  {
    id: 1,
    src: "/assets/nosotros/nosotros-1.webp",
    alt: "Destino de viaje - Experiencia única"
  },
  {
    id: 2,
    src: "/assets/nosotros/nosotros-2.webp",
    alt: "Viajeros disfrutando de su aventura"
  },
  {
    id: 3,
    src: "/assets/nosotros/nosotros-3.webp",
    alt: "Destino paradisíaco"
  },
  {
    id: 4,
    src: "/assets/nosotros/nosotros-4.webp",
    alt: "Paisaje increíble"
  },
  {
    id: 5,
    src: "/assets/nosotros/nosotros-5.webp",
    alt: "Experiencia de viaje"
  },
  {
    id: 6,
    src: "/assets/nosotros/nosotros-6.webp",
    alt: "Aventura y descubrimiento"
  }
];

export default function IntroSection() {
  const autoplayOptions = {
    delay: 2500,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    Autoplay(autoplayOptions),
  ]);

  const [clicked, setClicked] = useState(false);

  return (
    <section className='flex justify-center my-16 md:my-24 lg:my-32 mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
      <div className='flex flex-col items-center max-w-6xl'>
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          }}
          viewport={{ margin: '0px 0px -300px 0px', once: true }}
          className='flex flex-col items-center'
        >
          <h4 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-[color:var(--color-foreground)] text-center'>
            Conocé más de <span className='text-[color:var(--color-primary)]'>Nosotros</span>
          </h4>
          <p className='w-full max-w-[380px] sm:max-w-max sm:w-[480px] lg:w-[500px] xl:w-[620px] text-center text-[color:var(--color-muted)] text-sm sm:text-base lg:text-lg mt-2 sm:mt-3'>
            Con años de experiencia, nos especializamos en crear viajes únicos y personalizados que superan tus expectativas.
          </p>
          <Link
            href='/nosotros'
            className='bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/90 transition-colors px-4 md:px-6 py-3 text-white font-semibold rounded mt-3 text-sm md:text-base'
          >
            Ver más
          </Link>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          }}
          viewport={{ margin: '0px 0px -300px 0px', once: true }}
          onMouseUp={() => setClicked(false)}
          onMouseDown={() => setClicked(true)}
          className={`overflow-hidden mt-5 md:mt-8 relative flex justify-start w-full ${
            clicked ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          ref={emblaRef}
        >
          <div className='flex justify-start items-start w-full'>
            {introImages.map((image) => (
              <div key={image.id} className='flex-[0_0_70%] sm:flex-[0_0_45%] md:flex-[0_0_35%] mr-3 sm:mr-5 md:mr-8 lg:mr-10'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className='absolute w-3 sm:w-5 md:w-10 h-full top-0 left-0 bg-gradient-to-r from-black'></div>
          <div className='absolute w-3 sm:w-5 md:w-10 h-full top-0 right-0 bg-gradient-to-l from-black'></div>
        </motion.article>
      </div>
    </section>
  );
}
