'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { ModalData, ModalSection } from '@/types/proyecto.types';
import { projectLinks } from '@/data/projectLinks';

type ProyectoModalProps = {
  data: ModalData;
  onClose: () => void;
};

export function ProyectoModal({ data, onClose }: ProyectoModalProps) {
  const [sectionIdx, setSectionIdx] = useState<number>(0);
  const [subIdx, setSubIdx] = useState<number>(0);
  const [imgIdx, setImgIdx] = useState<number>(0);

  const section = data.sections[sectionIdx];
  const isSubsection = !!section.subsections;
  const subsection = isSubsection ? section.subsections![subIdx] : undefined;
  const images = isSubsection ? subsection?.images ?? [] : section.images ?? [];
  const description = isSubsection ? subsection?.description ?? '' : section.description;
  const title = isSubsection ? subsection?.title ?? '' : section.title;

  const projectUrl = projectLinks[data.title] || '';

  // Navegación de imágenes
  const handlePrevImg = () => setImgIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const handleNextImg = () => setImgIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  // Cambio de sección/subsección
  const handleSection = (idx: number) => {
    setSectionIdx(idx);
    setSubIdx(0);
    setImgIdx(0);
  };
  const handleSubsection = (idx: number) => {
    setSubIdx(idx);
    setImgIdx(0);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '1400px',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          zIndex: 9999,
          background: 'none',
          boxSizing: 'border-box',
        }}
        onClick={e => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          style={{
            position: 'relative',
            width: '100%',
            minWidth: 0,
            height: 'auto',
            minHeight: '600px',
            maxHeight: '90vh',
            background: 'linear-gradient(135deg, #214d40ff 0%, #0b312dff 100%)',
            borderRadius: 20,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            overflow: 'hidden',
            border: '1px solid rgba(30, 111, 163, 0.3)',
            display: 'flex',
            boxSizing: 'border-box',
            padding: '1rem',
          }}
        >
        <button
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            cursor: 'pointer',
            fontSize: 24,
            color: '#ffffff',
            background: 'rgba(30, 111, 163, 0.2)',
            borderRadius: '50%',
            padding: 10,
            border: 'none',
            zIndex: 10001,
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          onClick={onClose}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(30, 111, 163, 0.4)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(30, 111, 163, 0.2)'}
        >
          <FaTimes />
        </button>

        {/* Sidebar */}
        <aside style={{
          width: 250,
          background: '#092232ff ',
          padding: '40px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          borderRight: '1px solid rgba(8, 52, 41, 0.3)',
          borderRadius: 12
        }}>
          {data.sections.map((sec: ModalSection, idx: number) => (
            <div key={sec.key}>
              <button
                style={{
                  width: '100%',
                  background: idx === sectionIdx ? 'linear-gradient(90deg, #144a6cff 0%, #063e2aff 100%)' : 'transparent',
                  color: idx === sectionIdx ? '#ffffff' : '#b3d9ff',
                  border: 'none',
                  padding: '14px 24px',
                  textAlign: 'left',
                  fontWeight: idx === sectionIdx ? 600 : 500,
                  cursor: 'pointer',
                  fontSize: 16,
                  borderRadius: 8,
                  marginBottom: 4,
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.3px'
                }}
                onClick={() => handleSection(idx)}
                onMouseEnter={e => {
                  if (idx !== sectionIdx) {
                    e.currentTarget.style.background = 'rgba(30, 111, 163, 0.2)';
                  }
                }}
                onMouseLeave={e => {
                  if (idx !== sectionIdx) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {sec.title}
              </button>
              {/* Subsections */}
              {sec.subsections && idx === sectionIdx && (
                <div style={{ marginLeft: 16, marginTop: 8 }}>
                  {sec.subsections?.map((sub: ModalSection, sidx: number) => (
                    <button
                      key={sub.key}
                      style={{
                        width: '90%',
                        background: sidx === subIdx ? 'linear-gradient(90deg, #1e6fa3 0%, #19bd1fff 100%)' : 'transparent',
                        color: sidx === subIdx ? '#ffffff' : '#b3d9ff',
                        border: 'none',
                        padding: '10px 20px',
                        textAlign: 'left',
                        fontSize: 14,
                        cursor: 'pointer',
                        borderRadius: 6,
                        marginBottom: 2,
                        fontWeight: sidx === subIdx ? 600 : 400,
                        transition: 'all 0.2s ease',
                      }}
                      onClick={() => handleSubsection(sidx)}
                      onMouseEnter={e => {
                        if (sidx !== subIdx) {
                          e.currentTarget.style.background = 'rgba(30, 111, 163, 0.15)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (sidx !== subIdx) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
          position: 'relative',
          minWidth: 0,
          color: '#ffffff'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: 32,
            marginBottom: 12,
            fontWeight: 700,
            textAlign: 'center',
            letterSpacing: '0.5px'
          }}>
            {title}
          </h2>
          <p style={{
            color: '#b3d9ff',
            fontSize: 18,
            marginBottom: 30,
            maxWidth: 600,
            textAlign: 'center',
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            {description}
          </p>

          {/* Slider de imágenes */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 700,
            height: 420,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 16,
            overflow: 'hidden',
            marginBottom: 20,
            border: '1px solid rgba(30, 111, 163, 0.2)'
          }}>
            <button
              onClick={handlePrevImg}
              style={{
                position: 'absolute',
                left: 15,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(30, 111, 163, 0.8)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: 44,
                height: 44,
                fontSize: 18,
                cursor: 'pointer',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(30, 111, 163, 1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(30, 111, 163, 0.8)'}
            >
              <FaChevronLeft />
            </button>

            {images && images.length > 0 ? (
              <Image
                src={images[imgIdx]}
                alt={title}
                width={1600}
                height={900}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  borderRadius: 16,
                  objectFit: 'contain',
                  background: '#000000',
                  boxShadow: '0 8px 32px 0 rgba(2,81,89,0.14)'
                }}
              />
            ) : (
              <div style={{ color: '#1e6fa3', fontSize: 20 }}>Sin imágenes</div>
            )}

            <button
              onClick={handleNextImg}
              style={{
                position: 'absolute',
                right: 15,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(30, 111, 163, 0.8)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: 44,
                height: 44,
                fontSize: 18,
                cursor: 'pointer',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(30, 111, 163, 1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(30, 111, 163, 0.8)'}
            >
              <FaChevronRight />
            </button>

            {/* Miniaturas debajo del slider */}
            {images && images.length > 1 && (
              <div style={{
                position: 'absolute',
                bottom: 15,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 8,
                zIndex: 2
              }}>
                {images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setImgIdx(idx)}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    <Image
                      src={img}
                      alt={`miniatura-${idx}`}
                      width={60}
                      height={36}
                      sizes="60px"
                      style={{
                        borderRadius: 6,
                        border: idx === imgIdx ? '2px solid #1e6fa3' : '1px solid rgba(255, 255, 255, 0.3)',
                        opacity: idx === imgIdx ? 1 : 0.7,
                        transition: 'all 0.2s ease',
                        objectFit: 'cover',
                        background: '#000000'
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        {/* Botón Ver Proyecto debajo del slider */}
        {projectUrl && (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-btn"
              style={{
                fontSize: 18,
                padding: '12px 36px',
                borderRadius: 8,
                background: 'linear-gradient(90deg, #3383b7 0%, #86A869 100%)',
                color: '#fff',
                fontWeight: 600,
                boxShadow: '0 4px 24px 0 rgba(2,81,89,0.18)',
                textDecoration: 'none',
                marginTop: 8,
                transition: 'background 0.2s, box-shadow 0.2s',
                letterSpacing: '0.5px',
                textAlign: 'center',
                minWidth: 180
              }}
            >
              Ver Proyecto
            </a>
          </div>
        )}
        </main>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
