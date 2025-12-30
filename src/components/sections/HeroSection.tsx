"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
//import Link from 'next/link';
import heroImage from '@/assets/images/heroo_image.webp';
import Logo from '@/assets/images/Folkode_Logo_Bold_Black_PNG.webp';

export default function HeroSection() {
  const [navHeight, setNavHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  useEffect(() => {
    const navbar = document.querySelector('nav.navbar') as HTMLElement | null
    if (!navbar) return

    const updateHeight = () => setNavHeight(navbar.offsetHeight)
    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    observer.observe(navbar)

    return () => observer.disconnect()
  }, [])

  // Scroll handler: intenta ir a '#sobre-nosotros', si no existe, usa el siguiente hermano
  const scrollToNext = () => {
    let target = document.querySelector('#sobre-nosotros') as HTMLElement | null
    if (!target && ref.current) {
      target = ref.current.nextElementSibling as HTMLElement | null
    }
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative w-full flex items-center justify-center hero-section min-h-[300px] !pb-0"
      ref={ref}
    >

      {/* Fondo animado */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 z-[0]"
        style={{ overflow: 'hidden' }}
      >
        <Image
          src={heroImage}
          alt="Fondo hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Contenido del cartel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full px-4 sm:px-6 md:px-10 lg:px-16 z-[2]"
      >
        <div
          className="
            rounded-2xl
            p-8 md:p-12 lg:p-14
            flex flex-col
            items-center
            text-center
            gap-6
            w-full
            max-w-full
            sm:max-w-[90%]
            md:max-w-[720px]
            lg:max-w-[850px]
          "
          style={{
            boxShadow: '0 0 40px rgba(0,0,0,0.35)',
            border: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(15,15,15,0.45)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(18px)',
            maxWidth: '850px',
          }}
        >

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <Image
              src={Logo}
              alt="Logo Folkode"
              className="w-[140px] md:w-[180px] lg:w-[210px] -mb-8 drop-shadow-xl"
              width={210}
              height={210}
            />
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="
              hero-title
              font-light
              text-4xl md:text-5xl lg:text-6xl
            "
            style={{
              textShadow: '0 2px 12px #00000055',
              letterSpacing: '-0.02em',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 400,
            }}
          >
            Fol
            <span style={{ color: '#56743c', fontWeight: 600 }}>kode</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="hero-text text-md md:text-lg lg:text-xl"
            style={{
              color: 'white',
              textShadow: '0 1px 10px #00000055',
              fontWeight: 300,
              marginBottom: '.5rem',
            }}
          >
            Desarrollo de software
          </motion.p>

          {/* Botón 'Descubrir' movido abajo del hero (ver más abajo) */}

        </div>
      </motion.div>
      {/* Botón "Descubrir" debajo del cartel (centrado, con scroll suave) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center"
      >
        <button
          onClick={scrollToNext}
          aria-label="Descubrir siguiente sección"
          className="text-white text-sm md:text-base opacity-95 hover:opacity-100 transition cursor-pointer"
          style={{ letterSpacing: '0.5px', fontWeight: 600 }}
        >
          Descubrir
        </button>

        {/* Flecha animada */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1 text-white text-lg"
        >
          ▼
        </motion.div>
      </motion.div>

    </section>
  )
}
