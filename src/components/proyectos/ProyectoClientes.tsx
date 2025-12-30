'use client'
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ModalData } from '@/types/proyecto.types';
import {
  luminovaModalData,
  congresoModalData,
  radioGoModalData,
  andetModalData,
  autopartesModalData,
  revisteriaModalData,
} from '@/data/projects';
import { ClienteCard } from './ClienteCard';
import { ProyectoModal } from './ProyectoModal';

// Card images replaced with their '-dual.webp' variants from the public/images/proyectos folders
const CongresoDual = '/images/proyectos/congreso/congreso-dual.webp';
const RadioGoDual = '/images/proyectos/radio-go/radio-go-dual.webp';
const AndetDual = '/images/proyectos/andet/andet-dual.webp';
const AutopartesDual = '/images/proyectos/autopartes-deloreans/autopartes-dual.webp';
const LuminovaDual = '/images/proyectos/luminova/luminova-dual.webp';
const RevisteriaDual = '/images/proyectos/revisteria/revisteria-dual.webp';

// Utilidad para extraer todas las imágenes de un modalData (incluyendo subsecciones)
function getAllModalImages(modalData: ModalData): string[] {
  let imgs: string[] = [];
  for (const section of modalData.sections) {
    if (section.images) imgs = imgs.concat(section.images);
    if (section.subsections) {
      for (const sub of section.subsections) {
        if (sub.images) imgs = imgs.concat(sub.images);
      }
    }
  }
  return imgs;
}

