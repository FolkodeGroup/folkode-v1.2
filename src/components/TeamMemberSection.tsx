'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFolder } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  id: string;
  avatar: string;
  name: string;
  role: string;
  description: string;
  links: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    avatar: "/laura-gimenez.webp",
    name: "Laura Giménez",
    role: "FRONTEND DEVELOPER",
    description: "Apasionada por crear experiencias digitales memorables que conectan personas y tecnología.",
    links: {
      github: 'https://github.com/Laura-gim',
      portfolio: '#',
    },
  },
  {
    id: "member-2",
    avatar: "/celi.webp",
    name: "Celina Pereyra",
    role: "FRONTEND DEVELOPER",
    description: "Construyendo soluciones con pasión por la tecnología.",
    links: {
      github: 'https://github.com/CelinaJP',
      linkedin: 'https://www.linkedin.com/in/celina-pereyra',
      portfolio: '#',
    },
  },
  {
    id: "member-3",
    avatar: "/Daro.webp",
    name: "Daro Giménez",
    role: "FULL STACK DEVELOPER",
    description: "Creando experiencias de usuario memorables y funcionales.",
    links: {
      github: 'https://github.com/dgimenezdeveloper',
      linkedin: 'https://www.linkedin.com/in/daseg/',
      portfolio: '#',
    },
  },
  {
    id: "member-4",
    avatar: "/gabrielsosa.webp",
    name: "Gabriel Sosa",
    role: "FULL STACK DEVELOPER",
    description: "Programar es construir puentes entre ideas y realidad usando lógica y creatividad.",
    links: {
      github: 'https://github.com/OGabrielSosa',
      linkedin: 'https://linkedin.com/in/carlos',
      portfolio: '#'
    },
  },
  {
    id: "member-5",
    avatar: "/matias.webp",
    name: "Matias Daniel Alessandrello",
    role: "FULL STACK DEVELOPER",
    description: "Los detalles importan. Cada línea de código cuenta para lograr un producto excepcional.",
    links: {
      github: 'https://github.com/malessan4',
      linkedin: '#',
      portfolio: '#',
    },
  },
  {
    id: "member-6",
    avatar: "/Ovejero.webp",
    name: "Agustin Ovejero",
    role: "BACKEND DEVELOPER",
    description: "Desarrollando soluciones innovadoras con un enfoque en la usabilidad.",
    links: {
      github: 'https://github.com/agustin-ovejero',
      linkedin: 'https://www.linkedin.com/in/agustin-ovejero-2a0439344/',
      portfolio: '#',
    },
  },
  {
    id: "member-7",
    avatar: "/cuqui.webp",
    name: "Lucas Echavarria",
    role: "BACKEND DEVELOPER",
    description: "El mejor código no es el que funciona, sino el que otros pueden entender y mantener.",
    links: {
      github: 'https://github.com/Lucasechavarria',
      linkedin: 'https://linkedin.com/in/lucas-echavarria',
      portfolio: '#',
    },
  },
  {
    id: "member-8",
    avatar: "/fede.webp",
    name: "Fede Paal",
    role: "FRONTEND DEVELOPER",
    description: "Cada decisión en el frontend es una decisión sobre la experiencia del usuario",
    links: {
      github: 'https://github.com/FedericoPaal',
      linkedin: 'https://linkedin.com/in/federico-paal ',
      portfolio: '#',
    },
  },
  {
    id: "member-9",
    avatar: "/mauri.webp",
    name: "Mauricio Barreras",
    role: "FRONTEND DEVELOPER",
    description: "Un diseño consistente es la base de la confianza del usuario",
    links: {
      github: 'https://github.com/MauricioBarreras',
      linkedin: 'https://www.linkedin.com/in/mauricio-barreras-235b8128a',
      portfolio: '#',
    },
  },
  {
    id: "member-10",
    avatar: "/sasha.webp",
    name: "Sasha Porchia",
    role: "FRONTEND DEVELOPER",
    description: "Cada decisión en el frontend es una decisión sobre la experiencia del usuario",
    links: {
      github: 'https://github.com/SashaPorchia',
      linkedin: '#',
      portfolio: '#',
    },
  },
  {
    id: "member-11",
    avatar: "/nahue.webp",
    name: "Nahue Dalesio",
    role: "FULL STACK DEVELOPER",
    description: "El software funcionando es la principal medida de progreso.",
    links: {
      github: 'https://github.com/Nahuel-Dalesio',
      linkedin: 'https://ar.linkedin.com/in/nahuel-dalesio-183498213',
      portfolio: '#',
    },
  },
  {
    id: "member-12",
    avatar: "/Mai.webp",
    name: "Maia Avalos",
    role: "FULL STACK DEVELOPER",
    description: "Nunca me conformo; el progreso constante es la clave del éxito.",
    links: {
      github: 'https://github.com/maiavalos',
      linkedin: 'https://www.linkedin.com/in/maia-avalos-a37098345',
      portfolio: 'no tengo',
    },
  },
  {
    id: "member-13",
    avatar: "/Facu.webp",
    name: "Facu Carrizo",
    role: "FULL STACK DEVELOPER",
    description: "El buen código resuelve problemas, el excelente los previene.",
    links: {
      github: 'https://github.com/',
      linkedin: '#',
      portfolio: '#',
    },
  },
];

