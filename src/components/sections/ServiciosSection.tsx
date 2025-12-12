"use client";
import Card from "@/components/ServicioCard";
import { motion } from "framer-motion";
import { FC } from "react";
import { Cpu } from "lucide-react";

const services = [
  {
    id: 'web-dev',
    mode: 'dark',
    iconClass: 'bi bi-code-slash',
    title: 'Desarrollo Web Profesional',
    items: [
      'Aplicaciones web a medida con tecnologías modernas (React, Vue.js, Django)',
      'Landing pages optimizadas para SEO y conversión.',
      'E-commerce integrado con pasarelas de pago y gestión de inventario.',
    ],
  },
  {
    id: 'auto-product',
    mode: 'light',
    iconClass: 'bi bi-gear-fill',
    title: 'Automatización y Productividad',
    items: [
      'Sistemas CRM/ERP adaptados a tus procesos.',
      'Integración de APIs y flujos de trabajo automatizados.',
      'Herramientas internas para optimizar operaciones.',
    ],
  },
  {
    id: 'mobile-apps',
    mode: 'dark',
    iconClass: 'bi bi-phone',
    title: 'Mobile Apps Híbridas',
    items: [
      'Aplicaciones multiplataforma (iOS/Android) con Flutter o React Native.',
      'Prototipado rápido y diseño centrado en usuario.',
    ],
  },
  {
    id: 'consu-it',
    mode: 'light',
    iconClass: 'bi bi-cloud-arrow-up',
    title: 'Consultoría IT',
    items: [
      'Auditoría técnica y modernización de sistemas legacy.',
      'Migración a la nube (AWS, Google Cloud, Azure).',
    ],
  },
  {
    id: 'soft-social',
    mode: 'dark',
    iconClass: 'bi bi-people-fill',
    title: 'Software para Impacto Social',
    items: [
      'Soluciones con propósito para ONGs y emprendimientos sostenibles.',
      'Plataformas educativas y de gestión comunitaria.',
    ],
  },
]

const Servicios: FC = () => {
  return (
    <section
      id="servicios"
      className="relative w-full py-5 text-white overflow-hidden"
    >
      {/* Fondo (reemplazalo por tu imagen si querés) */}

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Título animado */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl text-light md:text-5xl sm:text-3xl mb-14 text-center font-sans"
        >
          Nuestros Servicios
        </motion.h2>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">

            {/* ------- Fila 1 (3 cards) ------- */}
            {services.slice(0, 3).map((service, index) => (
                <Card
                key={index}
                title={service.title}
                items={service.items}
                icon={<Cpu className="w-12 h-12 text-[#86A869]"/>}
                />
            ))}

            {/* ------- Fila 2 (2 cards centradas) ------- */}
            {/* En mobile: ocupan 1 columna cada una → stacking normal */}
            {/* En desktop: ocupan 3 columnas, pero dentro hay un flex centrado → se centran las dos cards */}
            <div className="md:col-span-3 flex flex-col md:flex-row justify-center items-center gap-10 w-full">
                {services.slice(3, 5).map((service, i) => (
                <Card
                    key={i + 3}
                    title={service.title}
                    items={service.items}
                    icon={<Cpu className="w-12 h-12 text-[#86A869]" />}
                />
                ))}
            </div>

            </div>

      </div>
    </section>
  );
};

export default Servicios;