export default function ProyClientes() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const filters = ['Todos', 'E-commerce', 'Landing page', 'Corporativo', 'Multimedia', 'Web', 'Software'];
  const [startIdx, setStartIdx] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // reset pagination when filter changes
    setStartIdx(0);
  }, [activeFilter]);

  const proyectos = [
    {
      image: CongresoDual,
      title: 'Congreso',
      description: 'Página oficial del Congreso De Logística y Transporte de la Universidad Nacional Guillermo Brown',
      url: 'https://www.congresologistica.unab.edu.ar/',
      category: 'Web',
      previewImages: isMobile ? getAllModalImages(congresoModalData) : [
        '/images/proyectos/congreso/home/home-1.webp',
        '/images/proyectos/congreso/home/home-2.webp',
        '/images/proyectos/congreso/registro/registro.webp',
        '/images/proyectos/congreso/contacto/contacto.webp',
      ],
      onClick: isMobile ? undefined : () => {
        setModalData(congresoModalData);
        setModalOpen(true);
      },
    },
    {
      image: RadioGoDual,
      title: 'RadioGo',
      description: 'Página de Streaming de radio y entretenimiento',
      url: 'https://radiogo.com.ar/',
      category: 'Multimedia',
      previewImages: isMobile ? getAllModalImages(radioGoModalData) : [
        '/images/proyectos/radio-go/radio-go-01.webp',
        '/images/proyectos/radio-go/radio-go-02.webp',
        '/images/proyectos/radio-go/radio-go-03.webp',
        '/images/proyectos/radio-go/radio-go-04.webp',
      ],
      onClick: isMobile ? undefined : () => {
        setModalData(radioGoModalData);
        setModalOpen(true);
      },
    },
    {
      image: AndetDual,
      title: 'Andet',
      description: 'E-commerce de productos industriales de servicios eléctricos',
      url: 'https://demo-andet-ecommerce.onrender.com/',
      category: 'E-commerce',
      previewImages: isMobile ? getAllModalImages(andetModalData) : [
        '/images/proyectos/andet/andet-01.webp',
        '/images/proyectos/andet/andet-02.webp',
        '/images/proyectos/andet/andet-03.webp',
        '/images/proyectos/andet/andet-04.webp',
      ],
      onClick: isMobile ? undefined : () => {
        setModalData(andetModalData);
        setModalOpen(true);
      },
    },
    {
      image: AutopartesDual,
      title: 'Autopartes Deloreans',
      description: 'E-commerce Empresarial de gestión de autopartes',
      url: 'https://web-autopartes.vercel.app/',
      category: 'Software',
      previewImages: isMobile ? getAllModalImages(autopartesModalData) : [
        '/images/proyectos/autopartes-deloreans/autopartes-01.webp',
        '/images/proyectos/autopartes-deloreans/autopartes-02.webp',
        '/images/proyectos/autopartes-deloreans/autopartes-03.webp',
        '/images/proyectos/autopartes-deloreans/autopartes-04.webp',
      ],
      onClick: isMobile ? undefined : () => {
        setModalData(autopartesModalData);
        setModalOpen(true);
      },
    },
    {
      image: LuminovaDual,
      title: 'Luminova',
      description: 'Software ERP de ensamblado de luminarias con productos importados',
      url: 'https://luminovaerp.pythonanywhere.com/ ',
      category: 'Software',
      previewImages: isMobile ? getAllModalImages(luminovaModalData) : [
        '/images/proyectos/luminova/login/luminova-login.webp',
        '/images/proyectos/luminova/administrador/luminova-admin-01.webp',
        '/images/proyectos/luminova/compras/luminova-compras-01.webp',
        '/images/proyectos/luminova/deposito/luminova-deposito-01.webp',
      ],
      onClick: isMobile ? undefined : () => {
        setModalData(luminovaModalData);
        setModalOpen(true);
      },
    },
    {
      image: RevisteriaDual,
      title: 'La Revisteria',
      description: 'E-commerce de libros y cómics de colección',
      url: 'https://revisteria.pythonanywhere.com/',
      category: 'E-commerce',
      previewImages: isMobile ? getAllModalImages(revisteriaModalData) : [
        '/images/proyectos/revisteria/revisteria-01.webp',
        '/images/proyectos/revisteria/revisteria-02.webp',
        '/images/proyectos/revisteria/revisteria-03.webp',
        '/images/proyectos/revisteria/revisteria-04.webp',
      ],
      onClick: isMobile ? undefined : () => {
        setModalData(revisteriaModalData);
        setModalOpen(true);
      },
    }
  ];
  const filteredProjects = proyectos.filter(p => activeFilter === 'Todos' ? true : p.category === activeFilter);
  
  return (
    <section id="proyectos" className="proyectos-seccion">
      <div className="proyectos-cabecera">
        <h2 className="proyectos-titulo-principal">Proyectos de Nuestros Clientes</h2>
        <p className="proyectos-descripcion">Soluciones digitales a medida para empresas y emprendedores. Descubre cómo potenciamos negocios con tecnología y diseño.</p>
      </div>

      {isMobile ? (
        // Vista móvil: Slider horizontal estilo Netflix
        <div style={{ width: '100%', padding: '0 1rem' }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={false}
            grabCursor={true}
            pagination={{ clickable: true }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            style={{
              paddingBottom: '40px',
            }}
          >
            {proyectos.map((proyecto, index) => (
              <SwiperSlide key={index}>
                <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                  <ClienteCard {...proyecto} />
                  {/* Botón centrado debajo de la card en móvil */}
                  <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <a
                      href={proyecto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proyecto-btn"
                      style={{
                        fontSize: 16,
                        padding: '10px 24px',
                        borderRadius: 8,
                        background: 'linear-gradient(90deg, #3383b7 0%, #86A869 100%)',
                        color: '#fff',
                        fontWeight: 600,
                        boxShadow: '0 4px 24px 0 rgba(2,81,89,0.18)',
                        textDecoration: 'none',
                        marginTop: 12,
                        marginBottom: 8,
                        transition: 'background 0.2s, box-shadow 0.2s',
                        letterSpacing: '0.5px',
                        textAlign: 'center',
                        minWidth: 140,
                      }}
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        // Vista desktop: Swiper centrado con 3 slides visibles
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: "1rem", marginBottom: "2rem" }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h3 style={{ color: '#ffffff', fontSize: 52, marginLeft: 8, marginBottom: 16, fontWeight: 700, alignSelf: "center" }}>Proyectos</h3>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignSelf: "center", marginBottom: 24 }}>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 999,
                    border: activeFilter === f ? 'none' : '2px solid rgba(134,168,105,0.25)',
                    background: activeFilter === f ? 'linear-gradient(90deg, #3383b7 0%, #86A869 100%)' : 'transparent',
                    color: activeFilter === f ? '#fff' : '#cfe9df',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="proyectos-carousel">
            <Swiper
              key={`desktop-swiper-${filteredProjects.length}-${activeFilter}`}
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={3}
              centeredSlides={true}
              loop={filteredProjects.length > 3}
              navigation={true}
              initialSlide={1}
              onSwiper={(s) => {
                swiperRef.current = s;
                // Force center the second visible slide when possible
                setTimeout(() => {
                  try { s.slideToLoop(1, 0); } catch (e) { /* ignore */ }
                }, 50);
              }}
              onSlideChange={() => {
                // no-op placeholder, keeping ref updated if needed later
              }}
              style={{ padding: '1rem 0' }}
            >
              {/* Si hay exactamente 2 proyectos, agregamos un slide vacío al inicio */}
              {filteredProjects.length === 2 && (
                <SwiperSlide key="empty-slide">
                  <div style={{ width: '100%', height: '100%' }} />
                </SwiperSlide>
              )}
              {filteredProjects.map((proyecto, index) => (
                <SwiperSlide key={index}>
                  <ClienteCard {...proyecto} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <AnimatePresence>
        {modalOpen && modalData && (
          <ProyectoModal data={modalData} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