export default function TeamMemberSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0]);
  const topRowMembers = teamMembers.slice(0, 7);
  const bottomRowMembers = teamMembers.slice(7);

  const circleSize = 280; // Tamaño del círculo en px
  const circleRadius = circleSize / 2;

  return (
    <section className="w-full min-h-[700px] flex flex-col items-center justify-center py-16 px-4" style={{ background: 'linear-gradient(180deg, #0d1117 0%, #025159 100%)' }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        Nuestro equipo
      </h2>

      <div className="flex flex-col items-center w-full max-w-6xl mb-12">
        {/* Contenedor principal con círculo a la izquierda y tarjeta a la derecha */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full mb-12">
          {/* Wrapper para círculo y tarjeta unidos */}
          <div className="flex items-center justify-center relative">
            {/* Círculo con imagen a la izquierda */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative flex-shrink-0 z-10"
                style={{
                  width: `${circleSize}px`,
                  height: `${circleSize}px`,
                }}
              >
                <div 
                  className="w-full h-full rounded-full overflow-hidden shadow-2xl relative"
                  style={{ background: '#025159', transform: 'translateZ(0)' }}
                >
                  <Image
                    src={selectedMember.avatar}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                    sizes={`${circleSize}px`}
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Tarjeta de información a la derecha */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.id + '-card'}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="relative overflow-hidden"
                style={{
                  minHeight: `${circleSize}px`,
                  maxWidth: '600px',
                  marginLeft: `-${circleRadius}px`, // Solapamiento negativo para unir con el círculo
                  zIndex: 0
                }}
              >
                <div
                  className="h-full flex flex-col justify-center shadow-xl"
                  style={{
                    background: '#0B4F50', // Color sólido similar a la imagen 1
                    borderRadius: '0 20px 20px 0', // Bordes redondeados solo a la derecha
                    minHeight: `${circleSize}px`,
                    paddingLeft: `${circleRadius + 40}px`, // Padding izquierdo para compensar el círculo
                    paddingRight: '40px',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                  }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 font-normal mb-4">
                    {selectedMember.role}
                  </p>
                  <p className="text-white text-base mb-6 leading-relaxed">
                    {selectedMember.description}
                  </p>
                  
                  {/* Enlaces sociales */}
                  <div className="flex gap-4">
                    {selectedMember.links.github && selectedMember.links.github !== '#' && (
                      <a 
                        href={selectedMember.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        <FaGithub size={28} />
                      </a>
                    )}
                    {selectedMember.links.linkedin && selectedMember.links.linkedin !== '#' && (
                      <a 
                        href={selectedMember.links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        <FaLinkedin size={28} />
                      </a>
                    )}
                    {selectedMember.links.portfolio && selectedMember.links.portfolio !== '#' && selectedMember.links.portfolio !== 'no tengo' && (
                      <a 
                        href={selectedMember.links.portfolio} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        <FaFolder size={28} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Grid de miembros en dos filas */}
        <div className="flex flex-col gap-4 items-center w-full">
          {/* Fila superior */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 bg-[#04746A]/50 backdrop-blur-sm rounded-2xl px-6 py-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {topRowMembers.map((member) => (
              <motion.button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-300 isolate ${
                  selectedMember.id === member.id 
                    ? 'border-[#86A869] scale-110 shadow-lg shadow-[#86A869]/50' 
                    : 'border-[#025159] grayscale hover:grayscale-0 hover:border-[#86A869]/50 hover:scale-105'
                }`}
                whileHover={{ scale: selectedMember.id === member.id ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Fila inferior */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 bg-[#04746A]/50 backdrop-blur-sm rounded-2xl px-6 py-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {bottomRowMembers.map((member) => (
              <motion.button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-300 isolate ${
                  selectedMember.id === member.id 
                    ? 'border-[#86A869] scale-110 shadow-lg shadow-[#86A869]/50' 
                    : 'border-[#025159] grayscale hover:grayscale-0 hover:border-[#86A869]/50 hover:scale-105'
                }`}
                whileHover={{ scale: selectedMember.id === member.id ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
