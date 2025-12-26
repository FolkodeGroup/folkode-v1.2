'use client'
import Image, { StaticImageData } from 'next/image';
import { motion, useMotionValue, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Utilidad simple de throttle tipada correctamente
function throttle<Args extends unknown[]>(fn: (...args: Args) => void, wait: number): (...args: Args) => void {
  let last = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Args;
  return function(this: unknown, ...args: Args) {
    const now = Date.now();
    lastArgs = args;
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        last = Date.now();
        timeout = null;
        fn.apply(this, lastArgs);
      }, wait - (now - last));
    }
  };
}

export type ClienteCardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  url?: string;
  category: string;
  onClick?: () => void;
  previewImages?: string[];
};

export function ClienteCard({ image, title, description, category, onClick, previewImages, url }: ClienteCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-40px' });
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Detectar móvil para ajustar estilos y lógica
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Tilt efecto solo en desktop
  const calcTilt = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const maxTilt = 7;
    const rotateY = ((x - midX) / midX) * maxTilt;
    const rotateX = -((y - midY) / midY) * maxTilt;
    return { rotateX, rotateY };
  };
  const throttledMouseMove = useRef<((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | null>(null);
  if (!throttledMouseMove.current) {
    throttledMouseMove.current = throttle((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!cardRef.current) return;
      const { rotateX: rx, rotateY: ry } = calcTilt(e, cardRef.current);
      rotateX.set(rx);
      rotateY.set(ry);
    }, 24);
  }
  const handleMouseMove = throttledMouseMove.current as (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div
      className="proyecto-card"
      ref={cardRef}
      style={{
        zIndex: 0,
        perspective: 1000,
        cursor: onClick && !isMobile ? 'pointer' : 'default',
        transition: 'box-shadow 0.3s, transform 0.3s',
        opacity: isInView ? 1 : 0,
        minHeight: isMobile ? 420 : undefined, // Altura mínima en móvil
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
      }}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      whileHover={!isMobile ? {
        scale: 1.02,
        boxShadow: '0 20px 60px 0 rgba(51,131,183,0.25)',
      } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={onClick && !isMobile ? handleCardClick : undefined}
    >
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <div className="proyecto-img-wrapper" style={{ position: 'relative', width: '100%', height: 300, overflow: 'hidden', borderTopLeftRadius: 18, borderTopRightRadius: 18, background: '#eaf6fa' }}>
          <span className="proyecto-etiqueta" style={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }}>{category}</span>
          {/* Mini-slider de imágenes dentro de la card */}
          {previewImages && previewImages.length > 0 ? (
            <div
              style={{ position: 'relative', width: '100%', height: '100%', cursor: onClick && !isMobile ? 'pointer' : 'default' }}
              onClick={onClick && !isMobile ? handleCardClick : undefined}
            >
              <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                loop={true}
                onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              >
                {previewImages.map((imgSrc, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={imgSrc}
                      alt={`${title} - ${idx + 1}`}
                      fill
                      className="proyecto-img"
                      sizes="(max-width: 768px) 90vw, 400px"
                      style={{ objectFit: 'cover', width: '100%', height: '100%', pointerEvents: 'none' }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Indicador de cantidad de imágenes */}
              <div style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '4px 10px',
                borderRadius: 12,
                fontSize: '0.75rem',
                fontWeight: 600,
                zIndex: 10,
                pointerEvents: 'none',
              }}>
                {currentImageIndex + 1} / {previewImages.length}
              </div>
            </div>
          ) : (
            <Image
              src={image}
              alt={title}
              width={typeof image === 'string' ? 400 : image.width}
              height={typeof image === 'string' ? 300 : image.height}
              className="proyecto-img"
              sizes="(max-width: 768px) 90vw, 400px"
              style={{ objectFit: 'cover', width: '100%', height: '100%', pointerEvents: 'none' }}
              onClick={onClick && !isMobile ? handleCardClick : undefined}
            />
          )}
        </div>
        <div className="proyecto-info" style={{ cursor: onClick && !isMobile ? 'pointer' : 'default', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', background: 'rgba(4, 28, 22, 0.92)', borderBottomLeftRadius: 18, borderBottomRightRadius: 18, padding: '20px 18px 18px 18px', marginTop: 0 }}>
          <h3 className="proyecto-titulo">{title}</h3>
          <p className="proyecto-desc">{description}</p>
          {/* Mostrar botón dentro de la card para escritorio */}
          {!isMobile && (
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <button
                onClick={onClick}
                className="proyecto-btn pointer"
                style={{ textAlign: 'center', minWidth: 160 }}
              >
                Ver galería
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
